import mongoose from "mongoose";

const notificacionSchema = mongoose.Schema({

    estado:{
        type:String,
        required:true,
    },
    hora:{
        type:String,
        required:true,
    },
    fecha:{
        type:String,
        required:true,
    },
    dispositivo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dispositivo',
    }
})

const Notificacion = mongoose.model('Notificaciones',notificacionSchema);
export default Notificacion