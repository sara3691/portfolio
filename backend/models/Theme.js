import mongoose from 'mongoose';

const themeSchema = new mongoose.Schema({
  name: { type: String, default: 'Default Theme' },
  fonts: {
    heading: { type: String, default: 'Inter' },
    body: { type: String, default: 'Inter' },
  },
  colors: {
    primary: { type: String, default: '#3b82f6' },
    secondary: { type: String, default: '#6366f1' },
    background: { type: String, default: '#ffffff' },
    surface: { type: String, default: '#f3f4f6' },
    text: { type: String, default: '#1f2937' },
    textMuted: { type: String, default: '#6b7280' },
    accent: { type: String, default: '#f59e0b' },
  },
  gradients: {
    primary: { type: String, default: 'linear-gradient(to right, #3b82f6, #6366f1)' },
  },
  borderRadius: {
    button: { type: String, default: '8px' },
    card: { type: String, default: '12px' },
  },
  shadows: {
    card: { type: String, default: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  },
  animations: {
    initial: { type: String, default: 'fade-up' },
    duration: { type: Number, default: 0.5 },
  },
  darkMode: { type: Boolean, default: false },
}, { timestamps: true });

const Theme = mongoose.model('Theme', themeSchema);
export default Theme;
