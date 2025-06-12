import { useEffect, useState } from 'react';

export default function Game() {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = [
    { question: 'Is this question banned?' },
    { question: 'Can you answer this question?' },
    // Add more questions as needed
  ];
  const currentQuestion = questions[currentQuestionIndex];

  function handleAnswer(isYes) {
    // Example scoring logic
    if (isYes) {
      setScore(score + 1);
    }
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      // Game over logic here
    }
  }

  return (
    <>
      <div className="fixed top-6 left-6 z-20 bg-white border-4 border-black px-6 py-2 text-xl font-anton">
        SCORE: {score}
      </div>
      <main className="relative min-h-screen bg-white flex flex-col items-center justify-center p-8">
        <h1 className="text-[4rem] md:text-[5rem] font-anton tracking-tight border-b-8 border-black pb-4 mb-6 uppercase">
          WHAT’S BANNED?
        </h1>
        <div className="relative w-full max-w-4xl h-64">
          <div className="absolute backface-hidden w-full h-full pointer-events-auto bg-white border-8 border-black flex items-center justify-center p-8 text-3xl text-center font-anton shadow-lg">
            <p>{currentQuestion.question}</p>
          </div>
        </div>
        <div className="mt-12 flex gap-8">
          <button
            onClick={() => handleAnswer(true)}
            className="bg-black text-white border-4 border-red-600 font-anton px-8 py-4 hover:scale-105 transition"
          >
            YES
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="bg-black text-white border-4 border-red-600 font-anton px-8 py-4 hover:scale-105 transition"
          >
            NO
          </button>
        </div>
      </main>
    </>
  );
}
