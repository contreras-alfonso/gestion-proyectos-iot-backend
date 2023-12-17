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
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const expressServer = createServer(app);

app.use(express.json())

dotenv.config()

conectarDB();

const corsOptions = {
    origin: "*"
} 

app.use(cors(corsOptions))

app.use('/images', express.static(join(__dirname, 'public', 'images')));
app.use('/4a39af0e-5a94-4b46-bc7e-ef8f92608cc7', express.static(join(__dirname, 'public', '4a39af0e-5a94-4b46-bc7e-ef8f92608cc7')));

app.use('/imagenesPlantas',imagenesRouter);
app.use('/plantas',plantasRouter);
app.use('/dispositivos', dispositivosRouter);
app.use('/sensores', sensoresRouter);
app.use('/dashboard',dashboardRouter)
app.use('/users',usuarioRouter);
app.use('/notificaciones',notificacionesRouter);
app.get('/',(req,res)=>{
  res.json({msg:'server backend'})
})

// Tu servidor escucha en el puerto 3000
expressServer.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});

const io = new SocketIOServer(expressServer, {
  cors: {
      origin: "*"
  },
});

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado:', socket.id);

  // Manejar eventos o acciones específicas que podrían surgir aquí
  // Por ejemplo, cuando recibes el evento 'activarRiego', emites 'cambiarVideo'
  socket.on('activarRiego', () => {
    // Tu lógica para activar el riego aquí

    // Emitir un evento para cambiar el video a todos los clientes conectados
    io.emit('cambiarVideo');
  });

  // Desconectar al cliente cuando se desconecta
  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});