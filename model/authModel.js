const mongoose = require('mongoose');

const Auth = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    city: {
         type: String,
        required: true,
        trim: true,
        unique:true
    },
    block:{
        type:Boolean,
        default:true
          
    },
    report:{
        type:Boolean,
        default:true
          
    },
    password: {
         type: String,
        required: true,
        trim: true
    },
  

}, {
    collection: "users",
    timestamps: true
})

module.exports = mongoose.model("Auth", Auth)