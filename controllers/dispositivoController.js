import Dispositivo from "../models/dispositivoModel.js";
import Planta from "../models/plantaModel.js"

const addDispositivo = async (req,res) => {
    const planta = await Planta.findById('6557f6371c63c6b93f684be7');
    // const {nombre,numeroDispositivo} = req.body;
    const dispositivo = new Dispositivo(req.body);
    await dispositivo.save();
}

const getDispositivo = async (req,res) => {
    const {id} = req.params;
    const dispositivo = await Dispositivo.findById(id).populate('planta');
    res.json(dispositivo);
}

const getDispositivos = async (req,res) => {
    const dispositivos = await Dispositivo.find().populate('planta');
    res.json(dispositivos);
}

const updateDesvincularDispositivo = async (req,res) => {
    const {id} = req.body;
    const idPlantaUpdate = '6557f6371c63c6b93f684be7';
    const dispositivo = await Dispositivo.findById(id);
    dispositivo.planta = idPlantaUpdate;
    dispositivo.estado = false;
    try {
        await dispositivo.save();
        res.json({status:true,msg:'Dispositivo desvinculado.'})
    } catch (error) {
        res.json({status:false,msg:'Surgió un error al querer devincular el dispositivo.'})
    }
}

const updateEstadoDispositivo = async (req,res) => { 
    const {id} = req.body;
    const dispositivo = await Dispositivo.findById(id);
    dispositivo.estado = !dispositivo.estado;
    const dispositivoUpdate = await dispositivo.save(); 
    dispositivoUpdate.estado ? res.json({msg:'Sistema activado.'}) : res.json({msg:'Sistema desactivado.'})
}

const updateAsignarPlantaDispositivo = async (req,res) => {
    const {idPlanta,idDispositivo} = req.body;
    const dispositivo = await Dispositivo.findById(idDispositivo);
    dispositivo.planta = idPlanta;
    try {
        await dispositivo.save();
        res.json({msg:'Se agrego correctamente la planta.',status:true})
    } catch (error) {
        res.json({msg:'Ocurrió un error al querer agregar la planta.',status:false})
    }
}

 
export {
    addDispositivo,
    getDispositivo,
    getDispositivos,
    updateDesvincularDispositivo,
    updateEstadoDispositivo,
    updateAsignarPlantaDispositivo
}