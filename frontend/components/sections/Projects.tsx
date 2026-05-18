'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2">Featured Projects</h2>
            <p className="text-[var(--text-muted)]">A selection of my best work</p>
          </div>
          <div className="w-24 h-1 bg-[var(--primary)] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, idx) => (
            <motion.div
              key={project._id || idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card group overflow-hidden"
            >
              <div className="relative h-56 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img 
                  src={project.thumbnail || 'https://via.placeholder.com/600x400'} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" className="p-3 bg-white text-black rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" className="p-3 bg-white text-black rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-[var(--text-muted)] text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-[var(--background)] text-[var(--primary)] text-xs font-semibold rounded-full border border-[var(--primary)]/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
