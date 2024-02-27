const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next) =>{
    const token  = req.cookies.auth_token;

    if (!token) return res.status(401),json({"Perm Issue" : "No Token"});

    try{
        const decoded = jwt.verify(token , "Secret_key");
        req.userId = decoded.userId;
        next();
    }
    catch (e){
        res.status(401).json({"Perm Issue" : "Token Invalid"})
    }
}
module.exports = verifyToken;