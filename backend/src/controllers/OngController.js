const mongoose = require('mongoose')
const crypto = require('crypto')
const Ong = require('../models/Ong')


module.exports = {
    async index(req, res) {
        const buscar = await Ong.find({})
            .then((buscados) => {
                return res.json(buscados)
            })
            .catch((error) => {
                res.status(401).send({ error: `Existe um erro ${error}` })
            })

    },
    async create(req, res) {
        const idong = crypto.randomBytes(4).toString('HEX')
        const { name, email, whatsapp, city, uf } = req.body
        const busca = await Ong.find({ email: email })
        console.log(busca)
        if (busca.length > 0) {
            res.status(401).send({ Error: "Email ja cadastrado" })
        } else {
            const cadastro = await Ong.create({
                idong, name, email, whatsapp, city, uf
            })
                .then(((cadatrado) => {
                    return res.json({ idong })
                }))
                .catch((error) => {
                    console.log("erro no cadastro" + error)
                })
        }


    },


}