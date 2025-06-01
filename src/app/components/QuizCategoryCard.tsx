import React from 'react';
import { ChevronRight, BookOpen, Star } from 'lucide-react';
import { QuizCategory } from '../types/Global';

interface QuizCategoryCardProps {
  category: QuizCategory;
  onClick: (category: QuizCategory) => void;
}

const QuizCategoryCard: React.FC<QuizCategoryCardProps> = ({ category, onClick }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-500 bg-green-500/10';
      case 'Intermediate': return 'text-yellow-500 bg-yellow-500/10';
      case 'Advanced': return 'text-red-500 bg-red-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  return (
    <div
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
      onClick={() => onClick(category)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{category.icon}</div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(category.difficulty)}`}>
          {category.difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
      <p className="text-purple-200 mb-4">{category.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-purple-300">
          <span className="flex items-center gap-1">
            <BookOpen size={16} />
            {category.questions} questions
          </span>
          <span className="flex items-center gap-1">
            <Star size={16} />
            {category.points} points
          </span>
        </div>
        <ChevronRight className="text-purple-400 group-hover:translate-x-1 transition-transform" size={20} />
      </div>
    </div>
  );
};

export default QuizCategoryCard;