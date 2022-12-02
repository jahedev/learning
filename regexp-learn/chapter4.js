const h = require('./helper')
const emerson_text = h.read_file('./input/emerson.txt')
let res

/*
 * Notes
 *
 * + any character after, any amount
 * s* any number of s characters, but at least 1
 * /apple?/ apple, apples, but not apples
 * / \d\d\d\d* / 3 or more digits
 * / \d\d\d+ / 3 or more digits
 * /colou?r/ color or colour
 * /[a-z]{1,3}/ 1 to 3 lowercase characters
 * /[a-z]{3,}/ 3 or more characters
 */
