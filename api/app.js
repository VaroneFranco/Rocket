const morgan = require('morgan');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const dotenv = require("dotenv")
const axios = require("axios")
const {DB_PASSWORD} = process.env
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
const Profile = require("./models/Profiles.js")

app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(cookieparser());

app.listen(3001, ()=>{
  console.log("Conected to 3001")
})

app.get('/risa', async (req, res)=>{

  var usuario= await Profile.find()
  res.send("Otro cambio de prueba")
})


app.get('/prueba', async (req, res)=>{

  var usuario= await Profile.find()
  res.send(usuario)
})

app.post("/usuario", async(req ,res)=>{
  var newProfile = await new Profile({
      name: req.body.name
  })
  newProfile.save();
  res.send(newProfile)
})