import mongoose, { mongo } from "mongoose";

const imagenSchema = mongoose.Schema({
    imgPath:{
        type:String,
        required:true,
    }
})

const Imagen = mongoose.model('Imagen',imagenSchema);
export default Imagen;