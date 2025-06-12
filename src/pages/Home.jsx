import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-black font-anton px-8 py-12">
      {/* Background Arabic watermark */}
      <div className="absolute z-0 top-[-100px] left-[-100px] rotate-[-25deg] text-red-600 text-[160px] font-extrabold opacity-10 select-none pointer-events-none">
        الحق يعلو ولا يُعلى عليه. ذا الشعبُ يومًا أراد الحياة
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column - Title & Tagline */}
        <div className="space-y-8">
          <h1 className="text-[clamp(3rem,8vw,6rem)] leading-none font-anton tracking-tight">
            WHAT’S BANNED?
          </h1>
          <h2 className="text-2xl font-mono italic text-red-600">Break the Blockade</h2>
        </div>

        {/* Right Column - Navigation */}
        <div className="space-y-4">
          <p className="font-mono text-lg max-w-md">
            Think you know what’s restricted in Gaza? Test your knowledge, uncover disturbing truths, and take action.
          </p>
          <div className="flex flex-col gap-2">
            <Link
              to="/gamehome"
              className="border-2 border-black bg-white text-black font-mono text-lg px-6 py-3 hover:bg-black hover:text-white transition"
            >
              Play Solo
            </Link>
            <Link
              to="/host"
              className="border-2 border-black bg-white text-black font-mono text-lg px-6 py-3 hover:bg-black hover:text-white transition"
            >
              Host Game
            </Link>
            <Link
              to="/learn"
              className="border-2 border-black bg-white text-black font-mono text-lg px-6 py-3 hover:bg-black hover:text-white transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
