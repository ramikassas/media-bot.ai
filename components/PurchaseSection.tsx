
import React from 'react';
import { ExternalLink, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const PurchaseSection: React.FC = () => {
  return (
    <section id="purchase" className="scroll-mt-32 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="bg-blue-600 rounded-[3rem] p-1 gap-1 flex flex-col items-center">
          <div className="w-full bg-slate-950 rounded-[2.9rem] p-8 sm:p-16 text-center">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">Secure Your Future Today</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              Choose your preferred method of acquisition. Instant transfer and professional escrow guaranteed on all platforms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* RDM.BZ - Featured */}
              <div className="md:col-span-1 order-1 md:order-2">
                <div className="relative h-full bg-gradient-to-b from-blue-600 to-blue-800 rounded-3xl p-8 flex flex-col shadow-[0_20px_50px_rgba(37,99,235,0.3)] transform hover:scale-105 transition-transform border-4 border-blue-400">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-blue-600 text-xs font-black rounded-full uppercase tracking-tighter shadow-lg">
                    Best Value
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Direct Purchase</h3>
                    <div className="text-white/80 text-sm font-medium">via rdm.bz</div>
                  </div>
                  <ul className="text-left space-y-4 mb-8 flex-1">
                    <li className="flex items-center gap-2 text-white/90 text-sm">
                      <Zap size={16} className="text-yellow-300 fill-yellow-300" />
                      <span>Zero Marketplace Fees</span>
                    </li>
                    <li className="flex items-center gap-2 text-white/90 text-sm">
                      <CheckCircle2 size={16} />
                      <span>Instant Transfer</span>
                    </li>
                    <li className="flex items-center gap-2 text-white/90 text-sm">
                      <ShieldCheck size={16} />
                      <span>SECURE Escrow</span>
                    </li>
                  </ul>
                  <a 
                    href="https://rdm.bz/domain/mediabot.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-colors shadow-xl flex items-center justify-center gap-2"
                  >
                    Acquire Directly
                    <ExternalLink size={18} />
                  </a>
                  <p className="mt-4 text-[10px] text-white/70 uppercase font-bold tracking-widest">Save 15-20% on Fees</p>
                </div>
              </div>

              {/* Atom */}
              <div className="md:col-span-1 order-2 md:order-1 flex flex-col justify-center">
                <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-slate-700 transition-all">
                  <h3 className="text-xl font-bold text-white mb-4">Atom.com</h3>
                  <p className="text-slate-500 text-sm mb-6">Global premium domain marketplace with standard protection.</p>
                  <a 
                    href="https://www.atom.com/name/mediabot.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                  >
                    View on Atom
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* GoDaddy */}
              <div className="md:col-span-1 order-3 flex flex-col justify-center">
                <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-slate-700 transition-all">
                  <h3 className="text-xl font-bold text-white mb-4">GoDaddy</h3>
                  <p className="text-slate-500 text-sm mb-6">Listed on the world's largest domain registrar.</p>
                  <a 
                    href="https://godaddy.com/forsale/mediabot.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                  >
                    View on GoDaddy
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
              <span className="text-slate-400 font-bold text-sm">Trusted by 500+ Acquisitions</span>
              <div className="h-4 w-px bg-slate-800" />
              <span className="text-slate-400 font-bold text-sm">Verified Premium Asset</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
