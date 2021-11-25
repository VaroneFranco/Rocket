const { Router, application } = require('express')
const Profile = require('../models/Profiles')
// const Institution = require("../models/Institution")
const { postInstitution } = require('../routes/utils')
const { shuffle } = require('../routes/utils')
const { asignTable } = require('../routes/utils')
const jwt = require('jsonwebtoken')
//funcion de encriptado
const { encrypt } = require('./utils')

const router = Router()

//ruta para cambios de perfil de user, si algo no se cambia, permanece el anterior :)
router.put('/user/changes', async (req, res) => {
  const { id, new_country, new_name, new_email, new_img } = req.body
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
      if (result) return res.send(await Profile.findOne({ _id: id }))
      if (err) return res.send('user id invalid :S')
    }
  )
})

router.get('/getProfiles', async (req, res) => {
  var usuario = await Profile.find()
  res.send(usuario)
})

//Ruta provisoria para que el front pruebe los sign up de usuarios
router.post('/signup', async (req, res) => {
  try {
    const password = req.body.password
    // const crypted = await encrypt(password);

    const crypted = encrypt(password)

    var newProfile = await new Profile({
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
      institution: req.body.institution,
      password: crypted,
    })
    newProfile.save()
    res.send(newProfile)
  } catch (err) {
    console.log(
      'Los campos requeridos son name, password, email, country, institución'
    )
  }
})

//Ruta provisoria para que validen sign in de usuarios
router.post('/isLog', async (req, res) => {
  const { token } = req.body
  var user = jwt.verify(token, 'secret')
  if (user) {
    var userDb = await Profile.findById(user.id).lean()
    return res.send(userDb)
  } else return res.send(false)
})

router.post('/signin', async (req, res) => {
  let { email, password } = req.body

  let profile = await Profile.findOne({ email: email })

  if (encrypt(password) == profile.password) {
    const token = jwt.sign(
      {
        id: profile._id,
      },
      'secret'
    )
    return res.json({ token: token })
  } else {
    res.send('Access Denied')
  }
})

router.post('/signInstitution', async (req, res) => {
  if (!req.body.name) {
    res.status(404).send('The name of Institution is required')
  }

  try {
    const newInstitutionResponse = await postInstitution(req.body)
    res.status(200).send(newInstitutionResponse)
  } catch (error) {
    throw new Error(error)
  }
})

const tables = []
router.get('/asignTable', async (req, res) => {
  var users = await Profile.find()
  shuffle(users)
  asignTable(users)
  res.send(users)
})

router.get('/searchProfiles', async (req, res) => {
  let name = req.body.name
  let profiles = await Profile.find({
    name: { $regex: new RegExp('.*' + name + '.*', 'i') },
  })
  return res.send(profiles)
})

router.get('/searchProfileID', async (req, res) => {
  let { id } = req.body
  let profile = await Profile.findById(id)
  return res.send(profile)
})

module.exports = router
