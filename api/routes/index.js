const { Router, application } = require('express');
const Profile = require("../models/Profiles")
const Institution = require("../models/Institution")

const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.put('/user/changes', async(req, res)=>{
    const{id, new_country, new_name, new_email, new_img}=req.body;
    await Profile.findOneAndUpdate({"_id":id},
   {
     "$set":{
       "country": new_country,"name": new_name, "email":new_email, "img":new_img
     },
     new:true
   },
   async (err, result)=>{
     if (result) return res.send(await Profile.findOne({_id:id}))
     if (err) return res.send(console.log(err));
   })
    
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
