const express = require('express')
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 3003

const app = express()

app.use(cors());

app.get('/users' , (req,res)=>{
 res.send('hi all')
})

app.listen(PORT, console.log("app listening on port: ${PORT}"))