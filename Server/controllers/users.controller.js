const UsersService = require("../services/users.service")

class UsersController {

  constructor() {
    this.usersService = new UsersService()
    this.register = this.register.bind(this)
    this.consult = this.consult.bind(this)
  }

  async register(req, res) {

    const { email, name, number, date } = req.body;

    if (!date || !email || !name || !number) {
      res.status(400).send("a")
      return
    }

    const userRegistered = await this.usersService.register(req.body);

    if (!userRegistered.success) {
      res.status(500).json(userRegistered)
      return
    }

    res.status(201).json(userRegistered)
  }

  async consult(req, res) {
    const { email } = req.params

    if (!email) {
      res.status(400).end()
      return
    }

    const userConsult = await this.usersService.consult(email);

    if (!userConsult.success) {
      res.status(404).json(userConsult)
      return
    }

    res.status(200).json(userConsult)
  }
}

module.exports = UsersController