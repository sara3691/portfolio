import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Theme from './models/Theme.js';
import Hero from './models/Hero.js';
import SectionRegistry from './models/SectionRegistry.js';
import User from './models/User.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await Theme.deleteMany({});
    await Hero.deleteMany({});
    await SectionRegistry.deleteMany({});
    await User.deleteMany({});

    // Seed Theme
    await Theme.create({
      name: 'Modern Slate',
      fonts: { heading: 'Outfit', body: 'Inter' },
      colors: {
        primary: '#3b82f6',
        secondary: '#6366f1',
        background: '#0f172a',
        surface: '#1e293b',
        text: '#f8fafc',
        textMuted: '#94a3b8',
        accent: '#f59e0b',
      },
      borderRadius: { button: '12px', card: '24px' },
      darkMode: true,
    });

    // Seed Hero
    await Hero.create({
      title: 'Designing Digital Experiences',
      subtitle: 'Full Stack Developer & UI Enthusiast',
      description: 'I build scalable, high-performance web applications with a focus on user experience and clean code.',
      typedText: ['React Developer', 'Node.js Expert', 'Problem Solver'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      ctaButtons: [
        { text: 'View Projects', link: '#projects', variant: 'primary' },
        { text: 'Contact Me', link: '#contact', variant: 'outline' },
      ],
    });

    // Seed Section Registry
    await SectionRegistry.create({
      sections: [
        { type: 'hero', order: 1, isVisible: true },
        { type: 'skills', order: 2, isVisible: true },
        { type: 'projects', order: 3, isVisible: true },
        { type: 'experience', order: 4, isVisible: true },
        { type: 'contact', order: 5, isVisible: true },
      ]
    });

    // Seed Admin User
    await User.create({
      name: 'Admin User',
      email: 'admin@portfolio.com',
      password: 'password123', // Will be hashed by pre-save hook
      role: 'admin',
    });

    console.log('Seeding completed!');
    process.exit();
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedData();
