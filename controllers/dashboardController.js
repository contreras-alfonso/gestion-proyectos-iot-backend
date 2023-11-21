import Sensor from "../models/sensorModel.js";

const getDataDashboard = async (req,res) => {

    const datosSensores = await Sensor.find();
    const temperatura = (datosSensores[datosSensores.length-1]?.temperatura)
    const humedadSuelo = (datosSensores[datosSensores.length-1]?.humedadSuelo)
    const humedadAmbiente = (datosSensores[datosSensores.length-1]?.humedadAmbiente)
    const dataTable = await Sensor.find({dispositivo:'65590aab8ef290c452993fb5'})
    res.json({temperatura,humedadSuelo,humedadAmbiente,'cantidadReportes':datosSensores.length,'plantasTotal':'6',dataTable})
    
}

export {
    getDataDashboard
}