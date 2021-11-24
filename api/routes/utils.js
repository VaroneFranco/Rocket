//librería para encriptación
const CryptoJS = require("crypto-js");
// enviroment key
const { KEY_HASH } = process.env;


const encryptation = {

    //usarlo en el create del usuario, pasarle su pass de body
    //y en el log in para chequear el mismo con lo que ya estará en db del user
    encrypt: function (pass) {
        var crypted = CryptoJS.SHA3(pass, KEY_HASH);
        crypted = crypted.toString();
        return crypted;
    },

}

module.exports = encryptation
