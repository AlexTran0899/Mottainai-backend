const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const Items = require('./items/Items-router')
const Merchants = require('./merchants/merchants-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/items', Items)
server.use('/api/merchants', Merchants)


server.use((err, req, res, next) => {
    res?.status(500).json({
        message: err?.message,
        stack: err?.stack
    })
})

module.exports = server
