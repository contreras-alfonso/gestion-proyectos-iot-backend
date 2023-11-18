import Dispositivo from "../models/dispositivoModel.js";
import Planta from "../models/plantaModel.js"

const addDispositivo = async (req,res) => {
    const planta = await Planta.findById('6557f6371c63c6b93f684be7');
    // const {nombre,numeroDispositivo} = req.body;
    const dispositivo = new Dispositivo(req.body);
    await dispositivo.save();
}

const getDispositivo = async (req,res) => {
    const dipositivo = await Dispositivo.findById('6558581b1f185c71743e3193').populate('planta');
    console.log(dipositivo);
}

export {
    addDispositivo,
    getDispositivo,
}