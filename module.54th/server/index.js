const express = require("express")
const app = express()

const cors = require("cors")

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const user = [
  { id: 1, name: "Sohan", email: "sohan@gmail.com" },
  { id: 2, name: "Forhad", email: "forhad@gmail.com" },
  { id: 3, name: "Rahamat", email: "rahamat@gmail.com" },
]

app.get("/", (req, res) => {
  res.send("Welcome to my server")
})

app.get("/users", (req, res) => {
  res.send(user)
})

app.post("/users", (req, res) => {
  console.log("server post response")
  console.log(req.body)
  const newUser = req.body
  newUser.id = user.length + 1
  user.push(newUser)
  res.send(newUser)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
