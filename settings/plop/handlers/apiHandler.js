module.exports = {
    description: 'generate an api file',
    prompts: [
        {
            type: 'input',
            name: 'src',
            message: 'Please enter apiRepo(api/xxx): ',
            default: null,
        },
        {
            type: 'input',
            name: 'fileName',
            message: 'Please enter fileName: ',
            default: null,
        },
        {
            type: 'input',
            name: 'apiName',
            message: 'Please enter apiName: ',
            default: null,
        },
        {
            type: 'input',
            name: 'method',
            message: 'Please choose request method: ',
            choices: ['GET', 'POST', "PUT", "DELETE"],
        }
        // {
        //     type: 'input',
        //     name: 'url',
        //     message: 'Please enter api url',
        //     default: null,
        // },
        // {
        //     type: 'input',
        //     name: 'method',
        //     message: 'Please enter request method',
        //     default: 'GET',
        // },
    ],
    actions: data => {
        const { src, fileName, apiName, method } = data
        const actions = []
        actions.push({
            type: 'add',
            path: `./src/api/${src}/${fileName}.js`,
            template: './settings/plop/templates/api-template.js',
            data: {
                apiName,
                method,
            }
        })

        return actions
    }
}