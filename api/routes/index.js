const { Router, application } = require("express");
const Profile = require("../models/Profiles");
// const Institution = require("../models/Institution")
const { postInstitution } = require("../routes/utils");

//funcion de encriptado
const { encrypt } = require("./utils");

const router = Router();

//ruta para cambios de perfil de user, si algo no se cambia, permanece el anterior :)
router.put("/user/changes", async (req, res) => {
  const { id, new_country, new_name, new_email, new_img } = req.body;
  await Profile.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        country: new_country,
        name: new_name,
        email: new_email,
        img: new_img,
      },
      new: true,
    },
    async (err, result) => {
      if (result) return res.send(await Profile.findOne({ _id: id }));
      if (err) return res.send("user id invalid :S");
    }
  );
});

router.get("/prueba", async (req, res) => {
  var usuario = await Profile.find();
  res.send(usuario);
});


//Ruta provisoria para que el front pruebe los sign up de usuarios
router.post("/signup", async (req, res) => {
  try {
    const password = req.body.password;
    // const crypted = await encrypt(password);
    
    const crypted = encrypt(password);
    

    var newProfile = await new Profile({
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
      institution: req.body.institution,
      password: crypted,
    });
    newProfile.save();
    res.send(newProfile);
  } catch (err) {
    console.log("Los campos requeridos son name, password, email, country, institución")
  }
});


//Ruta provisoria para que validen sign in de usuarios

router.get("/signin", async (req, res) => {
  let { email, password } = req.body

  let profile = await Profile.findOne({ email: email })

  if (encrypt(password) == profile.password) {
    res.send("Access granted")
  }
  else {
    res.send("Access Denied")
  }

})

router.post("/institution", async (req, res) => {
  if (!req.body.name) {
    res.status(404).send("The name of Institution is required");
  }

  try {
    const newInstitutionResponse = await postInstitution(req.body);
    res.status(200).send(newInstitutionResponse);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
