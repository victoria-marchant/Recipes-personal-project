const path = require('path')
const express = require('express')

const Recipes = require('./routes/Recipes')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/recipes', Recipes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
