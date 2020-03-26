const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/projetoongs', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then((connect)=>{
    console.log(`User Connect success to database ` )
})
.catch((error)=>{
    console.log(`Error to connection database ${error}`)
})  

module.exports = mongoose