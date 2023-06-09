const mongoose = require('mongoose')


mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
    
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const tipSchema = new mongoose.Schema({
    header: String,
    content: String
       
})

tipSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
    }
})

module.exports = mongoose.model('Tip', tipSchema, 'tips')  