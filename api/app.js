const morgan = require('morgan');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const dotenv = require("dotenv")
const axios = require("axios")
const {DB_PASSWORD} = process.env
const Profile = require("./models/Profiles.js")
const Institution = require("./models/Institution.js")
const routes = require('./routes/index')

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
app.use('/', routes)

app.listen(3001, ()=>{
  console.log("Conected to 3001")
})

