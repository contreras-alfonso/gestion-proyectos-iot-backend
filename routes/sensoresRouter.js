import express from 'express'
import { getAll, testAddData } from '../controllers/sensorController.js';


const router = express.Router();

router.get('/testaddinfo', testAddData);
router.get('/getAll/:id', getAll);

export default router
