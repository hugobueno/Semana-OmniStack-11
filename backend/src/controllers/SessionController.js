const Ong = require('../models/Ong')


module.exports = {
    async create(req, res) {
        try {
            const { id } = req.body
            const buscar = await Ong.findOne({ idong: id }, {name:1}).limit(1)
            if(!buscar){
                res.status(400).send({Error: "Id não ixistente"})
            }else{
                res.json(buscar)
            }



        } catch (error) {
            res.status(401).send({Error:error })

        }

    }
}