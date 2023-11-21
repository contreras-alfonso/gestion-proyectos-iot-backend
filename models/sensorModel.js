import mongoose from "mongoose";
import { getFecha, getHora } from "../helpers/helpers.js";

const sensorSchema = mongoose.Schema({
   humedadAmbiente:{
    type:String,
    required:true,
   },
   humedadSuelo:{
    type:String,
    required: true,
   },
   temperatura:{
    type:String,
    required:true,
   },
   fecha:{
    type:String,
    required: true,
   },
   hora:{
    type:String,
    required: true,
   },
   dispositivo:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dispositivo',
   }
},{
    timestamps: true  // Habilitar timestamps
})

const Sensor = mongoose.model('Sensores',sensorSchema)
export default Sensor;