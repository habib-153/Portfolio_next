import React from 'react';
import { Code2, Terminal } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="relative w-full max-w-md p-8">
        {/* Code symbol with pulse effect */}
        <div className="flex justify-center mb-8">
          <Code2 className="w-16 h-16 text-primary-600 dark:text-primary-400 animate-pulse" />
        </div>

        {/* Animated terminal effect */}
        <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <Terminal className="w-4 h-4" />
            <div className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5">
              Loading portfolio...
            </div>
          </div>
        </div>

        {/* Loading progress bar */}
        <div className="mt-8">
          <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-primary-600 dark:bg-primary-400 animate-progress rounded-full" />
          </div>
        </div>

        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
          Initializing developer workspace...
        </p>
      </div>
    </div>
  );
}