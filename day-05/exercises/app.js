// Level 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

// 1 ~ epty arrey
const emptyArrey = [];

// 2
const numbers = [1,2,3,4,5];
console.log(numbers.length);
console.log(numbers.indexOf(1));
console.log(numbers.indexOf(3));
console.log(numbers.indexOf(5));

// 5
const mixedDataTypes = ['name', 23, true, 'deree', 1998, '35.6'];
console.log(mixedDataTypes.length)

// 6
// const itCompanies = [];
// const addCompanies = Array(1).fill('Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.');
// console.log(addCompanies.join());
// console.log(addCompanies.slice())

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies.includes('o'));
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies.slice(0,1))
console.log(itCompanies.slice(3,4))
console.log(itCompanies.slice(6))
// console.log(itCompanies.join(' | ').toUpperCase())
console.log(`${itCompanies.slice(0,6).join(', ')} and ${itCompanies.slice(6)} are big IT companies.`)

// 13
// let tek = Array.isArray(itCompanies);
// console.log(tek)
// let myName = ['Mirsolih', 'Johon'];

let userInfo = 'Facebook';

switch (userInfo.toLowerCase()) {
    case 'facebook':
    case 'google':
    case 'microsoft':
    case 'apple':
    case 'ibm':
    case 'oracle':
    case 'amazon':
        console.log(userInfo[0].toUpperCase()+userInfo.slice(1))
        break;
    default:
        console.log('Not found')
}
console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(4))

// 20
itCompanies.shift()
console.log(itCompanies);
itCompanies.pop()
console.log(itCompanies);
itCompanies.splice()
console.log(itCompanies);

// Level 2
// 2
let text = '%%%I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let remPunc = text.replace(/[^a-zA-Z ]/g,"")
let words = remPunc.split(' ')

console.log(words.length)

// 3
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let forEachFunc = shoppingCart.map((value)=> value !== 'Meat' && shoppingCart.unshift('Meat'))


//for(i in shoppingCart){
//   if(i !== 'Meat' && i !== 'Sugar'){
//     shoppingCart.unshift('Meat')
//     shoppingCart.push('Sugar')
//   }
// }
// shoppingCart.unshift('Meat')
// shoppingCart.push('Sugar')
// shoppingCart.splice(2,3)
console.log(forEachFunc);

let a = [1,2,3,4,5]
let b = [3,4,5,6]
let c = [...a, ...b]
console.log(c);

// let A = new Set(a)
// let B = new Set(b)
let C = new Set(c)
console.log(C);

let p = 5
let q = 19
let f = p < q && q - p || p > q && p-q
console.log(f);

let son = 7
son % 2 === 0 ? console.log('Juft son') : console.log('Toq son')

// forEach
const items = ['item1', 'item2', 'item3']
const copyItems = []

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i])
}

// after
items.forEach(function(item){
  copyItems.push(item)
})