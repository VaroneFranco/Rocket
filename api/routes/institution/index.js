const { Router } = require("express");
const router = Router();
const Institution = require("../../models/Institution")
const {postInstitution} = require("./utils")
const {encrypt} = require("../users/utils")
const jwt = require("jsonwebtoken");
const cache = require('../routeCache')

router.post("/signUp", async (req, res) => {
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


  router.post("/signIn", async (req, res) => {
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


//Validacion isLog
router.post("/isLog", async (req, res) => {
  const { token } = req.body;
  var user = jwt.verify(token, "secret");
  if (user) {
    var institutionDb = await Institution.findById(user.id).lean();
    console.log(institutionDb)
    return res.send(institutionDb);
  } else return res.send(false);
});

router.post("/logMedia", async (req, res) => {
  const { name, email, img, status } = req.body;
  let exist = await Institution.findOne({ email: email });
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
      var newInstitution = await new Institution({
        name: name,
        email: email,
        img: img,
        country: "Rocket Country",
        status: status
      });
      newInstitution.save();
      const token = jwt.sign(
        {
          id: newInstitution._id,
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