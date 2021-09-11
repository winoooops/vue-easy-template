module.exports = {
  description: 'generate a component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Please enter component name: ',
      default: null,
    },
  ],
  actions: data => {
    const { name } = data
    const actions = []
    actions.push({
      type: 'add',
      path: `./src/components/${name}/index.vue`,
      templateFile: './plop/component/template.hbs',
      data: {
        name
      }
    })
    actions.push({
      type: 'add',
      path: `./src/components/${name}/index.ts`,
      templateFile: './plop/component/use.hbs',
    })
    actions.push({
      type: 'append',
      path: './src/main.ts',
      pattern: /\/\/ import components/,
      template: `import '@/components/${name}'`
    })
    return actions
  }
}