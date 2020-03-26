const mongoose = require('mongoose')
const Insident = require('../models/Incidents')
const Ong = require('../models/Ong')



module.exports = {
    async index (req, res){
        const {page = 1} =  req.query
        const buscar = await Insident.aggregate([
            {
              $lookup:
                {
                  from: "ongs",
                  localField: "idong",
                  foreignField: "idong",
                  as: "pedidos_realizados"
                }
           }
        ]).limit(5).skip((page-1) * 5)
        if(buscar){
            return res.json(buscar)
         }
       
    },
    async create(req, res) {
        const { title, description, value } = req.body
        const idong = req.headers.autorization

        const cadastro = await Insident.create({ title, description, value, idong })
            .then(((cadatrado) => {
                return res.json(cadatrado._id)
            }))
            .catch((error) => {
                console.log("erro no cadastro" + error)
            })

    },
    async delete(req, res) {
        try {
            const { id } = req.params
            const idong = req.headers.autorization
            const buscar = await Insident.findById({ _id: id });

            if (buscar.ongId != idong) {
                res.status(401).send({ error: "Operacao nao permitida" })
            } else {
                await Insident.findOneAndDelete({ _id: id })
                return res.status(204).send()

            }
            

        } catch (error) {
            console.log("error no processamento" + error)

        }




    }
}