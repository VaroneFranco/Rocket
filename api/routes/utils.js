//librería para encriptación
const CryptoJS = require("crypto-js");
const Institution = require("../models/Institution");
// enviroment key
const { KEY_HASH } = process.env;


  //usarlo en el create del usuario, pasarle su pass de body
  //y en el log in para chequear el mismo con lo que ya estará en db del user
const encrypt = (pass) => {
    var crypted = CryptoJS.SHA3(pass, KEY_HASH);
    crypted = crypted.toString();
    return crypted;
}
//Post nueva institucion
async function postInstitution({ name }) {
  try {
    let newInstitution = await new Institution({
      name,
    });
    newInstitution.save();

    return newInstitution;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  encrypt,
  postInstitution,
};
