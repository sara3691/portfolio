import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  description: { type: String },
  typedText: [{ type: String }], // For "I am a [Web Dev, UI Designer, ...]"
  image: { type: String }, // URL
  ctaButtons: [{
    text: { type: String },
    link: { type: String },
    variant: { type: String, enum: ['primary', 'secondary', 'outline'], default: 'primary' }
  }],
  socialLinks: [{
    platform: { type: String },
    url: { type: String },
    icon: { type: String }
  }],
  isVisible: { type: Boolean, default: true },
}, { timestamps: true });

const Hero = mongoose.model('Hero', heroSchema);
export default Hero;
