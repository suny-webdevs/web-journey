const express = require("express")
const cors = require("cors")
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome to module 56 server")
})

const uri = process.env.DB_URI

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect()

    const coffeeCollection = client.db("coffeeDB").collection("coffee")

    app.get("/coffees", async (req, res) => {
      const coffees = await coffeeCollection.find().toArray()
      res.send(coffees)
    })

    app.get("/coffee/:id", async (req, res) => {
      const id = req.params.id
      const coffee = { _id: new ObjectId(id) }
      const getCoffee = await coffeeCollection.findOne(coffee)
      res.send(getCoffee)
    })

    app.post("/coffee", async (req, res) => {
      const coffee = req.body
      const addCoffee = await coffeeCollection.insertOne(coffee)
      res.send(addCoffee)
    })

    app.put("/coffee/:id", async (req, res) => {
      const id = req.params.id
      const coffee = req.body
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true }
      const updatedCoffee = {
        $set: {
          name: coffee.name,
          chef: coffee.chef,
          supplier: coffee.supplier,
          taste: coffee.taste,
          category: coffee.category,
          details: coffee.details,
          photo: coffee.photo,
          price: coffee.price,
        },
      }
      const putCoffee = await coffeeCollection.updateOne(
        filter,
        updatedCoffee,
        options
      )
      res.send(putCoffee)
    })

    app.delete("/coffee/:id", async (req, res) => {
      const id = req.params.id
      const coffee = { _id: new ObjectId(id) }
      const deleteCoffee = await coffeeCollection.deleteOne(coffee)
      res.send(deleteCoffee)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 })
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    )
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close()
  }
}
run().catch(console.dir)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
