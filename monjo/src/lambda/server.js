const express = require("express"); 
const cors = require('cors'); 
const serverless = require('serverless-http'); 
const app = express(); 
const router = express.Router(); 
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

 app.use(`/.netlify/functions/api`, router);

router.get('/ping', (req, res) => { 
 res.send('pong!');
 }); 


 module.exports = app;
 module.exports.handler = serverless(app);
