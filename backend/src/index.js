const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const Cadastro = require('./routes/CadastroRouter')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', Cadastro)


app.listen(PORT, ()=>{
    console.log(`Server on port: ${PORT}`)
})


