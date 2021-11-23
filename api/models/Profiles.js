const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProfileSchema = new Schema({
    name: {
        type: String,
        required: true
    }

}, {collection: "profiles"});
const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;