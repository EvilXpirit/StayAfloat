import React from 'react';
import { GAMES } from '../../constants';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Games: React.FC = () => {
  return (
    <section id="games" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Play for Peace</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Mindful Gaming</h2>
            <p className="mt-4 text-slate-600 text-lg">
              Who said wellness has to be serious? Explore our suite of games and mini-apps designed to reduce anxiety and boost joy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GAMES.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-slate-50 hover:shadow-2xl transition-all duration-500"
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center text-white shadow-lg`}>
                    <game.icon className="w-8 h-8" />
                  </div>
                  <div className="flex gap-2">
                    {game.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-600 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">{game.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {game.description}
                </p>

                {/* Simulated Screen Preview */}
                <div className="mt-auto w-full aspect-[2/1] bg-slate-200 rounded-xl overflow-hidden relative group-hover:translate-y-[-5px] transition-transform duration-500">
                    <img 
                        src={`https://picsum.photos/600/300?random=${game.id + 10}`} 
                        alt={game.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white/30 backdrop-blur rounded-full flex items-center justify-center">
                            <Play className="w-5 h-5 text-white fill-white ml-1" />
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;