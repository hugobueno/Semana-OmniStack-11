const mongoose = require('../database/conection')

const OngSchema =  mongoose.Schema({
    idong:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    whatsapp:{
        type: Number,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    uf:{
        type: String,
        required: true
    },

})

const Ong = mongoose.model('Ong',OngSchema )
module.exports = Ong