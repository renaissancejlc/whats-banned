import { Link } from 'react-router-dom';
import BackgroundWrapper from '../compponents/BackgroundWrapper';

export default function Home() {
  return (
    <BackgroundWrapper>
      <div className="min-h-screen flex flex-col justify-center items-center px-4 text-black">
        <h1 className="text-5xl md:text-6xl font-anton mb-4">
          What’s Banned?
        </h1>
        <h2 className="text-xl md:text-2xl font-anton mb-8 italic">
          Break the Blockade
        </h2>
        <p className="max-w-xl text-center text-lg mb-10">
          Think you know what’s restricted in Gaza? Test your knowledge, uncover disturbing truths, and get ready to act.
        </p>
        <div className="flex gap-6">
          <Link to="/game" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition">
            Play Solo
          </Link>
          <Link to="/host" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition">
            Host a Game
          </Link>
        </div>
      </div>
    </BackgroundWrapper>
  );
}
