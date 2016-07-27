// Include modules provided by Node.js
var fs = require('fs')
var path = require('path')

function readAsync () {
  var studentsFile = path.join(__dirname, 'data1.json')
  fs.readFile(studentsFile, showContents)
}
readAsync()

function showContents (err, buffer) {
  if (err) {
    return console.log(err.message)
  }
  var studentJson = buffer.toString()
    console.log(studentJson)
}
