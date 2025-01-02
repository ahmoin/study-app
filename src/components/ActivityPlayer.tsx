import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { SavedActivity, ActivityWord } from "@/types/quiz";
import { SpeakButton } from "./SpeakButton";
declare const responsiveVoice: any;

interface ActivityPlayerProps {
  activity: SavedActivity;
  onClose: () => void;
}

export function ActivityPlayer({ activity, onClose }: ActivityPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [shuffledPairs, setShuffledPairs] = useState<ActivityWord[]>([]);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showOptions, setShowOptions] = useState(!activity.blurOptions);

  const normalizeAnswer = (text: string) => {
    const normalized = text
      .toLowerCase()
      .trim()
      .replace(/-/g, "") // Remove all dashes
      .replace(/\s+/g, " "); // Normalize spaces

    return normalized;
  };

  // Initialize shuffled pairs when component mounts
  useEffect(() => {
    const shuffled = [...activity.wordPairs].sort(() => Math.random() - 0.5);
    setShuffledPairs(shuffled);
  }, [activity.wordPairs]);

  useEffect(() => {
    if (activity.variant === "four-choice") {
      generateOptions();
    }
    // Auto-play the word when question loads
    if (shuffledPairs.length > 0) {
      responsiveVoice.speak(shuffledPairs[currentIndex].word, "Spanish Female");
    }
  }, [currentIndex, shuffledPairs]);

  const generateOptions = () => {
    if (shuffledPairs.length === 0) return;

    const correctAnswer = shuffledPairs[currentIndex].translation;
    const otherAnswers = shuffledPairs
      .filter((_, index) => index !== currentIndex)
      .map((pair) => pair.translation)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const allOptions = [...otherAnswers, correctAnswer].sort(
      () => Math.random() - 0.5,
    );

    setOptions(allOptions);
  };

  const checkAnswer = () => {
    const userNormalized = normalizeAnswer(userAnswer);
    const correctNormalized = normalizeAnswer(
      shuffledPairs[currentIndex].translation,
    );

    const isCorrect = userNormalized === correctNormalized;

    if (isCorrect) {
      setScore(score + 1);
    } else {
      responsiveVoice.speak(
        shuffledPairs[currentIndex].translation,
        "US English Female",
      );
    }
    setShowResult(true);
    setTimeout(() => nextButtonRef.current?.focus(), 0);
  };

  const nextQuestion = () => {
    if (currentIndex < shuffledPairs.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer("");
      setShowResult(false);
      setShowOptions(!activity.blurOptions);
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      // Activity completed
      alert(`Activity completed! Score: ${score}/${shuffledPairs.length}`);
      onClose();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      if (showResult) {
        nextQuestion();
      } else if (userAnswer) {
        checkAnswer();
      }
    }
  };

  return (
    <div
      className="max-w-2xl mx-auto bg-card border rounded-lg p-6 space-y-6"
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">{activity.name}</h2>
          <p className="text-muted-foreground">
            Question {currentIndex + 1} of {shuffledPairs.length}
          </p>
        </div>
        <Button variant="ghost" onClick={onClose}>
          Exit
        </Button>
      </div>

      {shuffledPairs.length > 0 && (
        <div className="space-y-4">
          <div className="font-medium flex items-center gap-2">
            Translate: {shuffledPairs[currentIndex].word}
            <SpeakButton text={shuffledPairs[currentIndex].word} />
          </div>

          {activity.variant === "four-choice" ? (
            <div className="space-y-4">
              <RadioGroup
                value={userAnswer}
                onValueChange={setUserAnswer}
                disabled={showResult}
                className={
                  activity.blurOptions && !showOptions ? "blur-sm" : ""
                }
              >
                {options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={option}
                      id={`option-${index}`}
                      disabled={showResult}
                    />
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>

              {activity.blurOptions && !showOptions && (
                <Button
                  variant="outline"
                  onClick={() => setShowOptions(true)}
                  className="w-full"
                >
                  Show Answer Choices
                </Button>
              )}
            </div>
          ) : activity.variant === "typing-practice" ? (
            <Input
              ref={inputRef}
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Type your answer"
              disabled={showResult}
            />
          ) : null}
        </div>
      )}

      {showResult && (
        <div
          className={`p-4 rounded-lg ${
            normalizeAnswer(userAnswer) ===
            normalizeAnswer(shuffledPairs[currentIndex].translation)
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {normalizeAnswer(userAnswer) ===
          normalizeAnswer(shuffledPairs[currentIndex].translation)
            ? "Correct!"
            : `Incorrect. The correct answer is: ${shuffledPairs[currentIndex].translation}`}
        </div>
      )}

      <div className="flex justify-between">
        <Button
          ref={nextButtonRef}
          onClick={showResult ? nextQuestion : checkAnswer}
          disabled={!userAnswer && !showResult}
        >
          {showResult
            ? currentIndex < shuffledPairs.length - 1
              ? "Next"
              : "Finish"
            : "Check Answer"}
        </Button>
      </div>
    </div>
  );
}
