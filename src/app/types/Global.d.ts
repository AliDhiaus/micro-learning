// types/Global.ts
import React from 'react'; // Import React here if not already

export type AnswerResult = {
  question: string;
  selected: number | null;
  correct: number;
  isCorrect: boolean;
  explanation: string;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type QuizCategory = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questions: number;
  points: number;
};


export interface HomeViewProps {
  totalPoints: number;
  streak: number;
  quizzesCompleted: number; 
  onStartQuiz: (category: QuizCategory) => void;
}

export interface QuizViewProps {
  currentQuiz: QuizCategory;
  currentQuestionIndex: number;
  questions: QuizQuestion[];
  selectedAnswer: number | null;
  score: number;
  timeLeft: number;
  onAnswerSelect: (answerIndex: number) => void;
  onNextQuestion: () => void;
  quizComplete: boolean;
}

export interface ResultsViewProps {
  currentQuiz: QuizCategory;
  score: number;
  questionsCount: number;
  userAnswers: AnswerResult[];
  onResetQuiz: () => void;
  onTryAgain: (category: QuizCategory) => void;
}

export interface StatCardProps {
  icon: React.ReactNode;
  value: number | string;
  label: string;
}