// Level 1

// 1
let person = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const yearSalary = person.match(/\d+/g).map(val=>Number(val)).reduce((a,b)=>a+=b,0)
console.log(yearSalary*12-110000); //$124000

// 2
let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'].sort((a,b)=>a-b)
let c = new Set(points)
console.log(c);