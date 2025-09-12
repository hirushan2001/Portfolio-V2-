import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png"; // adjust relative path

const LoadingPage = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        return prev + Math.random() * 10 + 5;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 overflow-hidden">
      {/* Background circles - scaled down on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-40 sm:h-40 bg-purple-500 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 sm:w-60 sm:h-60 bg-blue-500 rounded-full opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-6 w-12 h-12 sm:w-20 sm:h-20 bg-indigo-400 rounded-full opacity-10 animate-bounce"></div>
      </div>

      <div className="text-center relative z-10 px-4">
        {/* Logo */}
        <div className={`mb-8 sm:mb-12 transform transition-all duration-700 ${isComplete ? 'scale-110 sm:scale-125' : 'scale-100'}`}>
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-2xl sm:blur-3xl opacity-30 sm:opacity-40 animate-pulse"></div>

            {/* Logo container */}
            <div className="relative w-28 h-28 sm:w-40 sm:h-40 mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl sm:shadow-2xl">
              <img
                src={logo}
                alt="Logo"
                className="w-14 h-14 sm:w-20 sm:h-20 object-contain filter drop-shadow-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />

              {/* Fallback text */}
              <div className="hidden text-2xl sm:text-3xl font-bold">
                <span className="text-purple-400">&lt;</span>
                <span className="text-white">DH</span>
                <span className="text-purple-400">/&gt;</span>
              </div>

              {/* Rotating gradient border */}
              <div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-transparent animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 180deg, #9333ea, #3b82f6, #ec4899, #9333ea)",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mb-6 sm:mb-8">
          <h2
            className={`text-lg sm:text-xl font-semibold text-white mb-2 transition-all duration-500 ${
              isComplete ? "text-green-400" : ""
            }`}
          >
            {isComplete ? "Ready!" : "Loading..."}
          </h2>
        </div>

        {/* Progress bar */}
        <div className="w-64 sm:w-80 mx-auto mb-4 sm:mb-6">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>Progress</span>
            <span>{Math.round(Math.min(progress, 100))}%</span>
          </div>

          <div className="relative h-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>

            <div
              className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              {isComplete && (
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse"></div>
              )}
            </div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                isComplete
                  ? "bg-green-400 animate-pulse"
                  : "bg-purple-400 animate-bounce"
              }`}
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: isComplete ? "1s" : "0.6s",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Completion fade */}
      {isComplete && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 pointer-events-none opacity-0"
          style={{
            animation: "fadeInOut 0.6s ease-in-out forwards",
          }}
        />
      )}

      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
