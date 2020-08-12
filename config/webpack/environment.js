const { environment } = require('@rails/webpacker')
const coffee =  require('./loaders/coffee')
const vue = require('./loaders/vue')
const css = require('./loaders/css')

environment.loaders.prepend('coffee', coffee)
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('css', css)

module.exports = environment
