const viewHandler = require('./settings/plop/view')
const apiHandler = require('./settings/plop/api')
const componentHandler = require('./settings/plop/component')


module.exports = plop => {
    // create view from template
    plop.setGenerator('view', viewHandler)
    // create component from template
    plop.setGenerator('component', componentHandler)
    // create api from template
    plop.setGenerator('api', apiHandler)
}