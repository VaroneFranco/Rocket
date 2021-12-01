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

  module.exports = router;