'use strict'

const component = require('@nx-js/core')
const middlewares = require('../middlewares')

module.exports = function router (config) {
  config = Object.assign({state: false}, config)

  return component(config)
    .use(middlewares.route)
}
