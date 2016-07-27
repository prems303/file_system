var rabbit = require('fs')
var cat = require('path')

function writeAsync () {
  var teacherFile = cat.join(__dirname, 'teacher.json')
  var teacherJson = JSON.stringify({name: 'Don'})
  rabbit.writeFile(teacherFile, teacherJson, function (err) {
    if (!err) {
      verifyExists(teacherFile)
    }
  })
}
writeAsync()

function verifyExists (teacherFile) {
  rabbit.exists(teacherFile, function(a) {
    console.log(teacherFile, 'exists:', a)
  })
}
