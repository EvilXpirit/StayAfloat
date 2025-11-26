import React from 'react';
import { TESTIMONIALS } from '../../constants';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Loved by Thousands</h2>
          <p className="text-slate-600">See how StayAfloat is changing lives daily.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-50 p-8 rounded-[2rem] relative"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-indigo-100 fill-indigo-100" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">{t.role}</span>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;