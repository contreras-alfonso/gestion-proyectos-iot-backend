import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import plantasRouter from './routes/plantasRouter.js';
import conectarDB from './config/db.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

dotenv.config()

conectarDB();

const corsOptions = {
    origin: "*"
} 

app.use(cors(corsOptions))

app.use('/images', express.static(join(__dirname, 'public', 'images')));

app.use('/imagenesPlantas',plantasRouter);



// Tu servidor escucha en el puerto 3000
app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});
