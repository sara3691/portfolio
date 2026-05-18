import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import * as crud from '../controllers/crudController.js';

// Models
import Theme from '../models/Theme.js';
import Hero from '../models/Hero.js';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Experience from '../models/Experience.js';
import SectionRegistry from '../models/SectionRegistry.js';

const router = express.Router();

// Apply protection to all admin routes
router.use(protect);

// Theme
router.get('/theme', crud.getAll(Theme));
router.post('/theme', crud.upsertOne(Theme));

// Hero
router.get('/hero', crud.getAll(Hero));
router.post('/hero', crud.upsertOne(Hero));

// Projects
router.get('/projects', crud.getAll(Project));
router.post('/projects', crud.createOne(Project));
router.put('/projects/:id', crud.updateOne(Project));
router.delete('/projects/:id', crud.deleteOne(Project));

// Skills
router.get('/skills', crud.getAll(Skill));
router.post('/skills', crud.createOne(Skill));
router.put('/skills/:id', crud.updateOne(Skill));
router.delete('/skills/:id', crud.deleteOne(Skill));

// Experience
router.get('/experience', crud.getAll(Experience));
router.post('/experience', crud.createOne(Experience));
router.put('/experience/:id', crud.updateOne(Experience));
router.delete('/experience/:id', crud.deleteOne(Experience));

// Section Registry
router.get('/registry', crud.getAll(SectionRegistry));
router.post('/registry', crud.upsertOne(SectionRegistry));

export default router;
