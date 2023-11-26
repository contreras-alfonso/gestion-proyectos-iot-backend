import express from 'express';
import { getAll } from '../controllers/notificacionController.js';

const router = express.Router();

router.get('/getAll',getAll);

export default router;