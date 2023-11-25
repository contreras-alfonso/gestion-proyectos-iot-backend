import express from 'express';
import { addUser, getUser, login } from '../controllers/userController.js';
import verificarAuth from '../middlewares/verificarAuth.js';

const router = express.Router();

router.post('/login',login);
router.post('/add',addUser);
router.get('/get',verificarAuth,getUser);

export default router;