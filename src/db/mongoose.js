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
    trim: true,
    lowercase: true,
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
        throw new Error('Age must be a number.')
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('password is invalid')
      }
    }
  }
})

// const me = new User({
//   name: 'Roxy',
//   email: 'Elianacruz@ec.com',
//   password: 'passmake#',
//   age: 25,
// })

// me.save()
//   .then((me) => {
//     console.log(me)
//   })
//   .catch((error) => {
//     console.log('Error!', error)
//   })

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const task = new Task({
  description: 'Salvation is near'
})

task.save().then((task) => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})
