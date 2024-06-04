const express = require('express')
// const bodyParser = require('body-parser')
const router = require("./route")
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


app.use('/',router)

app.get('/healthCheck', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.use((req,res,next)=>{
  res.status(400).send("Route not found or mismatch...")
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})