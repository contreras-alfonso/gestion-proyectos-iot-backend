import express from 'express'
import { getAll, testAddData, testSensor, testAddDataSensorSingle } from '../controllers/sensorController.js';


const router = express.Router();

router.get('/testaddinfo', testAddData);  
router.get('/getAll/:id', getAll);
router.post('/testJust', testSensor);
router.get('/testAddDataSensorSingle/:_id', testAddDataSensorSingle);

export default router
