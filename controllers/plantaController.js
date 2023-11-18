import Planta from "../models/plantaModel.js";

const addPlanta = async (req,res) => {
    const data = req.body;
    console.log(data)
    
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
    console.log(planta);
    res.json(planta);
}

const getPlantas = async (req,res) => {
    const plantas = await Planta.find();
    res.json(plantas);
}

export{
    addPlanta,
    getPlantas,
    getPlanta,
}