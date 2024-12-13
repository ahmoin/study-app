import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import type { SavedActivity, ActivityWord } from '@/types/quiz';
import { SpeakButton } from "./SpeakButton";

interface ActivityPlayerProps {
  activity: SavedActivity;
  onClose: () => void;
}

export function ActivityPlayer({ activity, onClose }: ActivityPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (activity.variant === 'four-choice') {
      generateOptions();
    }
  }, [currentIndex]);

  const generateOptions = () => {
    const correctAnswer = activity.wordPairs[currentIndex].translation;
    const otherAnswers = activity.wordPairs
      .filter((_, index) => index !== currentIndex)
      .map(pair => pair.translation)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    const allOptions = [...otherAnswers, correctAnswer]
      .sort(() => Math.random() - 0.5);
    
    setOptions(allOptions);
  };

  const checkAnswer = () => {
    const isCorrect = userAnswer.toLowerCase().trim() === 
      activity.wordPairs[currentIndex].translation.toLowerCase().trim();
    
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentIndex < activity.wordPairs.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer('');
      setShowResult(false);
    } else {
      // Activity completed
      alert(`Activity completed! Score: ${score}/${activity.wordPairs.length}`);
      onClose();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
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
      onKeyPress={handleKeyPress}
      tabIndex={0}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">{activity.name}</h2>
          <p className="text-muted-foreground">
            Question {currentIndex + 1} of {activity.wordPairs.length}
          </p>
        </div>
        <Button variant="ghost" onClick={onClose}>Exit</Button>
      </div>

      <div className="space-y-4">
        <div className="font-medium flex items-center gap-2">
          Translate: {activity.wordPairs[currentIndex].word}
          <SpeakButton 
            text={activity.wordPairs[currentIndex].word}
          />
        </div>

        {activity.variant === 'four-choice' ? (
          <RadioGroup value={userAnswer} onValueChange={setUserAnswer}>
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        ) : activity.variant === 'typing-practice' ? (
          <Input
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your answer"
            autoFocus
          />
        ) : null}
      </div>

      {showResult && (
        <div className={`p-4 rounded-lg ${
          userAnswer.toLowerCase().trim() === activity.wordPairs[currentIndex].translation.toLowerCase().trim()
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {userAnswer.toLowerCase().trim() === activity.wordPairs[currentIndex].translation.toLowerCase().trim()
            ? 'Correct!' 
            : `Incorrect. The correct answer is: ${activity.wordPairs[currentIndex].translation}`
          }
        </div>
      )}

      <div className="flex justify-between">
        <Button 
          onClick={checkAnswer} 
          disabled={!userAnswer || showResult}
        >
          Check Answer
        </Button>
        <Button 
          onClick={nextQuestion} 
          disabled={!showResult}
        >
          {currentIndex < activity.wordPairs.length - 1 ? 'Next' : 'Finish'}
        </Button>
      </div>
    </div>
  );
} 