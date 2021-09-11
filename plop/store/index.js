const readFileList = require("../utils/readFileList")

const strToArr = (str) => {
  if (!str) return
  const arr = str.trim()
    .split(',')
  return arr
}

module.exports = {
  description: 'generate a store module',
  prompts: [
    {
      type: 'input',
      name: 'module',
      message: 'Please enter module name(store/xxx): ',
      default: null,
    },
    {
      type: 'input',
      name: 'getters',
      message: "Please enter store getters, divided by ,(.i.e, getterName1, getterName2): ",
      default: null
    },
    {
      type: 'input',
      name: 'commits',
      message: "Please enter store commits, divided by ,(.i.e, commit1, commit2): ",
      default: null
    },
    {
      type: 'input',
      name: 'storeActions',
      message: 'Please enter store actions, divided by ,(.i.e, action1, action2): ',
    },
    {
      type: 'checkbox',
      name: 'apiList',
      message: 'Please choose api',
      choices: readFileList('./src/api', true),
      default: [],
    }

  ],
  actions: (data) => {
    const { module, getters, commits, storeActions, apiList } = data
    const getterList = strToArr(getters)
    const commitList = strToArr(commits)
    const actionList = strToArr(storeActions)
    const actions = []

    // first create module
    actions.push({
      type: 'add',
      path: `./src/store/modules/${module}/index.ts`,
      templateFile: './plop/store/modules.hbs',
      data: {
        getterList,
        commitList,
        actionList,
        apiList,
      }
    })
    // secondly create getters
    actions.push({
      type: 'append',
      path: `./src/store/getters.ts`,
      pattern: /\{/,
      templateFile: `./plop/store/getters.hbs`,
      data: {
        module,
        getterList,
      }
    })
    // import getters and module in ./store/index.js
    actions.push({
      type: 'append',
      path: `./src/store/index.js`,
      pattern: /modules: \{/,
      template: `${module}`,
    })

    return actions
  }
}