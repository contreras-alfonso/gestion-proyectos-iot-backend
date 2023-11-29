import Notificacion from "../models/notificacionModel.js"

const getAll = async (req,res) => {
    // const notificaciones = await Notificacion.find().sort({ _id: -1 }).limit(10).populate('dispositivo');
    const {page} = req.params;
    const pageSize = 10;
    const skip = (page-1)*pageSize;
    const notificaciones = await Notificacion.find().sort({ _id: -1 }).skip(skip).limit(pageSize)
    const totalCount = await Notificacion.countDocuments();
    const startRange = skip+1;   
    const endRange = Math.min(skip+pageSize,totalCount);

    // res.json(notificaciones);
    res.json({msg:`${startRange}-${endRange} de ${totalCount}`,notificaciones})
}

export{
    getAll,
}