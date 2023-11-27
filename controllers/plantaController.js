import Planta from "../models/plantaModel.js";

const addPlanta = async (req,res) => {
    const data = req.body;
    
    const planta = new Planta(data);
    const plantaSave = await planta.save();
    if(plantaSave._id){
        res.json({msg:'Planta agregada correctamente.',status:true,data:plantaSave});
    }else{
        res.json({msg:'Ocurrió un error.',status:false});
    }
}

const getPlanta = async (req,res) => {
    const planta = await Planta.findById('6557f6371c63c6b93f684be7');
    res.json(planta);
}

const getPlantas = async (req,res) => {
    const plantas = await Planta.find();
    res.json(plantas);
}

const editPlanta = async (req,res) => {
    const planta = await Planta.findById(req.body._id);
    planta.nombre = req.body?.nombre || planta.nombre;
    planta.especie = req.body?.especie || planta.especie;
    planta.temperatura = req.body?.temperatura || planta.temperatura;
    planta.humedad = req.body?.humedad || planta.humedad;
    planta.descripcion = req.body?.descripcion || planta.descripcion;
    planta.pathIcono = req.body?.pathIcono || planta.pathIcono;

    try {
        await planta.save();
        res.json({status:true,planta,msg:'Información modificada.'})
    } catch (error) {
        res.json({status:false,msg:'Ocurrio un error al editar.'})
    }
    
   

}

export{
    addPlanta,
    getPlantas,
    getPlanta,
    editPlanta,
}