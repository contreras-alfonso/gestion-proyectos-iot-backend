import getRandomTemperature from "../helpers/getTemperature.js";
import Dispositivo from "../models/dispositivoModel.js";
import Sensor from "../models/sensorModel.js";

const testAddData = async (req,res) => {
    const promises = [
        Dispositivo.findById('65590aab8ef290c452993fb5'),
        Dispositivo.findById('65590ab68ef290c452993fb8'),
        Dispositivo.findById('65590aba8ef290c452993fbb'),
        Dispositivo.findById('65590abe8ef290c452993fbe'),
        Dispositivo.findById('65590ac28ef290c452993fc1'),
        Dispositivo.findById('65590ac68ef290c452993fc4'),
    ]

    const [dispositivo1,dispositivo2,dispositivo3,dispositivo4,dispositivo5,dispositivo6] = await Promise.all(promises);

    for (let index = 0; index < promises.length; index++) {
        const dispositivo = [dispositivo1, dispositivo2, dispositivo3, dispositivo4, dispositivo5, dispositivo6][index];

        if (dispositivo.estado) {
            console.log(dispositivo)
            const sensores = new Sensor({
                humedadAmbiente: getRandomTemperature(23,29),
                humedadSuelo: getRandomTemperature(23,29),
                dispositivo: dispositivo._id,
            })
            await sensores.save();
        } 
    }
}

const getAll = async (req,res) => {
    const {id} = req.params;
    const dataSensores = await Sensor.find({dispositivo:id});
    res.json(dataSensores);
}

export{
    testAddData,
    getAll,

}