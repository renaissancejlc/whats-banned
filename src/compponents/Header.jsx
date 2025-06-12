import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md py-3 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        {/* Placeholder logo (replace with image or SVG as needed) */}
        <div className="w-8 h-8 bg-red-500 rounded-full"></div>
        <Link to="/" className="text-black text-xl font-semibold hover:text-red-500 transition-colors">
          What’s Banned
        </Link>
      </div>
    </header>
  );
}
