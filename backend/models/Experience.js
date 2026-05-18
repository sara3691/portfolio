import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  location: { type: String },
  from: { type: String, required: true },
  to: { type: String, default: 'Present' },
  description: { type: String },
  logo: { type: String },
  isVisible: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const Experience = mongoose.model('Experience', experienceSchema);
export default Experience;
