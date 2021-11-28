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
      // required: false,
    },
    status: {
      type: String,
      enum: ["Online", "Offline", "Available", "Busy", "Slepping..."],
      default: "Offline",
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
      default: "Planet Rocket",
    },
    institution: {
      type: String,
      /*  required: true */
      default: "Henry",
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
    img: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmr_FKgCoFkoxhbzHlwhmLBpIKvkAepBMEjQ&usqp=CAU",
    },
    meetLink: String,
    table: {
      type: Number,
      default: 0,
    },
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
    enhableContact: {
      type: Boolean,
      default: true,
    },
  },

  { collection: "profiles" }
);

ProfileSchema.methods.scores = function () {
  let puntajes = mongoose.model;
};

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
