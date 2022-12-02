const h = require('./helper')
const emerson_text = h.read_file('./input/emerson.txt')
let res

/*
 * Notes
 *
 * | Shorthand   |               |             |
 * | \d          | Digit         |     [0-9]   |
 * | \w          | Word char     |[a-zA-z0-9_] |
 * | \s          | Whitespace    | \t\r\n      |
 * | \D \W \S    | NOT \d\w\s    | [^ \t\r\n]  |
 */

const lives = /live[sd]/g
const virtue = /virtue[^s]/g
const num_period = /\d\./g
const c_16 = /[Cc][a-zA-z]{15}/g

res = emerson_text.match(lives)
console.log('\nlives or lived:\n', res, res.length)

res = emerson_text.match(virtue)
console.log('\nvirtue but not virtues: \n', res, res.length)

res = emerson_text.match(num_period)
console.log('\nnum period: \n', res, res.length)

res = emerson_text.match(c_16)
console.log('\n16 letter word, start with C: \n', res, res.length)
