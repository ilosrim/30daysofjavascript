/* Level 1 */
// 1 - toUperCase(), toLowercase()
let string = '30 Days Of JavaScript';
console.log(string.toUpperCase())
console.log(string.toLowerCase())

// 6 - substr(), substring()
console.log(string.substr(0, 2))
console.log(string.substring(11))

// 7 slice()
console.log(string.slice(3))

// 8 includes()
console.log(string.includes('Script'))

// 9 split()
console.log(string.split(' '))

let firma = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(firma.split(' '))

// 12 - replace()
console.log(string.replace('JavaScript', 'Python'))

// 13 charAt()
console.log(string.charAt(15))

// 14 charCodeAt()
console.log(string.charCodeAt('J'))

// 15 indexOf()
console.log(string.indexOf('a'))

// 16 lastIndexOf()
console.log(string.lastIndexOf('a'))

// 17
let stringTwo = 'You cannot end a sentence with because because because is a conjunction'
console.log(stringTwo.indexOf('because'))
console.log(stringTwo.lastIndexOf('because'))

// 19 search()
console.log(stringTwo.search('because'))

// 20 trim()
let stringThere = '    30 Days Of JavaScript    '
console.log(stringThere.trim())

// 21 sratsWith() endsWith()
console.log(string.startsWith(30))
console.log(string.endsWith('JavaScript'))

// 23 match()
console.log(string.match('a'))

// 24 concat()
let c1 = '30 Days of'
console.log(c1.concat(' JavaScript'))

// 25 repeat()
console.log(string.repeat(2))

/* Level 2 */
// 1
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)

// 2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// 3
console.log(typeof 10)

// 4
console.log(parseFloat('9.8'))
console.log(parseInt('9.8'))
