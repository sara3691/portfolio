import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String },
  images: [{ type: String }],
  techStack: [{ type: String }],
  liveUrl: { type: String },
  githubUrl: { type: String },
  category: { type: String },
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  isVisible: { type: Boolean, default: true },
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;
