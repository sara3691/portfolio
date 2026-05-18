import Theme from '../models/Theme.js';
import Hero from '../models/Hero.js';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Experience from '../models/Experience.js';
import SectionRegistry from '../models/SectionRegistry.js';

export const getFullPortfolio = async (req, res) => {
  try {
    const [theme, hero, projects, skills, experiences, registry] = await Promise.all([
      Theme.findOne({}),
      Hero.findOne({}),
      Project.find({ isVisible: true }).sort('order'),
      Skill.find({ isVisible: true }).sort('order'),
      Experience.find({ isVisible: true }).sort('order'),
      SectionRegistry.findOne({}),
    ]);

    res.json({
      theme,
      hero,
      projects,
      skills,
      experiences,
      registry: registry ? registry.sections : [],
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
