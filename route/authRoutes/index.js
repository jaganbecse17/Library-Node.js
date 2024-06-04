const AuthCon = require("express").Router()

AuthCon.get("/check",(req,res)=>{
    res.send(200)
})

module.exports = AuthCon