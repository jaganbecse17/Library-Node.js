const express = require('express')
// const bodyParser = require('body-parser')
const app = express()
const port = 3000
// const pooldb = require("./config/DataBase")
// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )
app.on("data",(data)=>{
    console.log("data",data)
})
app.get('/healthCheck', (request, response) => {
    // console.log("request data",request)
    response.json({ info: 'Node.js, Express, and Postgres API' })

  })
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })