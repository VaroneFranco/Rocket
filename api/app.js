const morgan = require('morgan');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const dotenv = require("dotenv")
const axios = require("axios")
const {DB_PASSWORD} = process.env
const {Profile} = require("./models/Profiles.js")
const {Institution} = require("./models/Institution.js")
//RocketAppFranco
//${DB_PASSWORD}

dotenv.config()
const app = express();
app.use(express.json());
app.use(morgan("dev"))

mongoose.connect(`mongodb+srv://apiAdmin:RocketAppFranco@rocketapp.rnqqh.mongodb.net/Rocket?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(cookieparser());

app.listen(3001, ()=>{
  console.log("Conected to 3001")
})

app.get('/risa', async (req, res)=>{

  var usuario= await Profile.find()
  res.send("Otro cambio de prueba de Lauuu ")
})


app.get('/prueba', async (req, res)=>{

  var usuario= await Profile.find()
  res.send(usuario)
})

app.post("/Profile", async(req ,res)=>{
  var newProfile = await new Profile({
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
      institution: req.body.institution,
  })
  newProfile.save();
  res.send(newProfile)
})


app.post("/Institution", async(req ,res)=>{
  var newInstitution = await new Institution({
      name: req.body.name
  })
  // newInstitution.save();
  res.send(newInstitution)
})
