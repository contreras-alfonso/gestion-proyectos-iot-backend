import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    usuario:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const Usuario = mongoose.model('Usuario',usuarioSchema);
export default Usuario;