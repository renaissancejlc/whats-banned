import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-black font-anton overflow-hidden px-8 py-12 flex flex-col items-start justify-center">
      {/* Background Arabic watermark */}
      <div className="absolute z-0 top-[-100px] left-[-100px] transform rotate-[-25deg] text-red-600 text-[160px] font-extrabold opacity-10 pointer-events-none select-none">
        الحق يعلو ولا يُعلى عليه. ذا الشعبُ يومًا أراد الحياة
      </div>

      {/* Header Title */}
      <h1 className="text-[clamp(3rem,10vw,8rem)] font-anton z-10 leading-none">
        WHAT’S BANNED?
      </h1>

      {/* Subhead */}
      <h2 className="text-xl md:text-2xl font-mono italic z-10 mt-4 mb-10">
        Break the Blockade
      </h2>

      {/* Game Description */}
      <p className="max-w-lg font-mono text-lg z-10 mb-8">
        Think you know what’s restricted in Gaza? Test your knowledge, uncover disturbing truths, and take action.
      </p>

      {/* Play Button */}
      <Link
        to="/gamehome"
        className="bg-black text-white font-mono text-lg px-6 py-3 border-2 border-black hover:bg-white hover:text-black transition z-10"
      >
        Play Solo
      </Link>
      <Link
        to="/host"
        className="bg-black text-white font-mono text-lg px-6 py-3 border-2 border-black hover:bg-white hover:text-black transition z-10 mt-4"
      >
        Host Game
      </Link>
      <Link
        to="/learn"
        className="bg-black text-white font-mono text-lg px-6 py-3 border-2 border-black hover:bg-white hover:text-black transition z-10 mt-4"
      >
        Learn More
      </Link>
      
    </div>
  );
}
