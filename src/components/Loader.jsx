import { useEffect, useState } from 'react';

const Loader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="relative">
        {/* Pulsing background circle */}
        <div className={`absolute inset-0 rounded-full bg-blue-500/20 animate-ping`} />
        
        {/* Rotating ring */}
        <div className="absolute inset-0 animate-spin">
          <div className="h-full w-full rounded-full border-t-2 border-r-2 border-blue-500/50" />
        </div>
        
        
      </div>
      
      {/* Loading text with fade-in */}
      <div className={`mt-4 transition-opacity duration-500 ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}>
        <p className="text-blue-400 font-medium tracking-wider animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;