import { getFecha, getHora, getRandomHumedadAmbiente, getRandomHumedadSuelo, getRandomTemperature } from "../helpers/helpers.js";
import Dispositivo from "../models/dispositivoModel.js";
import Notificacion from "../models/notificacionModel.js";
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
            const sensores = new Sensor({
                humedadAmbiente: getRandomHumedadAmbiente(),
                humedadSuelo: getRandomHumedadSuelo(),
                temperatura: await getRandomTemperature(),
                dispositivo: dispositivo._id,
                fecha: await getFecha(),
                hora: await getHora(),
            })
            await sensores.save();
        } 
    }
}

const testAddDataSensor = async (req,res) => {
    const {_id} = req.body;
   
}

const testSensor = async (req,res) => {
    
    const {_id} = req.body;
    const dispositivo = await Dispositivo.findById(_id);
    const notificacion = new Notificacion();
    notificacion.estado = "3";
    notificacion.hora = await getHora();
    notificacion.fecha = await getFecha();
    notificacion.dispositivo = dispositivo;
    await notificacion.save();
    res.json({notificacion});

}

const getAll = async (req,res) => {
    const {id} = req.params;
    //obtener la data de sensores pero, para la grafica
    const dataSensoresGrafica = await Sensor.find({dispositivo:id}).limit(10);
    const dataSensoresGraficaMod = dataSensoresGrafica.map((e,i)=>{
        const {humedadAmbiente,humedadSuelo,temperatura,fecha,hora,_id} = e;
        return {
            humedadAmbiente,
            humedadSuelo,
            fechaYhora: fecha+" "+hora,
            _id,
            temperatura,
        }
    })
    // res.json(dataSensores);
    const dataSensoresTable = await Sensor.find({dispositivo:id});
    const dataSensoresTableMod = dataSensoresTable.map((e,i)=>{
        const {humedadAmbiente,humedadSuelo,temperatura,fecha,hora,_id} = e;
        const fechaFormat = fecha.split('-');
        const horaFormat = hora.split(':');
        return {
            humedadAmbiente,
            humedadSuelo,
            fechaYhora: fechaFormat[1]+"-"+fechaFormat[2]+" "+horaFormat[0]+":"+horaFormat[1],
            _id,
            temperatura,
            numeroReporte: i+1,
        }
    })

    res.json({dataSensoresGraficaMod,dataSensoresTableMod:dataSensoresTableMod.reverse()});
}

export{
    testAddData,
    getAll,
    testSensor,
}