const { Router, application } = require("express");
const Profile = require("../models/Profiles");
const Institution = require("../models/Institution");
const { postInstitution } = require("../routes/utils");
const { shuffle } = require("../routes/utils");
const { asignTable } = require("../routes/utils");
const jwt = require("jsonwebtoken");

//funcion de encriptado
const { encrypt } = require("./utils");

const router = Router();

//Usuarios -->Inscribirse
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
    console.log(
      "Los campos requeridos son name, password, email, country, institución"
    );
  }
});

//Usuarios--> Validacion isLog
router.post("/isLog", async (req, res) => {
  const { token } = req.body;
  var user = jwt.verify(token, "secret");
  if (user) {
    var userDb = await Profile.findById(user.id).lean();
    return res.send(userDb);
  } else return res.send(false);
});

//Usuarios --> Ingresar
router.post("/signin", async (req, res) => {
  let { email, password } = req.body;

  let profile = await Profile.findOne({ email: email });

  if (encrypt(password) == profile.password) {
    const token = jwt.sign(
      {
        id: profile._id,
      },

      "secret"
    );
    return res.json({ token: token });
  } else {
    res.send("Access Denied");
  }
});

//Usuarios --> Trae todos los Usuarios
router.get("/getProfiles", async (req, res) => {
  var usuario = await Profile.find();
  res.send(usuario);
});

//Usuarios --> Actualiza el perfil del usuario
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

//Institution --> Inscribirse
router.post("/signUpInstitution", async (req, res) => {
  if (!req.body.email || !req.body.name || !req.body.password) {
    res.status(404).send("Name, email and Password are required");
  }

  try {
    let newInstitution = await postInstitution(req.body);
    res.status(200).send(newInstitution);
  } catch (error) {
    throw new Error(error);
  }
});

//Institution --> Ingresar
router.post("/signInInstitution", async (req, res) => {
  let { email, password } = req.body;

  let institutionProfile = await Institution.findOne({ email: email });

  if (encrypt(password) == institutionProfile.password) {
    const token = jwt.sign(
      {
        id: institutionProfile._id,
      },
      "secret"
    );
    return res.json({ token: token });
  } else {
    res.send("Access Denied");
  }
});
//Ruta asignacion de Mesas
router.get("/asignTable", async (req, res) => {
  var users = await Profile.find();
  shuffle(users);
  asignTable(users);
  res.send(users);
});

//Busqueda Profile By Name
router.get("/searchProfiles", async (req, res) => {
  let name = req.body.name;
  let profiles = await Profile.find({
    name: { $regex: new RegExp(".*" + name + ".*", "i") },
  });
  return res.send(profiles);
});

//Busqueda Profile By ID
router.get("/searchProfileID", async (req, res) => {
  let { id } = req.body;
  let profile = await Profile.findById(id);
  return res.send(profile);
});

module.exports = router;
