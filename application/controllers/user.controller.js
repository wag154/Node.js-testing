const User = require("../model/user.model")
const jwt = require("jsonwebtoken")

const create = async(req,res)=>{
    let {body} = req;

    try{
        
        const account_instance = new User({username : body.username, name : body.name, password : body.password, email : body.email, level : body.level});
        
        const resp = await account_instance.Sign_Up();
        console.log(resp)
        return res.status(201).json(resp)

    }
    catch (e){
        console.log(e);
        return res.status(401).json({e : e.message})
    }
}
const Sign_In = async(req,res)=>{
    let {body} = req;
    try{
        const account_instance = new User({username: body.username,password : body.password})
        const resp = await account_instance.Login();

        const token = jwt.sign({userId: resp}, 'Secret_key',{
            expiresIn: '1h'
        })
        
        res.cookie("auth_token", token)

        return res.status(201).json({"Message":"success"})
    }
    catch (e){

        return res.status(401).json({e : e.message})
    }}

module.exports = {create, Sign_In}