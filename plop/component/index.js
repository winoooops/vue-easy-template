module.exports = {
    description: 'generate a component',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Please enter component name: ',
            default: null,
        },
        // {
        //     type: 'list',
        //     name: 'props',
        //     message: 'Please list properties',
        //     default: null
        // }
    ],
    actions: data => {
        const { name } = data
        const actions = []
        actions.push({
            type: 'add',
            path: `./src/components/${name}/index.vue`,
            templateFile: './settings/plop/component/component-template.hbs',
            // data: {
            //     props
            // }
        })
        actions.push({
            type: 'add',
            path: `./src/components/${name}/index.js`,
            templateFile: './settings/plop/component/component-use.hbs',
            data: {
                name
            }
        })
        actions.push({
            type: 'append',
            path: './src/main.js',
            pattern: "import App from 'app'",
            templateFile: './settings/plop/component/component-main.hbs',
        })
        return actions
    }
}