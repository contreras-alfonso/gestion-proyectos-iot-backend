import mongoose from "mongoose";

const sensorSchema = mongoose.Schema({
   humedadAmbiente:{
    type:String,
    required:true,
   },
   humedadSuelo:{
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