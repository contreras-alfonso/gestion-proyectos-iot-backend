import jwt from 'jsonwebtoken';

const obtenerJWT = (_id,user) => {
    const token = jwt.sign({_id,user}, process.env.JWT_SECRET, { expiresIn: "1d" });
    return token;
}

export default obtenerJWT;