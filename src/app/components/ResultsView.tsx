import React from 'react';
import { Trophy, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { ResultsViewProps } from '../types/Global';

const ResultsView: React.FC<ResultsViewProps> = ({
  currentQuiz,
  score,
  questionsCount,
  userAnswers,
  onResetQuiz,
  onTryAgain,
}) => {
  const percentage = Math.round((score / questionsCount) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Trophy className="text-white" size={40} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Quiz Complete!</h2>
          <p className="text-purple-200 text-sm sm:text-base">Here&#39;s how you performed</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 mb-6 text-center">
          <div className="text-4xl sm:text-6xl font-bold text-white mb-2">{percentage}%</div>
          <div className="text-purple-200 text-sm sm:text-base mb-4">
            You scored {score} out of {questionsCount}
          </div>

          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm sm:text-base ${
              percentage >= 80
                ? 'bg-green-500/20 text-green-400'
                : percentage >= 60
                ? 'bg-yellow-500/20 text-yellow-400'
                : 'bg-red-500/20 text-red-400'
            }`}
          >
            {percentage >= 80 ? <CheckCircle size={20} /> : <XCircle size={20} />}
            {percentage >= 80
              ? 'Excellent!'
              : percentage >= 60
              ? 'Good Job!'
              : 'Keep Learning!'}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Review Answers</h3>
          <div className="space-y-4">
            {userAnswers.map((answer, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-start gap-3">
                  {answer.isCorrect ? (
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  ) : (
                    <XCircle className="text-red-400 flex-shrink-0 mt-1" size={20} />
                  )}
                  <div>
                    <p className="text-white font-medium mb-1 text-sm sm:text-base">
                      Q{index + 1}: {answer.question}
                    </p>
                    <p className="text-purple-200 text-xs sm:text-sm">{answer.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onResetQuiz}
            className="flex-1 py-3 sm:py-4 bg-white/10 backdrop-blur-lg rounded-xl text-white font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} />
            Back to Home
          </button>
          <button
            onClick={() => onTryAgain(currentQuiz)}
            className="flex-1 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
