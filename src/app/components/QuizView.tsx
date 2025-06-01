import React from 'react';
import { Clock } from 'lucide-react';
import { QuizViewProps } from '../types/Global';

const QuizView: React.FC<QuizViewProps> = ({
  currentQuiz,
  currentQuestionIndex,
  questions,
  selectedAnswer,
  score,
  timeLeft,
  onAnswerSelect,
  onNextQuestion,
  quizComplete,
}) => {
  const currentQ = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{currentQuiz.icon}</span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{currentQuiz.title}</h2>
            </div>
            <div className="flex items-center gap-2 text-orange-400">
              <Clock size={20} />
              <span className="text-lg sm:text-xl font-bold">{timeLeft}s</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-purple-200 text-sm sm:text-base">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>Score: {score}/{questions.length}</span>
          </div>

          <div className="w-full bg-white/20 rounded-full h-2 mt-4">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">{currentQ.question}</h3>

          <div className="space-y-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswerSelect(index)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                  selectedAnswer === index
                    ? 'bg-purple-600 text-white border-2 border-purple-400'
                    : 'bg-white/10 text-purple-100 hover:bg-white/20 border-2 border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm sm:text-base">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-sm sm:text-base">{option}</span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={onNextQuestion}
            disabled={selectedAnswer === null || quizComplete}
            className="w-full mt-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-base sm:text-lg"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizView;
