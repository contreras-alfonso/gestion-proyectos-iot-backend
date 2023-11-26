import Notificacion from "../models/notificacionModel.js"

const getAll = async (req,res) => {
    const notificaciones = await Notificacion.find().sort({ _id: -1 }).limit(10).populate('dispositivo');
    res.json(notificaciones.reverse());
}

export{
    getAll,
}