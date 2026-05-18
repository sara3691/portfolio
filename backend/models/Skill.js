import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String }, // Icon name or URL
  percentage: { type: Number, min: 0, max: 100 },
  category: { type: String, default: 'Frontend' }, // e.g., Frontend, Backend, Tools
  isVisible: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;
