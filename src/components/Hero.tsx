import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star } from 'lucide-react';

const Hero: React.FC = () => {
  // Array of images for the carousel - Add your screenshot paths here
  const images = [
    './screenshots/homepage2.png',
    './screenshots/Journalscreen.png',
    './screenshots/affirmation.png',
    './screenshots/BoxBreathing.png',
    './screenshots/moodReport.png',
    './screenshots/SleepScreen.png',
    './screenshots/FloatyDrift.png',
    // Add more screenshot paths as needed
  ];

  // State to track current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel effect
  useEffect(() => {
    // Set interval for automatic slide transition (3 seconds)
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        // Loop back to first image after reaching the end
        (prevIndex + 1) % images.length
      );
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 via-purple-50 to-white">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-3xl" 
        />
        <motion.div 
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary-200/40 rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-white/50 rounded-full mb-6 shadow-sm">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold text-slate-700">#1 Emerging Wellness App</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900 mb-6">
                Find Balance. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Stay Afloat.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Your daily sanctuary for mindfulness, breathing, and emotional balance. Drift away from stress with Floaty.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.stay.afloat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl transition-all shadow-xl shadow-slate-900/20 transform hover:-translate-y-1"
                >
                   <Play className="w-6 h-6 fill-current" />
                   <div className="text-left">
                     {/* <div className="text-xs opacity-80 uppercase tracking-wider font-semibold">Get it on</div> */}
                     <div className="text-xs opacity-80 uppercase tracking-wider font-semibold">Coming Soon On</div>
                     <div className="text-xl font-bold leading-none">Google Play</div>
                   </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Phone Mockup with Crossfade Carousel */}
          <div className="flex-1 w-full flex justify-center md:justify-end relative">
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 w-64 md:w-80"
             >
                {/* Simulated Phone Frame */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-slate-900 rounded-[3rem] p-2 shadow-2xl border-4 border-slate-800"
                >
                    {/* Phone Screen Container - Images overlay on top of each other */}
                    <div className="bg-slate-800 rounded-[2.5rem] overflow-hidden relative aspect-[9/19]">
                         {/* AnimatePresence without mode="wait" allows overlapping animations */}
                         <AnimatePresence>
                            <motion.img 
                                key={currentIndex} // Key change triggers animation
                                src={images[currentIndex]}
                                alt={`StayAfloat App Screen ${currentIndex + 1}`}
                                className="w-full h-full object-cover opacity-90 absolute inset-0"
                                // Entry - fade in from invisible
                                initial={{ opacity: 0 }}
                                // Active - fully visible
                                animate={{ opacity: 0.9 }}
                                // Exit - fade out (overlaps with next image fading in)
                                exit={{ opacity: 0 }}
                                // Smooth crossfade transition
                                transition={{ 
                                  duration: 1, // 1 second fade duration
                                  ease: "easeInOut" 
                                }}
                            />
                         </AnimatePresence>

                         {/* Gloss Overlay */}
                         <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10"></div>
                         
                         {/* OPTIONAL: Floating UI Elements inside phone (Simulated) */}
                         {/* <div className="absolute top-12 left-4 right-4 bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/20 z-20">
                            <div className="h-2 w-1/3 bg-white/60 rounded mb-2"></div>
                            <div className="h-8 w-3/4 bg-white rounded"></div>
                         </div> */}

                         {/* <div className="absolute bottom-20 left-4 right-4 flex gap-2 z-20">
                             <div className="h-16 w-1/2 bg-indigo-500/80 backdrop-blur rounded-2xl"></div>
                             <div className="h-16 w-1/2 bg-sky-500/80 backdrop-blur rounded-2xl"></div>
                         </div> */}
                    </div>
                </motion.div>
                
                {/* Decorative floating elements behind phone */}
                <motion.div 
                    animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-20 -right-8 w-20 h-20 bg-white rounded-2xl shadow-xl p-4 flex items-center justify-center z-20"
                >
                    <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />
                </motion.div>

                <motion.div 
                    animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-32 -left-8 w-auto px-6 py-4 bg-white rounded-2xl shadow-xl z-20"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="font-bold text-slate-800">Feeling Calm</span>
                    </div>
                </motion.div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
