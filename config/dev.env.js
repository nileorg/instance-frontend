'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const config = require('../config')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: config.dev.BASE_API,
})
