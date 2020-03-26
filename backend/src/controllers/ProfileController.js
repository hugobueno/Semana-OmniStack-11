const mongoose = require('mongoose')
const Ong = require('../models/Ong')
const Insident = require('../models/Incidents')


module.exports = {
    async index(req, res) {
        try {
            const idong = req.headers.autorization
            const buscarInsident = await Insident.find({ idong: idong })
            res.json(buscarInsident)
        } catch (error) {
            res.status(401).send({Error: error})

        }
    }

}