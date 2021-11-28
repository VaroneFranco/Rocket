const Profile = require("../models/Profiles");
const { encrypt } = require("./utils");

var name = ["Micael", "Sebastian", "Franco","Guillermo","Liam","Nicolas","Lionel","Lautaro","Marcos"];
var lastName = ["Gomez", "Anea", "Gonzalez","Álvarez", "Bermúdez", "Riquelme", "Domínguez", "Gutiérrez "];
var country = ["Argentina", "Brasil", "Estados Unidos", "Chile", "Peru", "Paraguay","Venezuela"];
var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmr_FKgCoFkoxhbzHlwhmLBpIKvkAepBMEjQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6w-f7q77f6ntbx0OKZCZBPDEmhqm-5NGU2g&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ddwT9XSpbzDvua0Kmepfg4AfB0eQ69Tkqw&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76pMRAFsmQZgWsRxEGZa01nNa5q8zJbQooQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqnm4Ave2S3J4OLGaSrxNk5LKUqu5U1SG3Q&usqp=CAU"]
var institution = "Henry";

async function generateProfile(num) {

    for( i = 0; i < num; i++) {

          rand_name = Math.floor(Math.random() * name.length)
          rand_lastName = Math.floor(Math.random() * lastName.length);
          rand_country = Math.floor(Math.random() * country.length);
          rand_image = Math.floor(Math.random() * images.length);
      
          var newProfile = await new Profile({
            name: name[rand_name] + " " + lastName[rand_lastName],
            email: name[rand_name] + lastName[rand_lastName] + "@gmail.com",
            country: country[rand_country],
            institution: institution,
            password: encrypt(name[rand_name]),
            img: images[rand_image]
          });
          newProfile.save();
          console.log(newProfile);
    }

}

module.exports = {
  generateProfile,
};
