const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupedWords = require('./groupWords')

ipcMain.on('process-subtitles', (event, paths) => {
  console.log(paths)

  pathsToRows(paths)
    .then(rows => prepareData(rows))
    .then(words => groupedWords(words))
    .then(groupedWords => event.reply('process-subtitles', groupedWords))
})