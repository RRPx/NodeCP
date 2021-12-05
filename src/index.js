const express = require("express")
require("./db/mongoose")
const User = require("./models/user")
const Task = require("./models/task")

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())

//-----------------------------Users part
app.post("/users", (req, res) => {
  const user = new User(req.body)

  user
    .save()
    .then(() => {
      res.send(user)
    })
    .catch((e) => {
      res.status(400).send(e.message)
    })
})

//-----------------------------Tasks part
app.post("/tasks", (req, res) => {
  const task = new Task(req.body)

  task
    .save()
    .then(() => {
      res.status(201).send(task)
    })
    .catch((e) => {
      res.status(400).send(e.message)
    })
})

app.listen(port, () => {
  console.log(`Server is on at ${port}.`)
})
