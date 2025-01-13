import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Question } from "@/types/quiz";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removeAccents(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function checkAnswer(userAnswer: string, question: Question): boolean {
  if (question.type === "multiple-choice") {
    return question.acceptableAnswers.includes(userAnswer);
  }

  if (!question.constructedResponseConfig) {
    throw new Error("Constructed response question missing configuration");
  }

  const { acceptableAnswers, ignoreAccents } =
    question.constructedResponseConfig;

  if (ignoreAccents) {
    const normalizedUserAnswer = removeAccents(userAnswer.toLowerCase().trim());
    return acceptableAnswers.some(
      (answer: string) =>
        removeAccents(answer.toLowerCase().trim()) === normalizedUserAnswer,
    );
  }

  return acceptableAnswers.some(
    (answer: string) =>
      answer.toLowerCase().trim() === userAnswer.toLowerCase().trim(),
  );
}
