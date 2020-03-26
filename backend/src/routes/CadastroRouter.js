const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const crypto = require('crypto')
const OngController = require("../controllers/OngController")
const InsidentController = require("../controllers/InsidentController")
const ProfileController = require("../controllers/ProfileController")
const SessionController = require("../controllers/SessionController")

router.post('/sessions', SessionController.create )

router.post("/ongs", OngController.create)
router.get('/ongs', OngController.index )
router.get('/profile', ProfileController.index )

router.get("/insidents", InsidentController.index )
router.post("/insidents", InsidentController.create )
router.delete("/insidents/:id", InsidentController.delete )


module.exports = router