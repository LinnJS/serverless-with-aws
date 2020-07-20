const express = require('express')
const http = require('serverless-http')

const app = express()

app.get('/', (request, response) => {
  response.json({
    message: 'ok'
  })
})

module.exports.handler = http(app)
