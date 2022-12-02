const h = require('./helper')
const emerson_text = h.read_file('./input/emerson.txt')

/*
 * Notes
 *
 * | Shorthand   |               |             |
 * | \d          | Digit         |     [0-9]   |
 * | \w          | Word char     |[a-zA-z0-9_] |
 * | \s          | Whitespace    | \t\r\n      |
 * | \D \W \S    | NOT \d\w\s    | [^ \t\r\n]  |
 */
