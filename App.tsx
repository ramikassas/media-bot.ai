
import React, { useEffect } from 'react';
import SEO from './components/SEO';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Simulations from './components/Simulations';
import PurchaseSection from './components/PurchaseSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      <SEO />
      
      <main>
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-16">
          <Metrics />
          <Simulations />
          <PurchaseSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
