import obtenerJWT from "../helpers/jwt.js";
import bcrypt from 'bcrypt'
import Usuario from "../models/usuarioModel.js";

const login = async (req,res) => {

    const {user,password} = req.body;
    const usuario = await Usuario.findOne({usuario:user});
    if(!usuario?._id){
        res.json({status:false,msg:'Usuario o password incorrecto'});
        return;
    }
    const validarPassword = await bcrypt.compare(password,usuario.password);

    if(validarPassword){
        const token = obtenerJWT(usuario._id,usuario.usuario);
        res.json({status:true,token});
    }else{
        res.json({status:false,msg:'Usuario o password incorrecto'});
    }
}

const getUser = async (req,res) => {
    const usuario = await Usuario.findById(req.usuario._id).select("-password -__v");
    res.json(usuario);
}

const addUser = async (req,res) => {
    const {user,password} = req.body;
    const usuario = new Usuario();
    usuario.usuario = user;
    usuario.password = await bcrypt.hash(password,10);
    await usuario.save();
    res.json(usuario);
}

export{
    getUser,
    addUser,
    login
}