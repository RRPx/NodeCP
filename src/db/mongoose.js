const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
})

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   },
// })

// const me = new User({
//   name: 'Andrew',
//   age: 'Mike',
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
        type: String
    },
    completed: {
        type: Number 
    }
})

const task = new Task({
    description: 'From the ashes',
    completed: true
})

task.save().then((task) => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})