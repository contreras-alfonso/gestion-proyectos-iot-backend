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
import http from 'http';


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

// Mecanismo de keep-alive: enviar solicitud a sí mismo cada 30 segundos
setInterval(() => {
  http.get(`http://localhost:${process.env.PORT}`, (res) => {
    console.log('Solicitud enviada correctamente');
    // Puedes manejar la respuesta aquí si es necesario
  }).on('error', (err) => {
    console.error(`Error al enviar solicitud: ${err.message}`);
  });
}, 60 * 1000); // 30 segundos en milisegundos

//enviar test data para todos los dispositivos activos
const keepAlive = () => {
  http.get(`http://localhost:${process.env.PORT}/sensores/testaddinfo`, (res) => {
    console.log('Respuesta test data sensores enviada');
  }).on('error', (err) => {
    console.error(`Error al enviar solicitud de testdata en el backend: ${err.message}`);
  });
};

setInterval(keepAlive, 4 * 60 * 1000);


//para el riego cada cierto tiempo
const rutasEIntervalos = [
  { id: '65590aab8ef290c452993fb5', intervalo: 30 },
  { id: '65590ab68ef290c452993fb8', intervalo: 31 },
  { id: '65590aba8ef290c452993fbb', intervalo: 32 },
  { id: '65590abe8ef290c452993fbe', intervalo: 33 },
  { id: '65590ac28ef290c452993fc1', intervalo: 34 },
  { id: '65590ac68ef290c452993fc4', intervalo: 35 },
];

const keepAlivePorRuta = (ruta) => {
  const url = `http://localhost:${process.env.PORT}/sensores/testAddDataSensorSingle/${ruta.id}`;

  http.get(url, (res) => {
    console.log(`Solicitud para ${ruta.id} enviada correctamente`);
    // Puedes manejar la respuesta aquí si es necesario
  }).on('error', (err) => {
    console.error(`Error al enviar solicitud para ${ruta.id}: ${err.message}`);
  });
};

// rutasEIntervalos.forEach((ruta) => {
//   setInterval(() => {
//     keepAlivePorRuta(ruta);
//   }, ruta.intervalo * 60 * 1000); // Convertir a milisegundos
// });
