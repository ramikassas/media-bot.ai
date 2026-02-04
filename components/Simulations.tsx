
import React from 'react';
import { Video, Newspaper, Megaphone, Share2, Palette, Cpu } from 'lucide-react';

const SimulationCard = ({ icon: Icon, title, description, vision }: { icon: any, title: string, description: string, vision: string }) => (
  <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-slate-400 mb-6 leading-relaxed">
      {description}
    </p>
    <div className="pt-6 border-t border-slate-800">
      <h4 className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">Market Vision</h4>
      <p className="text-sm text-slate-500 italic">"{vision}"</p>
    </div>
  </div>
);

const Simulations: React.FC = () => {
  return (
    <section id="simulations" className="scroll-mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Strategic Use-Cases</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          From automated journalism to social media management, mediabot.ai fits perfectly into any modern tech ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SimulationCard 
          icon={Newspaper}
          title="Automated Journalism"
          description="The ultimate hub for AI-driven news agencies. Collect, synthesize, and publish news at the speed of light."
          vision="A platform where local news is instantly summarized and translated for global audiences."
        />
        <SimulationCard 
          icon={Video}
          title="Video Gen AI Tool"
          description="The primary name for a tool that automates scriptwriting, voiceover, and video editing into a single pipeline."
          vision="Enter a prompt, get a fully-edited 4K video ready for social media in 30 seconds."
        />
        <SimulationCard 
          icon={Megaphone}
          title="Marketing Automation"
          description="An agency tool that optimizes ad copy, creative assets, and delivery across multiple digital channels."
          vision="A bot that manages $1M+ monthly ad spend with precise ROI-focused content generation."
        />
        <SimulationCard 
          icon={Share2}
          title="Social Media Manager"
          description="AI agents that handle community engagement, post scheduling, and trend analysis on autopilot."
          vision="The brains behind the world's most successful faceless social media brands."
        />
        <SimulationCard 
          icon={Palette}
          title="Creative Suite API"
          description="A backend API for developers to integrate media-processing AI bots into their own applications."
          vision="The standard infrastructure for every SaaS that handles media manipulation."
        />
        <SimulationCard 
          icon={Cpu}
          title="Edge Content Delivery"
          description="Next-gen CDN that utilizes AI to personalize media delivery based on user sentiment and context."
          vision="Real-time media adaptation that changes based on who is watching."
        />
      </div>
    </section>
  );
};

export default Simulations;
