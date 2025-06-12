import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { bonusFacts } from '../data/bonusFacts';

export default function Game() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsList, setQuestionsList] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const shuffled = [...questions]
      .map(q => ({ q, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ q }) => q)
      .slice(0, 9); // use 9 so we can insert 1 bonus

    const bonus = bonusFacts[Math.floor(Math.random() * bonusFacts.length)];
    const insertIndex = Math.floor(Math.random() * 5) + 5; // between 5 and 9

    const updated = [...shuffled];
    updated.splice(insertIndex, 0, { ...bonus, isBonus: true });
    setQuestionsList(updated);
  }, []);

  const currentQuestion = questionsList[currentQuestionIndex];

  function handleAnswer(isYes) {
    if ((isYes && currentQuestion.answer === true) || (!isYes && currentQuestion.answer === false)) {
      setScore(score + (currentQuestion.isBonus ? 2 : 1));
    }
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < 10 && nextIndex < questionsList.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setGameOver(true);
    }
  }

  function handleRestart() {
    const reshuffled = [...questions]
      .map(q => ({ q, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ q }) => q)
      .slice(0, 9); // use 9 so we can insert 1 bonus

    const bonus = bonusFacts[Math.floor(Math.random() * bonusFacts.length)];
    const insertIndex = Math.floor(Math.random() * 5) + 5; // between 5 and 9

    const updated = [...reshuffled];
    updated.splice(insertIndex, 0, { ...bonus, isBonus: true });
    setQuestionsList(updated);
    setScore(0);
    setCurrentQuestionIndex(0);
    setGameOver(false);
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
        {gameOver ? (
          <div className="text-center">
            <p className="text-3xl font-anton mb-4">Game Over</p>
            <button
              onClick={handleRestart}
              className="bg-white text-black border-4 border-black font-anton px-8 py-4 hover:scale-105 transition"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate('/learn')}
              className="bg-black text-white border-4 border-black font-anton px-8 py-4 ml-4 hover:scale-105 transition"
            >
              Learn More
            </button>
            <div className="mt-12 w-full max-w-4xl">
              <h2 className="text-2xl font-anton mb-4 border-b-4 border-black pb-2">Game Review</h2>
              {questionsList.map((q, index) => (
                <div
                  key={index}
                  className={`mb-12 border-l-[12px] pl-6 ${q.isBonus ? 'border-red-600' : 'border-black'} bg-white`}
                >
                  <p className="text-5xl font-anton uppercase leading-tight mb-2">
                    {index + 1}. {q.question}
                  </p>
                  <p className="text-lg font-bold mb-2">
                    Answer:{' '}
                    {q.isBonus && q.citation ? (
                      <a
                        href={q.citation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 underline hover:text-red-800"
                      >
                        {q.answer ? 'TRUE' : 'FALSE'}
                      </a>
                    ) : (
                      q.answer ? 'BANNED' : 'ALLOWED'
                    )}{' '}
                    {q.isBonus ? '(BONUS FACT)' : ''}
                  </p>
                  <p className="text-md font-anton text-gray-800 leading-relaxed">
                    {q.isBonus ? (
                      <>
                        <span dangerouslySetInnerHTML={{
                          __html: q.explanation.replace(
                            /(https?:\/\/[^\s]+)/g,
                            '<a href="$1" target="_blank" class="underline text-blue-600 hover:text-blue-800">$1</a>'
                          )
                        }} />
                      </>
                    ) : (
                      q.details
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="relative w-full max-w-4xl h-64">
              <div className={`absolute backface-hidden w-full h-full pointer-events-auto bg-white ${currentQuestion?.isBonus ? 'border-red-600' : 'border-black'} border-8 flex items-center justify-center p-8 text-3xl text-center font-anton shadow-lg`}>
                <>
                  {currentQuestion?.isBonus && (
                    <div className="absolute -top-4 -left-4 transform -rotate-12 text-red-600 text-4xl font-anton bg-white px-2">
                      BONUS
                    </div>
                  )}
                  <p>{currentQuestion ? currentQuestion.question : ''}</p>
                </>
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
          </>
        )}
      </main>
    </>
  );
}