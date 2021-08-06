require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())

server.get('/api/users', (req, res) => {
  res.json({
    message: 'LIST OF USERS HERE'
  })
})

server.post('/api/register', (req, res) => {
  res.json({
    message: 'Successfully created User! ...just kidding.'
  })
})

server.post('/api/login', (req, res) => {
  res.json({
    message: `Logged in! (Don't tell me you fell for that again...)`
  })
})

server.use('*', (req, res, next) => {
  res.json({
    message: 'If all else fails, you will see this message!'
  })
})

module.exports = server