const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, '../../src/main.js'), 'utf8', function (err, data) {
    if (err) throw err
    console.log(data.toString())
})