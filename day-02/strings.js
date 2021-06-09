// String Methods
// length, (index)[], toUpperCase(), toLowerCase(), substr(), substring(), split(), trim(), includes(), replace()

let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 23
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)


// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

let a = 5;
let b= 6;
console.log(`This is ${a + b}`);

let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let strings = '30DaysOfJavaScript'
console.log(strings.split(''))


let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','))
console.log(countries.split(', '))

let string3 = '   30 Days Of JavaScript   '

console.log(string)
console.log(string3.trim(' '))

let firstName3 = ' Asabeneh '

console.log(firstName3)
console.log(firstName3.trim())

let string4 = '30 Days Of JavaScript'

console.log(string4.includes('Days'))     // true
console.log(string4.includes('days'))     // false - it is case sensitive!
console.log(string4.includes('Script'))   // true
console.log(string4.includes('script'))   // false
console.log(string4.includes('java'))     // false
console.log(string4.includes('Java'))     // true

let country2 = 'Finland'

console.log(country2.includes('fin'))     // false
console.log(country2.includes('Fin'))     // true
console.log(country2.includes('land'))    // true
console.log(country2.includes('Land'))    // false

let string5 = 'Warland'
console.log(string5.replace('War', 'Game'))

let string6 = '30 Days Of JavaScript'
console.log(string6.charAt(0))        // 3

let lastIndex = string6.length - 1
console.log(string6.charAt(lastIndex)) // t

let string7 = '30 Days Of JavaScript'
console.log(string7.charCodeAt(1)) 

let string8 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string8.lastIndexOf('love'))       // 67
console.log(string8.indexOf('love'))        // 2

let string9 = 'Love is the best to in this world'

console.log(string9.startsWith('Love'))   // true
console.log(string9.startsWith('love'))   // false
console.log(string9.startsWith('world'))  // false

let string10 = 'Love is the most powerful feeling in the world'

console.log(string10.endsWith('world'))         // true
console.log(string10.endsWith('love'))          // false
console.log(string10.endsWith('in the world')) // true

let string11 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string11.search('love'))          // 2
console.log(string11.search(/javascript/gi))  // 7

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]