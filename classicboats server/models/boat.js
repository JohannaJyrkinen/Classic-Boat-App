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

const boatSchema = new mongoose.Schema({
    name: String,
    type: String,
    designer: String,
    loa: String,
    beam: String,
    draft: String,
    displacement: String,
    sailarea: String,
    year: Number,
    lwl: String,
    subtype: String,
    imgurl: String,
    description: String
       
})

boatSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
    }
})

module.exports = mongoose.model('Boat', boatSchema, 'boats')  