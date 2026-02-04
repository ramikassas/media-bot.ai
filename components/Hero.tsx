
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 sm:pt-32 sm:pb-24">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-600/20 via-transparent to-transparent opacity-50 blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 animate-pulse">
          <Sparkles size={16} />
          <span>Premium Digital Asset Available</span>
        </div>
        
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-slate-400 mb-6 drop-shadow-2xl">
          mediabot.ai
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed mb-10">
          Empower the future of communication with an identity built for the next generation of AI-driven media systems.
        </p>

        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 max-w-lg mx-auto mb-12">
          <p className="text-sm text-slate-500 italic">
            Note: This website is a functional simulation designed to demonstrate the immense potential and use-cases of the domain name <strong>mediabot.ai</strong>. It is fully ready for deployment and versatile enough for any media-centric AI application.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#purchase" 
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 group"
          >
            Acquire Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#simulations" 
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full border border-slate-700 transition-all"
          >
            View Simulations
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
