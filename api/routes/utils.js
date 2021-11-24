

//usarlo en el create del usuario, pasarle su pass de body
export function encrypt(pass) {
    var crypted = CryptoJS.AES.encrypt(pass, KEY_HASH);
    crypted = crypted.toString();
    return crypted;
  }
  
  
  //usarlo en el log in del usuario, pasarle el pass crypto de la base de datos de ese usuario
  export function decrypt(crypted) {
    var decrypted = CryptoJS.AES.decrypt(crypted, KEY_HASH);
    decrypted = decrypted.toString(CryptoJS.enc.Utf8);
    return decrypted
  }