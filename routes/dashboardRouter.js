import express from 'express'
import { getDataDashboard } from '../controllers/dashboardController.js';

const router = express.Router();

router.get('/getData',getDataDashboard);

export default router