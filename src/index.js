const config = require('config')
const Koop = require('@koopjs/koop-core')
const routes = require('./routes')
const plugins = require('./plugins')
require('dotenv').config()
// initiate a koop app
const koop = new Koop({
  'ghtoken': process.env.GITHUB_KEY
})
console.log(plugins)
// register koop plugins
plugins.forEach((plugin) => {
  koop.register(plugin.instance, plugin?.options)
})

// add additional routes
routes.forEach((route) => {
  route.methods.forEach((method) => {
    koop.server[method](route.path, route.handler)
  })
})
const port = process.env.PORT || config.port
// start the server
koop.server.listen(port, () => koop.log.info(`Koop server listening at ${port}`))
