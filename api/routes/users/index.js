const { Router, application } = require("express");
const router = Router();
const Profile = require("../../models/Profiles");
const { asignTable, encrypt, shuffle} = require("./utils");
const {generateProfile} = require("./loaded")
const jwt = require("jsonwebtoken");
const cache = require('../routeCache')



// GENERADOR DE PROFILES EN BASE DE DATOS
router.get("/generateProfile",cache(300) ,async (req, res) => {
  var profiles = await generateProfile(1);
  res.send("CARGADO");
});

// BORRAR TODA LA BASE DE DATOS PROFILES
router.get("/deleteProfiles",cache(300), async (req, res) => {
  await Profile.deleteMany();
  res.status(200).send("Profiles Deleted");
});

//Inscribirse
router.post("/signup", async (req, res) => {
  try {
    let user = await Profile.find({ email: req.body.email });
    console.log(user);
    if (!req.body.password || !req.body.name || !req.body.email) {
      throw new Error("Los inputs requeridos son name, email, password ");
    } else if (user[0]) {
      throw new Error("El mail ya está registrado");
    } else {
      const password = req.body.password;

      const crypted = encrypt(password);

      var newProfile = await new Profile({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country,
        img: "https://s03.s3c.es/imag/_v0/770x420/a/d/c/Huevo-twitter-770.jpg",
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

//Validacion isLog
router.post("/isLog", async (req, res) => {
  const { token } = req.body;
  var user = jwt.verify(token, "secret");
  if (user) {
    var userDb = await Profile.findById(user.id).lean();
    return res.send(userDb);
  } else return res.send(false);
});

//Ingresar
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

//Trae todos los Usuarios
router.get("/getProfiles",cache("300"), async (req, res) => {
  var usuario = await Profile.find();
  res.send(usuario);
});

//Actualiza el perfil del usuario
router.put("/user/changes", async (req, res) => {
  const {
    id,
    new_country,
    new_email,
    new_img,
    new_enhableContact,
    new_about,
    new_status,
  } = req.body;

  const profile = await Profile.findById(id)
  await Profile.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        country: new_country? new_country : profile.country,
        email: new_email? new_email : profile.email,
        img: new_img? new_img : profile.img,
        about: new_about? new_about : profile.about,
        enhableContact: new_enhableContact? new_enhableContact : profile.enhableContact,
        status:new_status? new_status : profile.status
      },
      new: true,
    },
    async (err, result) => {
      if (result) return res.send(await Profile.findOne({ _id: id }));
      if (err) return res.send("user id invalid :S");
    }
  );
});

//Ruta asignacion de Mesas
router.post("/asignTable", async (req, res) => {
  var users = await Profile.find();
  shuffle(users);
  asignTable(users);
  res.send(users);
});

//Busqueda Profile By Name
router.get("/searchProfiles/:name",cache(300), async (req, res) => {
  let name = req.params.name;
  let profiles = await Profile.find({
    name: { $regex: new RegExp(".*" + name + ".*", "i") },
  });
  return res.send(profiles);
});

//Busqueda Profile By ID
router.get("/searchProfileID/:id",cache(300), async (req, res) => {
  let { id } = req.params;
  let profile = await Profile.findById(id);
  return res.send(profile);
});

//Aumenta Likes
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

//Reportes
router.put("/increaseReports/:id", async (req, res) => {
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

//Busqueda por institucion
router.post("/getUsersByInstitution", async (req, res) => {
  let { institution } = req.body;

  let filteredUsers = await Profile.find({
    insitution: institution,
  });

  res.send(filteredUsers);
});


router.post("/logMedia", async (req, res) => {
  const { name, email, img, status } = req.body;
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
        status: status
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
