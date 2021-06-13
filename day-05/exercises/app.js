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


