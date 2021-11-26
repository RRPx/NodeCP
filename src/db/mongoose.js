const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a number')
      }
    },
  },
})

const me = new User({
  name: 'Roxy',
  email: 'Elianacruz@ec.com',
  age: 25,
})

me.save()
  .then((me) => {
    console.log(me)
  })
  .catch((error) => {
    console.log('Error!', error)
  })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Number
//     }
// })

// const task = new Task({
//     description: 'From the ashes',
//     completed: true
// })

// task.save().then((task) => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })
