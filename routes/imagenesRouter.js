import express from 'express'
import Imagen from '../models/imagenModel.js';

const router = express.Router();

router.get('/create', async (req,res) => {
    const path1 = 'images/planta1.jpeg'
    const path2 = 'images/planta2.jpeg'
    const path3 = 'images/planta3.jpeg'
    const path4 = 'images/planta4.jpeg'
    const path5 = 'images/planta5.jpeg'

    const imagen5 = new Imagen({imgPath:path5});
    await imagen5.save();
})

router.get('/getAll',async (req,res) => {
    const imagenes = await Imagen.find();
    res.json(imagenes)
})

export default router