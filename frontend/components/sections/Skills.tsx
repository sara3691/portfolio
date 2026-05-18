'use client';

import { motion } from 'framer-motion';

export default function Skills({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="skills" className="py-24 px-6 bg-[var(--surface)]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Professional Skills</h2>
          <div className="w-20 h-1.5 bg-[var(--primary)] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((skill, idx) => (
            <motion.div
              key={skill._id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl mb-4 grayscale hover:grayscale-0 transition-all">
                {skill.icon ? <i className={skill.icon} /> : '🚀'}
              </div>
              <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
              <div className="w-full bg-[var(--background)] h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-[var(--primary)]"
                />
              </div>
              <span className="text-sm text-[var(--primary)] font-semibold mt-2 block">
                {skill.percentage}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
