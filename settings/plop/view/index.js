const readFileList = require('../../../src/utils/readFileList')

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
            type: 'checkbox',
            name: 'componentList',
            message: 'please choose component',
            choices: readFileList('./src/components'),
            default: [],
        },
        {
            type: 'checkbox',
            name: 'apiList',
            message: 'please choose api',
            choices: readFileList('./src/api', true),
            default: [],
        },
    ],
    actions: data => {
        const { src, name, componentList, apiList } = data
        const actions = []
        actions.push({
            type: 'add',
            path: `./src/views/${src}/${name}.vue`,
            templateFile: './settings/plop/view/view-template.hbs',
            data: {
                name,
                componentList,
                apiList,
            }
        })

        return actions
    },
}