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
  },
  { collection: "institution" }
);

const Institution = mongoose.model("Institution", InstitutionSchema);

module.exports = Institution;
