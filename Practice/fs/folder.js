const fs = require('fs')
const path = require('path')
const fs2 = require('fs-extra')

const renameDir = (oldName, newName) => {
    let result = new Promise((resolve, reject) => {
        fs.rename(oldName, newName, err => {
            if (err) {
                reject(err)
                return
            }
            resolve(`change name from ${oldName} to ${newName}`)
        })
    })
    return result
}

const renameFolder = async (oldName, newName) => {
    try {
        let result = await renameDir(oldName, newName)
        console.log(result)
    } catch (err) {
        console.error(err)
    }
}

const removeFolder = async folder => {
    try {
        let result = fs2.remove(folder)
        console.log(result)
    } catch (err) {
        console.error(err)
    }
}

const mkFolder = folder => {
    try {
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder)
        }
    } catch (error) {
        console.error(error)
    }
}

const isDirectory = fileName => {
    if (fs.lstatSync(fileName).isDirectory()) {
        console.log(fileName)
    }
}

const readFolder = folder => {
    fs.readdirSync(folder).map(fileName => {
        return path.join(folder, fileName)
    }).filter(isDirectory)
}

module.exports = { renameFolder, removeFolder, mkFolder, readFolder }


