const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstitutionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    groups: {
      type: [String],
      default: [],
    },
    users: {
      type: [],
      default: [],
    },
    country: {
      type: String
    },
    img: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmr_FKgCoFkoxhbzHlwhmLBpIKvkAepBMEjQ&usqp=CAU",
    },
    status: {
      type: String,
      enum: ["Online", "Offline", "Available", "Busy", "Slepping..."],
      default: "Offline",
    },

  },
  { collection: "institution" }
);

const Institution = mongoose.model("Institution", InstitutionSchema);

module.exports = Institution;
