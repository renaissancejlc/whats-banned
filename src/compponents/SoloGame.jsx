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
      <div className="max-w-3xl mx-auto p-4">
        {gameOver ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Game Over</h2>
            <p className="text-lg">Your Score: {score} / {questions.length}</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-2">
              Question {currentQuestionIndex + 1} of {questions.length}
            </h2>
            <p className="mb-4">{currentQuestion.question}</p>
            <div className="space-y-2">
              {currentQuestion.answers.map((answer) => {
                const isCorrect = answer === currentQuestion.correctAnswer;
                const isSelected = answer === selectedAnswer;
                let bgColor = 'bg-gray-200';
                if (showFeedback) {
                  if (isSelected) {
                    bgColor = isCorrect ? 'bg-green-300' : 'bg-red-300';
                  } else if (isCorrect) {
                    bgColor = 'bg-green-300';
                  }
                }
                return (
                  <button
                    key={answer}
                    onClick={() => handleAnswerClick(answer)}
                    disabled={showFeedback}
                    className={`w-full text-left p-3 rounded ${bgColor} flex items-center justify-between`}
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
            <p className="mt-4">Score: {score}</p>
          </>
        )}
      </div>
    </BackgroundWrapper>
  );
}
