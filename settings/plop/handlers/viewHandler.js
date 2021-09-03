module.exports = {
    description: 'generate a view',
    prompts: [
        {
            type: 'input',
            name: 'src',
            message: 'Please enter fileRepo(views/xxx): ',
            default: null,
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter filename: ',
            default: null,
        },
        {
            type: 'input',
            name: 'apiSrc',
            message: 'Please enter apiRepo(api/xxx): ',
            default: null,
        },
        {
            type: 'input',
            name: 'apiName',
            message: 'Please enter apiName: ',
            default: null,
        }
    ],
    actions: data => {
        const { src, name, apiSrc, apiName } = data
        const actions = []
        actions.push({
            type: 'add',
            path: `./src/views/${src}/${name}.vue`,
            templateFile: './settings/plop/templates/view-template.hbs',
            data: {
                name,
                api: `@/src/api/${apiSrc}/${apiName}.js`
            }
        })

        return actions
    },
}