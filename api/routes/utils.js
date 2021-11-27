//librería para encriptación

const CryptoJS = require('crypto-js')
const Institution = require('../models/Institution')
const Profile = require('../models/Profiles')

//usarlo en el create del usuario, pasarle su pass de body
//y en el log in para chequear el mismo con lo que ya estará en db del user
const encrypt = (pass) => {
  var crypted = CryptoJS.SHA3(pass, { outputLength: 224 })
  crypted = crypted.toString()
  return crypted
}

// Nueva institucion
async function postInstitution({ name, email, password }) {
  try {
    const crypted = encrypt(password)
    console.log(name)
    // let userOfInstitution = await Profile.find({ institution: name });

    let newInstitution = await new Institution({
      name,
      email,
      password: crypted,
      // users: userOfInstitution,
    })
    newInstitution.save()

    return newInstitution
  } catch (error) {
    throw new Error(error)
  }
}

//Mesas y asignacion de usuarios
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

// Asigna numero de mesa al usuario y lo actualiza en la db

async function asignTable(users) {
  var contador = 0
  let numTable = 1
  for (let i = 0; i < users.length; i++) {
    await Profile.findOneAndUpdate(
      { _id: users[i]._id },
      {
        $set: {
          table: numTable,
        },
        new: true,
      }
    )
    contador++
    let mostrar = await Profile.findById(users[i]._id) //No estamos seguros si hace algo pero por las dudas
    if (contador == 4) {
      contador = 0
      numTable++
      let mostrar = await Profile.findById(users[i]._id) //No estamos seguros si hace algo pero por las dudas
    }
  }
}

module.exports = {
  encrypt,
  postInstitution,
  shuffle,
  asignTable,
}
