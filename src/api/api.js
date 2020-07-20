const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.json({ message: 'ok' })
})

app.get('/todos', (request, response) => {
    const todos = [
        { id: 1, name: 'clean up', status: 'open' },
        { id: 1, name: 'cook', status: 'done' }
    ]
    response.json({ data: todos })
})


app.get('/todos/:todo', (request, response) => {
    response.json({ id: 1, name: 'clean up', status: 'open' })
})

module.exports = app
