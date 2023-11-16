import mongoose from 'mongoose';

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.RUTA_MONGO)
        console.log('Conectado a Mongo DB')
    } catch (error) {
        console.log("ocurrio un error: "+error)
    }
}

export default conectarDB;