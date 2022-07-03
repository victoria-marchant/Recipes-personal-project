const path = require('path')
const express = require('express')

const Recipes = require('./routes/Recipes')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/recipes', Recipes)

// server.get('/greeting', (req, res) => {
//   const greetings = ['hola', 'hi', 'hello', 'howdy']
//   let index = Math.floor(Math.random() * greetings.length)
//   console.log(index)
//   res.json({ greeting: greetings[index] })
// })

// server.get('/', (req, res) => {})

module.exports = server
