import jwt from 'jsonwebtoken';

const obtenerJWT = (_id,user) => {
    const token = jwt.sign({_id,user}, process.env.JWT_SECRET, { expiresIn: "1d" });
    console.log(token)
    return token;
}

export default obtenerJWT;