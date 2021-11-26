const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    moderator: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    institution: {
      type: String,
      /*  required: true */
    },
    score: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
    img: String,
    meetLink: String,
    table: Number,
    group: Number,
    about: {
      type: String,
      default: "",
    },
    presences: {
      type: Number,
      default: 0,
    },
    reports: {
      type: Number,
      default: 0,
    },
  },

  { collection: "profiles" }
);

// ProfileSchema.methods.increaseScore = function () {
//   let puntajes = mongoose.model;
// };

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
