const fs = require('fs')

exports.reg_match = function (re = new RegExp(), text = '') {
  console.log('\nText  :', text)
  console.log('Regex :', re)
  console.log('Match :', text.match(re))
}

exports.read_file = function (filepath) {
  try {
    return fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' })
  } catch (error) {
    console.error('Unable to read file:', filepath)
    process.exit(-1)
  }
}
