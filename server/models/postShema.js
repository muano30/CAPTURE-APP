const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    firstname: {
        type: String,
       require: true
    },
    lastname:{
        type: String,
        requre: true
    },

    dateofbirth:{
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