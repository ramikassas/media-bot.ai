
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 pt-16 pb-8 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <div className="text-2xl font-black text-white mb-2 tracking-tighter">
              mediabot<span className="text-blue-500">.ai</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm">
              A premium digital asset presented by Rare Domains Marketplace. The ultimate identity for AI-driven media transformation.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Developer & Curator</h4>
            <div className="text-white font-bold text-lg">Rami Kassas</div>
            <p className="text-slate-500 text-sm">Founder of <a href="https://rdm.bz" className="text-blue-400 hover:text-blue-300 font-medium">Rare Domains Marketplace</a></p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-600 font-medium uppercase tracking-tighter">
          <p>© {new Date().getFullYear()} Rare Domains Marketplace (rdm.bz). All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="https://rdm.bz/domain/mediabot.ai" className="hover:text-blue-500">Acquisition Terms</a>
            <a href="https://rdm.bz" className="hover:text-blue-500">Other Domains</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
