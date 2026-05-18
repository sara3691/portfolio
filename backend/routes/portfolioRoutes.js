import express from 'express';
import { getFullPortfolio } from '../controllers/portfolioController.js';

const router = express.Router();

router.get('/', getFullPortfolio);

export default router;
