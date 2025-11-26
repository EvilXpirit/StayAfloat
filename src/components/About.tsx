import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <HeartHandshake className="w-8 h-8 text-purple-600" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            More Than Just An App. <br/> A Lifestyle.
          </h2>
          
          <p className="text-lg text-slate-600 leading-loose mb-8">
            StayAfloat is designed to be your pocket sanctuary. In a world that never stops moving, we provide the tools you need to pause, breathe, and reconnect with yourself. Backed by mindfulness science and designed with gentle gamification, we help you build sustainable wellness habits—one breath at a time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { label: 'Backed by Science', value: 'CBT Techniques' },
              // { label: 'Active Users', value: '10k+' },
              // { label: 'Rating', value: '4.9/5' },
              { label: 'Mindfulness Based', value: 'Stress Reduction' },
              { label: 'Mini Apps and Games', value: 'Rich Ecosystem' },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50">
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;