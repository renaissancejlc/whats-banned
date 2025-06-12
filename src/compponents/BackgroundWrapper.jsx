

import React from 'react';

export default function BackgroundWrapper({ children }) {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-white via-red-50 to-white text-gray-900 flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Optional dynamic background accents */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-red-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-ping" />
      
      {/* Content */}
      <div className="w-full max-w-4xl z-10">{children}</div>
    </div>
  );
}