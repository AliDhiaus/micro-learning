import React from 'react';
import { Brain, Star, Target, Trophy } from 'lucide-react';
import { HomeViewProps } from '../types/Global';
import { quizCategories } from '../lib/Index';
import StatCard from './StatCard';
import QuizCategoryCard from './QuizCategoryCard';

const HomeView: React.FC<HomeViewProps> = ({ totalPoints, streak, quizzesCompleted, onStartQuiz }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-full mx-auto md:px-8 py-5 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
            <Brain className="text-4xl text-purple-400" size={40} />
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-tight">
              IT Daily Quiz by AliDSX
            </h1>
          </div>
          <p className="text-purple-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Boost your IT knowledge with daily micro-learning sessions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard icon={<Star className="mx-auto mb-2 text-yellow-400" size={32} />} value={totalPoints} label="Total Points" />
          <StatCard icon={<Target className="mx-auto mb-2 text-green-400" size={32} />} value={streak} label="Day Streak" />
          <StatCard icon={<Trophy className="mx-auto mb-2 text-purple-400" size={32} />} value={quizzesCompleted} label="Quizzes Completed" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quizCategories.map((category) => (
            <QuizCategoryCard
              key={category.id}
              category={category}
              onClick={onStartQuiz}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
