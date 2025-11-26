import React from 'react';
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Features from './src/components/Features';
import Games from './src/components/Games';
import Rewards from './src/components/Rewards';
import Testimonials from './src/components/Testimonials';
import Download from './src/components/Download';
import Footer from './src/components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Games />
        <Rewards />
        {/* <Testimonials /> */}
        <Download />
      </main>
      <Footer />
    </div>
  );
};

export default App;