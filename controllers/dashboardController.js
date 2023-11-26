import { getRandomTemperature } from "../helpers/helpers.js";
import Sensor from "../models/sensorModel.js";

const getDataDashboard = async (req,res) => {

    const datosSensores = await Sensor.find();
    const temperatura = await getRandomTemperature();
    const humedadSuelo = (datosSensores[datosSensores.length-1]?.humedadSuelo)
    const humedadAmbiente = (datosSensores[datosSensores.length-1]?.humedadAmbiente)
    const graficaChart = await Sensor.find({dispositivo:'65590aab8ef290c452993fb5'})
    const graficaCharMod = graficaChart.map(e=>{
        e.fecha = e.fecha+" "+e.hora;
        return e
    })
    res.json({temperatura,humedadSuelo,humedadAmbiente,'cantidadReportes':datosSensores.length,'plantasTotal':'6',graficaChart:graficaCharMod})
    
}

export {
    getDataDashboard
}