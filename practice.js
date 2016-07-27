var wombat = require ('fs')
var path = require ('path')

function bob () {
  var teacherFile = path.join(__dirname, 'data.json')
  wombat.readFile(teacherFile, showContents)
}
bob()

function showContents (err, buffer) {
  if (err) {
    return console.log(err.message)
  }
  var dataJson = buffer.toString()
    console.log(dataJson)
}
