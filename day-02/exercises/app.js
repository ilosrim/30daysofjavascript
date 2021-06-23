/* cheetsheat */

// indexOf(string, position)
// lastIndexOf(string, position)
// search(string)
// slice(start, end)
    // substring() is similar to slice(). The difference is that substring() cannot accept negative indexes.
// substring(start, end)
// substr(start, length)

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

// 7
console.log(Math.random()*100)

// 8
let randomNumber = Math.random();
let randomBtn50 = randomNumber * 50;
let randomBtn100 = randomNumber * 100;
let randomFix1 = Math.floor(randomBtn50);
let randomFix2 = Math.floor(randomBtn100)
console.log(randomFix1, randomFix2)

// Level 3
// 1
let love = 'Love is the best thing in this world. Some love found their love and some are still looking for their love.'

// a
console.log(love.match(/\blove\b/gi).length)

// b
const myCout = love.split(/\blove\b/gi)
console.log(myCout)

// c
// let y = love.split(' ')
// function checkAdult(y) {
//  return y === 'love'
// }
// console.log(y.filter(checkAdult).length)

// 2
let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.match(/because/gi).length)

// 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[^a-zA-Z 0-9.]/g,""))

// 4
let price = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let sum = price.match(/\d+/g).map(i=>Number(i)).reduce((a, b) => a + b, 0)
console.log(sum)

// console.log(price.match(/(he|from|month)/gi))