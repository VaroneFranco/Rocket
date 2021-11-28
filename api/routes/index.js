const { Router, application } = require("express");
const Profile = require("../models/Profiles");
const Institution = require("../models/Institution");
const { postInstitution } = require("../routes/utils");
const { shuffle } = require("../routes/utils");
const { asignTable } = require("../routes/utils");
const jwt = require("jsonwebtoken");
const { generateProfile } = require("./loaded");

//funcion de encriptado
const { encrypt } = require("./utils");

const router = Router();

//Usuarios--> GENERADOR DE PROFILES EN BASE DE DATOS
router.get("/generateProfile", async (req, res) => {
  var profiles = await generateProfile(30);
  res.send("CARGADO");
});

//Usuarios --> BORRAR TODA LA BASE DE DATOS PROFILES
router.get("/deleteProfile", async (req, res) => {
  await Profile.deleteMany({ institution: "Henry" });
  res.status(200).send("Profiles Deleted");
});

//Usuarios -->Inscribirse
router.post("/signup", async (req, res) => {
  try {
    let user = await Profile.find({ email: req.body.email });
    console.log(user);
    if (
      !req.body.password ||
      !req.body.name ||
      !req.body.email ||
      !req.body.country
    ) {
      throw new Error(
        "Los inputs requeridos son name, email, country, password e institution"
      );
    } else if (user[0]) {
      throw new Error("El mail ya está registrado");
    } else {
      const password = req.body.password;

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
    }
  } catch (err) {
    res.json(err);
    console.log(err);
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
  const {
    id,
    new_country,
    new_name,
    new_email,
    new_img,
    new_enhableContact,
    new_about,
  } = req.body;

  await Profile.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        country: new_country,
        email: new_email,
        img: new_img,
        about: new_about,
        enhableContact: new_enhableContact,
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
router.put("/asignTable", async (req, res) => {
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
router.get("/searchProfileID/:id", async (req, res) => {
  let { id } = req.params;
  let profile = await Profile.findById(id);
  return res.send(profile);
});

router.put("/increaseLike/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let profile = await Profile.findById(id);
    let points = profile.score + 1;
    res.send(await Profile.findByIdAndUpdate(id, { score: points }));
  } catch (err) {
    console.log(err);
  }
});
router.put("/increaseReports", async (req, res) => {
  let id = req.params.id;
  let profile = await Profile.findById(id);
  let reports = profile.reports + 1;
  res.send(await Profile.findByIdAndUpdate(id, { reports: reports }));
});
// router.put('/increaseLike', async (req, res) => {
//   let id = req.body.id;
//   let profile = await Profile.findById(id);
//   let points = profile.score + 1
//   res.send(await Profile.findByIdAndUpdate(id, {score: points}))
// })
//Filtrar usuarios por mesa
router.post("/filterUserByTable", async (req, res) => {
  let { table } = req.body;

  let filteredUsers = await Profile.find({
    table: table,
  });

  res.send(filteredUsers);
});

router.post("/logMedia", async (req, res) => {
  const { name, email, img } = req.body;
  let exist = await Profile.findOne({ email: email });
  console.log(exist, "desde logmedia");
  if (exist) {
    const token = jwt.sign(
      {
        id: exist._id,
      },
      //poner alguna key desde env en vez de secret
      "secret"
    );
    return res.json({ token: token });
  } else if (!exist) {
    try {
      var newProfile = await new Profile({
        name: name,
        email: email,
        img: img,
        country: "Rocket Country",
      });
      newProfile.save();
      const token = jwt.sign(
        {
          id: newProfile._id,
        },
        //poner alguna key desde env en vez de secret
        "secret"
      );
      return res.json({ token: token });
    } catch (err) {
      console.log(
        "Los campos requeridos son name, password, email, country, institución"
      );
    }
  }
});

module.exports = router;
