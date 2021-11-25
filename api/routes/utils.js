//librería para encriptación
const CryptoJS = require('crypto-js')
const Institution = require('../models/Institution')

//usarlo en el create del usuario, pasarle su pass de body
//y en el log in para chequear el mismo con lo que ya estará en db del user
const encrypt = (pass) => {

    var crypted = CryptoJS.SHA3(pass,{outputLength: 224});
    crypted = crypted.toString();
    return crypted;

}
//Post nueva institucion
async function postInstitution({ name }) {
  try {
    let newInstitution = await new Institution({
      name,
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

function asignTable(users) {
  let contador = 0
  let numTable = 1
  for (let i = 0; i < users.length; i++) {
    if (contador < 5) {
      users[i].table = numTable
      contador++
    } else {
      numTable++
      users[i].table = numTable
      contador = 1
    }
  }
}

module.exports = {
  encrypt,
  postInstitution,
  shuffle,
  asignTable,
}
