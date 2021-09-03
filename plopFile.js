const viewHandler = require('./settings/plop/handlers/viewHandler.js')
// const apiHandler = require('./settings/plop/handlers/apiHandler.js')
const componentHandler = require('./settings/plop/handlers/componentHandler.js')


module.exports = plop => {
    // create view from template
    plop.setGenerator('view', viewHandler)
    // create component from template
    plop.setGenerator('component', componentHandler)
    // create api from template
    // plop.setGenerator('api', apiHandler)
}