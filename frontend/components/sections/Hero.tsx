'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-medium text-[var(--primary)] mb-4">
            {data.subtitle}
          </h2>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            {data.title}
          </h1>
          <p className="text-lg text-[var(--text-muted)] mb-8 max-w-lg">
            {data.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            {data.ctaButtons?.map((btn: any, idx: number) => (
              <a 
                key={idx} 
                href={btn.link} 
                className={btn.variant === 'primary' ? 'btn-primary' : 'btn-outline'}
              >
                {btn.text}
                {btn.variant === 'primary' && <ArrowRight className="inline-block ml-2 w-5 h-5" />}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="w-80 h-80 lg:w-[450px] lg:h-[450px] relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-[var(--secondary)] rounded-[2rem] rotate-6 opacity-20 blur-2xl" />
            <img
              src={data.image || 'https://via.placeholder.com/600'}
              alt="Hero"
              className="w-full h-full object-cover rounded-[2rem] shadow-2xl relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
