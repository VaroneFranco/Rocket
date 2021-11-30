const Institution = require("../../models/Institution");
const {encrypt} = require ("../users/utils")

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


  module.exports = {
      postInstitution
  }