'use client';

import { motion } from 'framer-motion';

export default function Experience({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="experience" className="py-24 px-6 bg-[var(--surface)]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Professional Path</h2>
        
        <div className="space-y-8">
          {data.map((exp, idx) => (
            <motion.div
              key={exp._id || idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="card relative flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-16 h-16 bg-[var(--background)] rounded-2xl flex items-center justify-center shrink-0 border border-[var(--primary)]/10 shadow-inner">
                {exp.logo ? <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain" /> : '🏢'}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-[var(--primary)] font-semibold text-sm bg-[var(--primary)]/5 px-3 py-1 rounded-full border border-[var(--primary)]/10">
                    {exp.from} - {exp.to}
                  </span>
                </div>
                <h4 className="text-lg text-[var(--secondary)] font-medium mb-4">{exp.company}</h4>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
