const Profile = require("../models/Profiles");
const { encrypt } = require("./utils");

var name = ["Micael", "Sebastian", "Franco","Guillermo","Liam","Nicolas","Lionel","Lautaro","Marcos"];
var lastName = ["Gomez", "Anea", "Gonzalez","Álvarez", "Bermúdez", "Riquelme", "Domínguez", "Gutiérrez "];
var country = ["Argentina", "Brasil", "Estados Unidos", "Chile", "Peru", "Paraguay","Venezuela"];
var institution = "Henry";

async function generateProfile(num) {

    for( i = 0; i < num; i++) {

          rand_name = Math.floor(Math.random() * name.length)
          rand_lastName = Math.floor(Math.random() * lastName.length);
          rand_country = Math.floor(Math.random() * country.length);
      
          var newProfile = await new Profile({
            name: name[rand_name] + " " + lastName[rand_lastName],
            email: name[rand_name] + lastName[rand_lastName] + "@gmail.com",
            country: country[rand_country],
            institution: institution,
            password: encrypt(name[rand_name]),
          });
          newProfile.save();
          console.log(newProfile);
    }

}

module.exports = {
  generateProfile,
};
