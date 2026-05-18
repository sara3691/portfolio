'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact({ data }: { data: any }) {
  return (
    <section id="contact" className="py-24 px-6 gradient-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's build something <span className="text-[var(--primary)]">extraordinary</span>.</h2>
            <p className="text-[var(--text-muted)] text-lg mb-10">
              I'm open to collaborations, freelance opportunities, or just a friendly chat about technology.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)]">Email</p>
                  <p className="font-bold">{data?.email || 'contact@example.com'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center text-[var(--secondary)]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)]">Phone</p>
                  <p className="font-bold">{data?.phone || '+1 (555) 000-0000'}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="card p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full bg-[var(--background)] border border-[var(--primary)]/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]/20" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full bg-[var(--background)] border border-[var(--primary)]/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]/20" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={5} className="w-full bg-[var(--background)] border border-[var(--primary)]/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]/20"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
