import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Host() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-white text-black font-anton overflow-hidden flex flex-col">
      {/* Oversized semi-transparent Arabic calligraphy */}
      <div className="pointer-events-none select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] text-red-600 opacity-10 text-[220vw] leading-none font-extrabold z-0">
        الحق يعلو ولا يُعلى عليه. ذا الشعبُ يومًا أراد الحياة
      </div>

      {/* Top section with bold title */}
      <section
        className={`relative z-10 flex flex-col items-center justify-center flex-grow border-b-8 border-black px-6 pt-24 pb-20 max-w-5xl mx-auto w-full 
          ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-[1200ms] ease-out`}
      >
        <h1 className="text-[6.5rem] leading-[1] text-center font-anton max-w-[90vw]">
          WHAT’S BANNED? <span className="block text-2xl font-mono mt-2">MultiPlayer Mode</span>
        </h1>
      </section>

      {/* Middle contrasting block */}
      <section
        className={`relative z-10 bg-black text-white font-mono border-b-8 border-red-600 px-8 py-20 max-w-5xl mx-auto w-full
          ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-[1400ms] ease-out delay-200`}
      >
        <p className="max-w-[550px] mx-auto text-center text-xl leading-relaxed tracking-wide">
          Ready to take control? Launch a session, get your room code, and let players join from their own devices.
          Answer in real-time, score fast, and crown the sharpest mind. It's like Kahoot, but for pointing out war crimes.
        </p>
      </section>

      {/* Bottom section for Host Game */}
      <section
        className={`relative z-10 flex flex-col items-center justify-center bg-white px-6 py-24 max-w-5xl mx-auto w-full
          ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-[1600ms] ease-out delay-400`}
      >
        <button
          onClick={() => navigate('/hostgame')}
          className="font-anton text-black text-4xl border-4 border-black px-12 py-6 hover:scale-105 hover:skew-x-[-6deg] transition-transform duration-300 ease-in-out"
          aria-label="Start Host Game"
        >
          Host Game
        </button>
      </section>
    </main>
  );
}
