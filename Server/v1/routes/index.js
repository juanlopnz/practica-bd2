const express = require("express");
const UsersController = require("../../controllers/users.controller")


const router = express.Router()

const usersController = new UsersController()

router.route("/users").post(usersController.register)

router.route("/users/:email").get(usersController.consult)

module.exports = router
