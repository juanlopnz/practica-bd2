const express = require("express");
const dotenv = require("dotenv");

const router = require("./v1/routes")

const app = express();
const cors = require('cors')

app.use(cors())


dotenv.config()

// const md = (req, res, next) => {
//   res.send("Hola x2")
//   next()
// }

// app.use(md)

app.use(express.json())

app.use("/api", router)

app.get("/", (req, res) => {
  res.send('setiao')
})

app.listen(process.env.PORT, () => { console.log(`Listening on http://localhost:4001`) })