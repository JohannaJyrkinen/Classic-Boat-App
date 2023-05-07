const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()



const Boat = require('./models/boat')
const Tip = require('./models/tip')

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }
  
const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    }
    next(error)
}

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(requestLogger)


app.get('/api/boats', (request, response) => {
    Boat.find({}).then(boats => {
      response.json(boats)
  
    })  
})

app.get('/api/boats/:id', (request, response, next) => {
    Boat.findById(request.params.id)
      .then(boat => {
        if (boat) {
          response.json(boat)
        } else {
        response.status(404).end()
        }
        })
      .catch(error => next(error))
})

app.get('/api/tips', (request, response) => {
    Tip.find({}).then(tips => {
        response.json(tips);
    })
});

app.get('/api/tips/:id', (request, response, next) => {
    Tip.findById(request.params.id)
        .then(tip => {
            if (tip) {
                response.json(tip);
            } else {
                response.status(404).end();
            }
        })
        .catch(error => next(error));
});


app.use(errorHandler)

const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})