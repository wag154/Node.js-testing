const router = require("express").Router();
const user_controller = require("../controllers/user.controller");
const {verifyToken} = require ("../middleware")

router.get("/",(req,res)=>{
    console.log("here")
})
router.post("/create", user_controller.create) 
//router.post("/login",verifyToken ,user_controller.Sign_In)

module.exports = router;    