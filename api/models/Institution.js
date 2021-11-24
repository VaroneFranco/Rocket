const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const InstitutionSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    groups:{
        type:[String],
        default:[]
    },
    users:{
        type:[String],
        default:[]
    },
}, {collection: "institution"});


const Institution = mongoose.model("Institution", InstitutionSchema);

module.exports = Institution;