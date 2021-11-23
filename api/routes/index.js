const { Router, application } = require('express');
const Profile = require("../models/Profiles")
const Institution = require("../models/Institution")

const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/risa', async (req, res) => {

    var usuario = await Profile.find()
    res.send("Otro cambio de prueba de Lauuu ")
})


router.get('/prueba', async (req, res) => {

    var usuario = await Profile.find()
    res.send(usuario)
})

router.post("/Profile", async (req, res) => {
    var newProfile = await new Profile({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country,
        institution: req.body.institution,


    })
    newProfile.save();
    res.send(newProfile)
})

router.post("/Institution", async (req, res) => {
    var newInstitution = await new Institution({
        name: req.body.name
    })
    newInstitution.save();
    res.send(newInstitution)
})


module.exports = router;
