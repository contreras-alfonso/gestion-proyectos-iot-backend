import mongoose, { mongo } from "mongoose";

const plantaSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    especie:{
        type:String,
    },
    temperatura:{
        type:String,
    },
    humedad:{
        type:String,
    },
    descripcion:{
        type:String,
    },
    pathIcono:{
        type:String,
        required:true
    }
})

const Planta = mongoose.model('Planta',plantaSchema);
export default Planta;