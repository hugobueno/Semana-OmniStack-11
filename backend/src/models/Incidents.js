const mongoose = require('../database/conection')

const InsidenteSchema =  mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
       
    },
    value:{
        type: Number,
        required: true
    },
    idong:{
        type: String,
        required: true
    },
    creatAt:{
        type: Date,
        defaut: Date.now
    },

})

const Insident = mongoose.model('Insident', InsidenteSchema )
module.exports = Insident