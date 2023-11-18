import mongoose from "mongoose";

const dispositivoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true,
    },
    numeroDispositivo:{
        type:String,
        required:true,
    },
    estado:{
        type: String,
        required: true,
        default: false,
    },
    planta:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Planta',
        default: '6557f6371c63c6b93f684be7',
    }
})

const Dispositivo = mongoose.model('Dispositivo',dispositivoSchema)
export default Dispositivo