module.exports = {
    description: 'generate an api file',
    prompts: [
        {
            type: 'input',
            name: 'src',
            message: 'Please enter api directory(api/xxx): ',
            default: null,
        },
        {
            type: 'input',
            name: 'fileName',
            message: 'Please enter file name(xxx.js): ',
            default: null,
        },
        {
            type: 'input',
            name: 'apiName',
            message: 'Please enter api name: ',
            default: null,
        },
        {
            type: 'input',
            name: 'baseUrl',
            message: 'Please enter api url',
        },
        {
            type: 'list',
            name: 'method',
            message: 'Please choose request method: ',
            choices: ['GET', 'POST', "PUT", "DELETE"],
            default: 'GET',
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
        const { src, fileName, apiName, baseUrl, method } = data
        const actions = []
        actions.push({
            type: 'add',
            path: `./src/api/${src}/${fileName}.js`,
            templateFile: './settings/plop/api/api-template.hbs',
            data: {
                apiName,
                baseUrl,
                method,
            }
        })

        return actions
    }
}