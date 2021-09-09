/***************************************************************************
 * read the file structure and 
 * - in recursive mode, return the .js files => api list
 * - in irrecursive mode, return the directory list => component list 
 **************************************************************************/
const fs = require('fs')
const path = require('path')

/**
 * 
 * @param {string} src: target repository 
 * @param {boolean} isRecursive: recursive mode or not 
 * @param {array} dirList: directoryList that could be used for recursion
 * @param {array} resultList: final result
 * @return {array} 
 *
 **/
const readFileList = (src, isRecurseive = false, dirList = [], resultList = []) => {
    dirList = fs.readdirSync(src)
    if (!isRecurseive) {
        resultList = dirList
        return resultList
    }
    // iterate through the directories
    dirList.forEach(dir => {
        // concat the fullpath of current directory
        const fullPath = path.join(src, dir);
        // get the info for the current directory
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) { // if it's a directory
            readFileList(fullPath, true, dirList, resultList)
        } else { // if it is not a directory
            // format the dirtory string
            let ele = fullPath.split(path.sep).join('/').replace('src', '@')
            resultList.push(ele)
        }
    })
    return resultList
}

readFileList('./src/api', [], true)

module.exports = readFileList