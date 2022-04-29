const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    firstName: {
        type: String,
       require: true
    },
    lastName:{
        type: String,
        requre: true
    },

    dateOfBirth:{
        type: String,
        requre: true
    },   
     grade:{
        type: Number,
        requre: true
    },

    date:{
    type: Date,
    default: Date.now
    }
})

module.exports = mongoose.model('post', postSchema)