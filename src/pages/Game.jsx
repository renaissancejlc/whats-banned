import { useState, useEffect } from 'react';
import Boat from 'lucide-react/dist/esm/icons/boat';
import { questions } from '../data/questions';
import BackgroundWrapper from '../compponents/BackgroundWrapper';
import Header from '../compponents/Header';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Game() {
  const TOTAL_QUESTIONS = 12;
  const [shuffledQuestions] = useState(() => shuffleArray(questions));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  

  const currentQuestion = shuffledQuestions[currentIndex];

  useEffect(() => {
    setTimeLeft(10); // reset timer each new question
    setShowAnswer(false);
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleAnswer(null); // time out = no answer
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleAnswer = (selected) => {
    if (showFeedback !== null) return;

    const isCorrect = selected === currentQuestion.answer;
    setScore(prev => prev + (isCorrect ? 100 : 0));
    setShowFeedback(isCorrect ? '✅ Correct' : '❌ Incorrect');
    setShowAnswer(true);
    setUserAnswers(prev => [...prev, { question: currentQuestion.question, correct: isCorrect }]);
  };

  const handleNext = () => {
    setShowFeedback(null);
    setShowAnswer(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const getMessage = () => {
    if (score >= 1000) return "You're a blockade expert!";
    if (score >= 700) return "Strong knowledge — well done.";
    if (score >= 400) return "Solid effort — keep learning!";
    return "You uncovered just the surface. Try again!";
  };

  if (currentIndex >= TOTAL_QUESTIONS) {
    return (
      <>
        <Header />
        <BackgroundWrapper>
          <div className="w-full flex flex-col items-center justify-center min-h-screen px-4 text-center font-primary bg-white text-black">
            <h1 className="text-3xl mb-2 text-black font-primary">Game Over</h1>
            <p className="text-lg mb-1 font-primary">Final Score: {score}</p>
            <p className="text-md text-neutral-600 mb-6 font-primary">{getMessage()}</p>
            <div className="grid grid-cols-3 gap-2 max-w-md">
              {userAnswers.map((entry, idx) => (
                <div key={idx} className="text-center p-2 bg-white border border-red-500 rounded text-black font-primary">
                  <p className="text-sm text-black font-primary">Q{idx + 1}</p>
                  {entry.correct ? (
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mx-auto" />
                  ) : (
                    <XCircleIcon className="h-6 w-6 text-red-600 mx-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </BackgroundWrapper>
      </>
    );
  }

  return (
    <>
      <Header />
      <BackgroundWrapper>
        <div className="w-full flex flex-col items-center justify-center min-h-screen px-4 text-center font-primary bg-white text-black">
          <h1 className="text-xl mb-2 text-black font-primary">Solo Mode</h1>
          <p className="text-sm text-neutral-600 mb-2 font-primary">Question {currentIndex + 1} of {TOTAL_QUESTIONS}</p>
          <div className="relative w-full max-w-xl h-56 mb-6 perspective pointer-events-auto">
            <div className={`w-full h-full transition-transform duration-700 transform-style preserve-3d ${showAnswer ? 'rotate-y-180' : ''}`} style={{ position: 'relative' }}>
              <div className="absolute backface-hidden w-full h-full pointer-events-auto bg-white border border-red-500 rounded-lg flex items-center justify-center p-6 text-xl text-center shadow-lg text-black font-primary">
                <p className="text-black font-primary">{currentQuestion.question}</p>
              </div>
              <div className="absolute backface-hidden w-full h-full pointer-events-auto bg-white border border-red-500 rounded-lg flex flex-col items-center justify-center p-6 text-center rotate-y-180 shadow-lg text-black font-primary">
                {currentQuestion.answer ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircleIcon className="h-6 w-6" />
                    <span>Allowed</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircleIcon className="h-6 w-6" />
                    <span>Banned</span>
                  </div>
                )}
                <p className="text-sm text-black font-primary">{currentQuestion.details || 'No detail available.'}</p>
              </div>
            </div>
          </div>

          {!showAnswer && (
            <>
              {/* Timer bar with animated "ship" and wave SVG background */}
              <div className="w-full max-w-xl mb-4 h-6 relative overflow-hidden rounded bg-blue-900">
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                  <path fill="#60a5fa" fillOpacity="0.4" d="M0,96L80,101.3C160,107,320,117,480,138.7C640,160,800,192,960,197.3C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
                <div
                  className="absolute left-0 top-0 h-full bg-blue-300/60 backdrop-blur-sm rounded transition-all duration-100"
                  style={{ width: `${(timeLeft / 10) * 100}%` }}
                ></div>
                <div
                  className="absolute -top-2 left-0 h-full w-6 transition-all duration-100 z-10 flex items-center justify-center"
                  style={{ transform: `translateX(${(timeLeft / 10) * 100}%)` }}
                >
                  <Boat className="text-blue-800 h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <div className="flex gap-6 mb-6">
                <button
                  onClick={() => handleAnswer(true)}
                  className="border border-red-500 text-black hover:bg-red-100 px-6 py-3 rounded font-primary"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer(false)}
                  className="border border-red-500 text-black hover:bg-red-100 px-6 py-3 rounded font-primary"
                >
                  No
                </button>
              </div>
            </>
          )}

          {showAnswer && (
            <button
              onClick={handleNext}
              className="mt-4 border border-red-500 text-black hover:bg-red-100 px-5 py-2 rounded font-primary"
            >
              Next
            </button>
          )}

          {showFeedback && (
            <p className="text-xl text-black font-primary">{showFeedback}</p>
          )}
          <p className="mt-10 text-neutral-400 font-primary">Score: {score}</p>
        </div>
        <style>
          
          {`.perspective {
      perspective: 1000px;
    }
    .preserve-3d {
      transform-style: preserve-3d;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
        `}
        </style>
      </BackgroundWrapper>
    </>
  );
}
