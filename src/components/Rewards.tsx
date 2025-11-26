import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Palette, Sparkles } from 'lucide-react';

const Rewards: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Background stars/particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animation: `pulse ${Math.random() * 3 + 2}s infinite`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
             >
                <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-200 font-medium text-sm mb-6">
                    Gentle Progression
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Grow At Your Own Pace</h2>
                <p className="text-purple-100/80 text-lg mb-8 leading-relaxed">
                    Wellness shouldn't be a chore. With StayAfloat, every breath you take and every journal entry you make earns you "Drift Points."
                </p>
                
                <ul className="space-y-6">
                    {[
                        { icon: Trophy, title: 'Earn Points', desc: 'Complete daily check-ins and exercises.' },
                        { icon: Palette, title: 'Unlock Themes', desc: 'Purchase beautiful cards and wallpapers.' },
                        { icon: Sparkles, title: 'Share With Friends', desc: 'Share your favorite Affimations and Quotes with Firends.' },
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                <item.icon className="w-6 h-6 text-purple-300" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                <p className="text-white/60 text-sm">{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
             </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
             {/* Abstract visual for unlocking content */}
             <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
             >
                <div className="absolute inset-0 bg-purple-500/30 blur-[100px] rounded-full"></div>
                <div className="relative grid grid-cols-2 gap-4">
                    <img src="https://picsum.photos/300/500?random=20" className="rounded-2xl translate-y-8 shadow-2xl border-4 border-white/10" alt="Theme UI" />
                    <img src="https://picsum.photos/300/500?random=21" className="rounded-2xl -translate-y-8 shadow-2xl border-4 border-white/10" alt="Theme UI" />
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;