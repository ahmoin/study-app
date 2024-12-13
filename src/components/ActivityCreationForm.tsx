import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { ActivityVariant, ActivityWord, SavedActivity } from '@/types/quiz';
import { Checkbox } from "@/components/ui/checkbox";

interface ActivityCreationFormProps {
  onSave: (activity: {
    name: string;
    variant: ActivityVariant;
    wordPairs: ActivityWord[];
    blurOptions?: boolean;
  }) => void;
  initialActivity?: SavedActivity;
  onCancel?: () => void;
}

export function ActivityCreationForm({ onSave, initialActivity, onCancel }: ActivityCreationFormProps) {
  const [activityName, setActivityName] = useState(initialActivity?.name || '');
  const [variant, setVariant] = useState<ActivityVariant>(initialActivity?.variant || 'four-choice');
  const [blurOptions, setBlurOptions] = useState(initialActivity?.blurOptions || false);
  const [leftWords, setLeftWords] = useState<string>(
    initialActivity?.wordPairs.map(pair => pair.word).join('\n') || ''
  );
  const [rightWords, setRightWords] = useState<string>(
    initialActivity?.wordPairs.map(pair => pair.translation).join('\n') || ''
  );

  const handleSave = () => {
    const leftWordsList = leftWords.split('\n').filter(w => w.trim());
    const rightWordsList = rightWords.split('\n').filter(w => w.trim());
    
    if (leftWordsList.length !== rightWordsList.length) {
      alert('Both columns must have the same number of words');
      return;
    }

    const wordPairs: ActivityWord[] = leftWordsList.map((word, index) => ({
      word: word.trim(),
      translation: rightWordsList[index].trim()
    }));

    onSave({
      name: activityName,
      variant,
      wordPairs,
      blurOptions: variant === 'four-choice' ? blurOptions : undefined
    });

    // Reset form
    setActivityName('');
    setLeftWords('');
    setRightWords('');
    setBlurOptions(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          {initialActivity ? `Edit Activity: ${initialActivity.name}` : 'Create New Activity'}
        </h2>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="activity-name">Activity Name</Label>
          <Input
            id="activity-name"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            placeholder="Enter activity name"
          />
        </div>
        <div>
          <Label htmlFor="activity-variant">Activity Type</Label>
          <Select
            value={variant}
            onValueChange={(value: ActivityVariant) => setVariant(value)}
          >
            <SelectTrigger id="activity-variant">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="four-choice">Four Choice Quiz</SelectItem>
              <SelectItem value="matching-pairs">Matching Pairs</SelectItem>
              <SelectItem value="typing-practice">Typing Practice</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {variant === 'four-choice' && (
          <div className="col-span-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="blur-options"
                checked={blurOptions}
                onCheckedChange={(checked) => setBlurOptions(checked as boolean)}
              />
              <Label htmlFor="blur-options">
                Blur answer choices until revealed
              </Label>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 relative">
        <div>
          <Label htmlFor="left-words">Left Column Words</Label>
          <textarea
            id="left-words"
            className="w-full min-h-[200px] p-2 border rounded-md"
            value={leftWords}
            onChange={(e) => setLeftWords(e.target.value)}
            placeholder="Enter words (one per line)"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            const tempWords = leftWords;
            setLeftWords(rightWords);
            setRightWords(tempWords);
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-8 h-8"
          title="Switch Columns"
        >
          ↔️
        </Button>
        <div>
          <Label htmlFor="right-words">Right Column Words</Label>
          <textarea
            id="right-words"
            className="w-full min-h-[200px] p-2 border rounded-md"
            value={rightWords}
            onChange={(e) => setRightWords(e.target.value)}
            placeholder="Enter translations (one per line)"
          />
        </div>
      </div>

      <div className="flex gap-2 justify-end">
        {onCancel && (
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button 
          onClick={handleSave}
          disabled={!activityName || !leftWords || !rightWords}
        >
          {initialActivity ? 'Save Changes' : 'Create Activity'}
        </Button>
      </div>
    </div>
  );
} 