import mongoose from 'mongoose';

const sectionRegistrySchema = new mongoose.Schema({
  sections: [{
    type: { type: String, required: true }, // hero, about, projects, skills, etc.
    isVisible: { type: Boolean, default: true },
    order: { type: Number, required: true },
    settings: { type: Map, of: String } // section specific global settings
  }]
}, { timestamps: true });

const SectionRegistry = mongoose.model('SectionRegistry', sectionRegistrySchema);
export default SectionRegistry;
