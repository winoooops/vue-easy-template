const viewHandler = require('./plop/view')
const apiHandler = require('./plop/api')
const componentHandler = require('./plop/component')
const storeHandler = require('./plop/store')

module.exports = (plop) => {
  // create view =require template
  plop.setGenerator('view', viewHandler);
  // create component =require template
  plop.setGenerator('component', componentHandler);
  // create api =require template
  plop.setGenerator('api', apiHandler);
  // create store =require template
  plop.setGenerator('store', storeHandler);
};
