const h = require('./helper')
const emerson_text = h.read_file('./input/emerson.txt')

/*
 * Notes
 * - A good regular expression should match the text you want
 *   to target and ONLY that text.
 */

// Practice From Videos:

// match all of these words using '.'
h.reg_match(/s...er/g, 'silver sliver slider')

// escape special characters '.'
h.reg_match(/h.._export.txt/g, 'his_export.txt her_export.txt')

/*
 * Other Special Characters:
 *
 * - metacharacter: .
 * - bracket list: [ ]
 * - position anchor: ^, $
 * - occurrence indicators: +, *, ?, { }
 * - parentheses: ( )
 * - or: |
 * - escape and metacharacter: backslash (\)
 * - newline: \r, \n, \r\n
 * - tab: \t
 * - spaces
 */

let res

// Challenge 1:
const ch1_part1 = [
  /(S|s)elf/g,
  /himself/g,
  /herself/g,
  /itself/g,
  /myself/g,
  /yourself/g,
  /thyself/g,
]

ch1_part1.forEach((regex) => {
  res = (emerson_text.match(regex) || []).length
  console.log(`Regex ${regex} occurs: ${res} times.`)
})

const ch1_part2 = /\bp..a.e(s|\b)/g
res = emerson_text.match(ch1_part2)

console.log(`please, palace, parade: (${res.length}) ${res}`)

// t..ch, except 'teach'
const ch1_part3 = /(\b(?!teach)\b)t..ch/g
res = emerson_text.match(ch1_part3)

console.log(`'t..ch' matches except for 'teach': ${res}`)
