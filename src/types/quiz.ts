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