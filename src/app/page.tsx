'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { AnswerResult, QuizCategory, QuizQuestion } from './types/Global';
import { sampleQuestions } from './lib/Index';

import HomeView from './components/HomeView';
import QuizView from './components/QuizView';
import ResultsView from './components/ResultsView';

const ITQuizApp = () => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [currentQuiz, setCurrentQuiz] = useState<QuizCategory | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [quizComplete, setQuizComplete] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<AnswerResult[]>([]);
  const [streak, setStreak] = useState<number>(3);
  const [totalPoints, setTotalPoints] = useState<number>(250);
  const [quizzesCompleted, setQuizzesCompleted] = useState<number>(12); // New state for quizzes completed

  const handleNextQuestion = useCallback(() => {
    if (!currentQuiz) return;
    const questions: QuizQuestion[] = sampleQuestions[currentQuiz.id];
    const isCorrect = selectedAnswer === questions[currentQuestion].correct;

    setUserAnswers(prevUserAnswers => [
      ...prevUserAnswers,
      {
        question: questions[currentQuestion].question,
        selected: selectedAnswer,
        correct: questions[currentQuestion].correct,
        isCorrect: isCorrect,
        explanation: questions[currentQuestion].explanation,
      },
    ]);

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      setTotalPoints(prevTotalPoints => prevTotalPoints + 10);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevCurrentQuestion => prevCurrentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setQuizComplete(true);
      if (score + (isCorrect ? 1 : 0) >= questions.length * 0.7) { 
        setStreak(prevStreak => prevStreak + 1);
      }
      setQuizzesCompleted(prev => prev + 1); 
    }
  }, [
    currentQuiz,
    selectedAnswer,
    currentQuestion,
    score, 
  ]);

  useEffect(() => {
    if (currentView === 'quiz' && timeLeft > 0 && !quizComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizComplete && currentView === 'quiz') { 
      handleNextQuestion();
    }
  }, [timeLeft, currentView, quizComplete, handleNextQuestion]);

  const startQuiz = (category: QuizCategory) => {
    setCurrentQuiz(category);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(30);
    setQuizComplete(false);
    setUserAnswers([]);
    setCurrentView('quiz');
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const resetQuiz = () => {
    setCurrentView('home');
    setCurrentQuiz(null);
  };

  if (currentView === 'home') {
    return (
      <HomeView
        totalPoints={totalPoints}
        streak={streak}
        quizzesCompleted={quizzesCompleted}
        onStartQuiz={startQuiz}
      />
    );
  }

  if (currentView === 'quiz' && currentQuiz && !quizComplete) {
    const questions = sampleQuestions[currentQuiz.id];
    return (
      <QuizView
        currentQuiz={currentQuiz}
        currentQuestionIndex={currentQuestion}
        questions={questions}
        selectedAnswer={selectedAnswer}
        score={score}
        timeLeft={timeLeft}
        onAnswerSelect={handleAnswerSelect}
        onNextQuestion={handleNextQuestion}
        quizComplete={quizComplete}
      />
    );
  }

  if (quizComplete && currentQuiz) {
    const questions = sampleQuestions[currentQuiz.id];
    return (
      <ResultsView
        currentQuiz={currentQuiz}
        score={score}
        questionsCount={questions.length}
        userAnswers={userAnswers}
        onResetQuiz={resetQuiz}
        onTryAgain={startQuiz}
      />
    );
  }

  return null; 
};

export default ITQuizApp;