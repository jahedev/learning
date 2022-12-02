const regmatch = require('./regex')

/*
 * Notes
 * - A good regular expression should match the text you want
 *   to target and ONLY that text.
 */

// match all of these words using '.'
regmatch(/s...er/g, 'silver sliver slider')

// escape special characters '.'
regmatch(/h.._export.txt/g, 'his_export.txt her_export.txt')

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
 */
