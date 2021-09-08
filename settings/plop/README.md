# Generate Business File

## Plop Generator 
use [Plop](https://www.npmjs.com/package/plop) to generate files from template



1. install dependency: `install plop`
2. create `plopFile.js`
```javascript
const viewHandler = require('./settings/plop/handlers/viewHandler.js')
const apiHandler = require('./settings/plop/handlers/apiHandler.js')
const componentHandler = require('./settings/plop/handlers/componentHandler.js')


module.exports = plop => {
    // create view from template
    plop.setGenerator('view', viewHandler)
    // create component from template
    plop.setGenerator('component', componentHandler)
    // create api from template
    plop.setGenerator('api', apiHandler)
}
``` 

## Generate a Component
### handler
```javascript
module.exports = {
    description: 'generate a component',
    // user prompt terminal
    prompts: [
        {
            type: 'input',
            name: 'name', // property that could be used in templates
            message: 'Please enter component name: ',
            default: null,
        },
    ],

    actions: data => {
        const { name } = data
        const actions = []
        // insturctions for plop
        actions.push({
            type: 'add',
            path: `./src/components/${name}/index.vue`,
            templateFile: './settings/plop/templates/component-template.hbs',
            data: {
                name,
            }
        })
        actions.push({
            type: 'add',
            path: `./src/components/${name}/index.js`,
            templateFile: './settings/plop/templates/component-use.hbs',
            data: {
                name
            }
        })
        actions.push({
            type: 'append',
            path: './src/main.js',
            pattern: "import App from 'app'",
            templateFile: './settings/plop/templates/component-main.hbs',
        })
        return actions
    }
}

```

### template 
Use *handlerbars* to create templates




## Generate a View
```javascript

```
