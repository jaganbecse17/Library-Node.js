const commonRoutes =  require('express').Router()
const CommonResponse = require("../../utils/CommonResponse")
commonRoutes.get('/fetchProfile',(req,res)=>{
    // res.send(CommonResponse)
    res.send()
})


module.exports = commonRoutes