import { useEffect, useState } from 'react'; 
import { Loader2, Sparkles } from 'lucide-react'; 

const EnhancedLoader = () => { 
  const [mounted, setMounted] = useState(false); 
  const [dots, setDots] = useState(''); 

  useEffect(() => { 
    setMounted(true); 
    // Add animated dots to loading text
    const dotInterval = setInterval(() => { 
      setDots(prev => (prev.length >= 3 ? '' : prev + '.')); 
    }, 500); 
    return () => clearInterval(dotInterval); 
  }, []); 

  return ( 
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-gradient-to-r from-navy-900 to-midnight-800 overflow-hidden"> 

      <div className="relative"> 
        {/* Pulsing background circle with enhanced blur */}
        <div className={`absolute inset-0 rounded-full bg-blue-600/20 animate-ping blur-2xl`} /> 

        {/* Rotating ring with gradient border */}
        <div className="absolute inset-0 animate-spin"> 
          <div className="h-full w-full rounded-full border-t-4 border-r-4 border-blue-700/50 bg-gradient-to-br from-transparent via-blue-800/20 to-transparent" /> 
        </div> 

        {/* Central loader icon */}
        <Loader2 
          className="relative z-10 text-blue-500 animate-spin-slow" 
          size={80} 
          strokeWidth={1.5} 
        /> 
      </div> 

      {/* Loading text with enhanced animation */}
      <div 
        className={`
          mt-6 text-center transition-all duration-700 
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      > 
        <div className="flex items-center justify-center space-x-2"> 
          <p className="text-blue-400 font-medium tracking-wider text-xl"> 
            Loading{dots} 
          </p> 
          <Sparkles 
            className="text-blue-300 animate-pulse" 
            size={24} 
          /> 
        </div> 
        <p className="text-blue-600 text-sm mt-2"> 
          Preparing your experience... 
        </p> 
      </div> 
    </div> 
  ); 
}; 

export default EnhancedLoader;