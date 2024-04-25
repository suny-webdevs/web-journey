const express = require("express")
const app = express()
const cors = require("cors")
const phones = require("./phones.json")
const port = 3000 || 5000

app.use(cors())

app.get("/", (req, res) => {
  res.send("welcome to my first server")
})

app.get("/phones", (req, res) => {
  res.send(phones)
})

app.get("/phone/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const phone = phones.find((phone) => phone.id === id) || {}
  res.send(phone)
})

app.listen(port, () => {
  console.log(`My server is running on http://localhost:${port}`)
})
