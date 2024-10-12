const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')
const Items = require('./Items/Items-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/items', Items)

module.exports = server
