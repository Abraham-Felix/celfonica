const { environment } = require('@rails/webpacker')
const coffee =  require('./loaders/coffee')
const vue = require('./loaders/vue')


environment.loaders.prepend('coffee', coffee)
environment.loaders.prepend('vue', vue)


module.exports = environment
