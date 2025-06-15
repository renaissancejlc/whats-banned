import { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import BackgroundWrapper from '../compponents/BackgroundWrapper';
import Header from '../compponents/Header';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

export default function SoloGame() {
  if (!questions || questions.length === 0) {
    return (
      <BackgroundWrapper>
        <Header />
        <div className="p-4 text-center text-red-500">
          No questions available. Please check your data file.
        </div>
      </BackgroundWrapper>
    );
  }

  useEffect(() => {
    console.log("SoloGame mounted. Questions loaded:", questions.length);
  }, []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showScoreBurst, setShowScoreBurst] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="p-4 text-center text-red-500">
        Error loading question. Please refresh.
      </div>
    );
  }

  const handleAnswerClick = (answer) => {
    if (showFeedback) return; // Prevent clicking while feedback is shown
    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setShowScoreBurst(true);
      setTimeout(() => setShowScoreBurst(false), 1000);
    }
  };

  useEffect(() => {
    let timer;
    if (showFeedback) {
      timer = setTimeout(() => {
        setShowFeedback(false);
        setSelectedAnswer(null);
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setGameOver(true);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showFeedback, currentQuestionIndex]);

  return (
    <BackgroundWrapper>
      <Header />
      <section className="min-h-screen flex flex-col justify-center px-10 py-24 gap-10">
        {showScoreBurst && (
          <div className="fixed top-4 left-4 text-green-600 font-extrabold text-2xl animate-burst pointer-events-none select-none z-50">
            +{score}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-1 md:col-span-1 text-[6vw] md:text-5xl font-extrabold leading-tight">
            {gameOver ? (
              <div className="col-span-full">
                <h2 className="text-[8vw] md:text-[4vw] mb-4">GAME OVER — TESTING REFRESH</h2>
                <p className="text-xl md:text-2xl">Score: {score} / {questions.length}</p>
              </div>
            ) : (
              <>
                <h2 className="text-xl md:text-2xl mb-2">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </h2>
                <p className="text-xl md:text-2xl">{currentQuestion.question}</p>
              </>
            )}
          </div>

          {!gameOver && (
            <div className="col-span-2 space-y-4">
              {currentQuestion.answers.map((answer) => {
                const isCorrect = answer === currentQuestion.correctAnswer;
                const isSelected = answer === selectedAnswer;
                let bgColor = 'bg-neutral-100 border-2 border-neutral-400';
                if (showFeedback) {
                  if (isSelected) {
                    bgColor = isCorrect ? 'bg-green-200 border-green-600' : 'bg-red-200 border-red-600';
                  } else if (isCorrect) {
                    bgColor = 'bg-green-100 border-green-400';
                  }
                }

                return (
                  <button
                    key={answer}
                    onClick={() => handleAnswerClick(answer)}
                    disabled={showFeedback}
                    className={`${bgColor} w-full text-left px-6 py-4 font-bold text-xl tracking-wide rounded-none transition-transform duration-200 ease-out hover:shadow-xl hover:scale-[1.02] focus:shadow-xl focus:scale-[1.02] flex items-center justify-between`}
                  >
                    <span>{answer}</span>
                    {showFeedback && isSelected && (
                      isCorrect ? (
                        <CheckCircleIcon className="w-6 h-6 text-green-700" />
                      ) : (
                        <XCircleIcon className="w-6 h-6 text-red-700" />
                      )
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <style jsx>{`
        @keyframes burst {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-40px) scale(1.5);
          }
        }
        .animate-burst {
          animation: burst 1s ease-out forwards;
        }
      `}</style>
    </BackgroundWrapper>
  );
}
