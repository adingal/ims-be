const express = require('express')
const morgan = require('morgan')

const loadboardRouter = require('./routes/loadboardRoutes')

const app = express()

// Logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Routes
app.use('/api/v1/loadboards', loadboardRouter)

module.exports = app
