import viewHandler from './settings/plop/view'
import apiHandler from './settings/plop/api'
import componentHandler from './settings/plop/component'
import storeHandler from './settings/plop/store'

module.exports = (plop) => {
  // create view from template
  plop.setGenerator('view', viewHandler);
  // create component from template
  plop.setGenerator('component', componentHandler);
  // create api from template
  plop.setGenerator('api', apiHandler);
  // create store from template
  plop.setGenerator('store', storeHandler);
};
