// CRUD

const mongodb = require('mongodb')
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'workloads'

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne(
    //   {
    //     _id: id,
    //     name: 'Jason',
    //     age: 23,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user!')
    //     }

    //     console.log(result.ops)
    //   }
    // )

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Paul',
    //       age: 28,
    //     },
    //     {
    //       name: 'Luna',
    //       age: 25,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    //   }
    // )

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'dummy task 1',
    //       completed: false,
    //     },
    //     {
    //       description: 'dummy task 2',
    //       completed: true,
    //     },
    //     {
    //       description: 'dummy task 3',
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    //   }
    // )
    // db.collection('users').findOne(
    //   { _id: new ObjectID('61a03f22c3b73b18f8b1112a') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    //   }
    // )

    // db.collection('users')
    //   .find({ age: 28 })
    //   .count((error, count) => {
    //     // .toArray(error, users)
    //     if (error) {
    //       return console.log('Unable to fetch')
    //     }
    //     console.log(count)
    //   })

    // db.collection('tasks')
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log('Unable to fetch task')
    //     }

    //     console.log(tasks)
    //   })
    // db.collection('users').updateOne(
    //   {
    //     _id: new ObjectID('61a02fe23b88ec1adcdf8485'),
    //   },
    //   {
    //     $set: {
    //       name: 'Mason',
    //     },
    //   }
    // ).then((result) => {
    //     console.log(result)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

    // db.collection('tasks')
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

    // db.collection('users')
    //   .deleteMany({
    //     age: 28,
    //   })
    //   .then((result) => {
    //     console.log(result)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

    db.collection('tasks')
      .deleteOne({
        completed: true,
      })
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }
)
