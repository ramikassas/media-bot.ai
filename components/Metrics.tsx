
import React from 'react';
import { Search, DollarSign, Calendar, TrendingUp } from 'lucide-react';

const MetricCard = ({ icon: Icon, label, value, description }: { icon: any, label: string, value: string, description: string }) => (
  <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 transition-colors group">
    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-slate-500 font-medium text-sm uppercase tracking-widest mb-1">{label}</h3>
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const Metrics: React.FC = () => {
  return (
    <section className="scroll-mt-32">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white">Market Potential</h2>
        <div className="h-px flex-1 bg-slate-800" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          icon={TrendingUp}
          label="Search Volume"
          value="High"
          description="Consistently high organic search intent for 'media' and 'bot' related keywords."
        />
        <MetricCard 
          icon={DollarSign}
          label="Avg. CPC"
          value="$25.00"
          description="High commercial intent makes this domain extremely valuable for targeted ad campaigns."
        />
        <MetricCard 
          icon={Calendar}
          label="Domain Age"
          value="2 Years"
          description="Established domain authority, providing a head start for SEO indexing and trust."
        />
        <MetricCard 
          icon={Search}
          label="Keywords"
          value="Premium"
          description="Top-tier combination of high-value industry terms: 'Media' + 'Bot'."
        />
      </div>
    </section>
  );
};

export default Metrics;
