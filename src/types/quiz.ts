export type QuestionType = 'multiple-choice' | 'constructed-response'

interface ConstructedResponseConfig {
  acceptableAnswers: string[];
  ignoreAccents: boolean;
}

export interface Question {
  id: number
  type: QuestionType
  question: string
  options?: string[]
  answer?: string
  constructedResponseConfig?: ConstructedResponseConfig
}

export interface SavedQuiz {
  id: string;
  name: string;
  createdAt: number;
  questions: Question[];
}

export type ActivityVariant = 'four-choice' | 'matching-pairs' | 'typing-practice';

export interface ActivityWord {
  word: string;
  translation: string;
}

export interface Activity {
  id: string;
  name: string;
  category: string;
  description: string;
  variant: ActivityVariant;
  wordPairs: ActivityWord[];
}

export interface SavedActivity {
  id: string;
  name: string;
  createdAt: number;
  variant: ActivityVariant;
  wordPairs: ActivityWord[];
  blurOptions?: boolean;
} 