function regmatch(re = new RegExp(), text = '') {
  console.log('\nText  :', text)
  console.log('Regex :', re)
  console.log('Match :', text.match(re))
}

module.exports = regmatch
