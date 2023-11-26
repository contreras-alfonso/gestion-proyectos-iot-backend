import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import imagenesRouter from './routes/imagenesRouter.js';
import plantasRouter from './routes/plantasRouter.js';
import dispositivosRouter from './routes/dispositivosRouter.js';
import conectarDB from './config/db.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sensoresRouter from './routes/sensoresRouter.js';
import dashboardRouter from './routes/dashboardRouter.js';
import usuarioRouter from './routes/usuarioRouter.js';
import notificacionesRouter from './routes/notificacionRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json())

dotenv.config()

conectarDB();

const corsOptions = {
    origin: "*"
} 

app.use(cors(corsOptions))

app.use('/images', express.static(join(__dirname, 'public', 'images')));

app.use('/imagenesPlantas',imagenesRouter);
app.use('/plantas',plantasRouter);
app.use('/dispositivos', dispositivosRouter);
app.use('/sensores', sensoresRouter);
app.use('/dashboard',dashboardRouter)
app.use('/users',usuarioRouter);
app.use('/notificaciones',notificacionesRouter);

// Tu servidor escucha en el puerto 3000
app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});
