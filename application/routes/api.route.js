const router = require('express').Router();
const user_router = require ("./user.route");

router.use("/user" , user_router)

module.exports = router;