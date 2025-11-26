import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Play } from 'lucide-react';

const Download: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-primary-500/30">
          
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Journey Today</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10">
              Join the community finding peace, balance, and joy with StayAfloat. 
              Download now for free.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
                {['Free to download', 'Personalized', 'Secure & Private'].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-300" />
                        <span className="font-medium text-sm">{feature}</span>
                    </div>
                ))}
            </div>

            <motion.a 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               href="#"
               className="inline-flex items-center gap-4 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
            >
                <Play className="w-6 h-6 fill-slate-900" />
                <div className="text-left">
                    <div className="text-xs uppercase tracking-wider opacity-70">Get it on</div>
                    <div className="text-xl">Google Play</div>
                </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;