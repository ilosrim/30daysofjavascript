const numbers = [1, 2, 3, 4]

let sum = 0
numbers.forEach(value => sum+=value)
console.log(sum);

function hello(){
    console.log('Hello');
}
function hello2(){
    console.log('Hello 2');
}
// setTimeout(hello, 3000)
// setInterval(hello, 2000)

// forEach
const countries = ['finland', 'denmark', 'sweden', 'norway', 'iceland']
countries.forEach((el)=>{
    // 1
    console.log(el.slice(0,1).toUpperCase()+el.slice(1));
    // 2
    // let up = el.slice(0,1).toUpperCase()
    // let letter = el.slice(1)
    // let main = up+letter
    // console.log(main);
})

// map
const sonlar = [1,2,3,4,5]
const sonlarKvadrati = sonlar.map(son => son*son)
console.log(sonlarKvadrati);

const kountries = [
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
  'Kenya',
]

const kountriesFirstThreeLetters = kountries.map((kountry)=>
    kountry.slice(0,3).toUpperCase()
)
console.log(kountriesFirstThreeLetters);

// filter()
const filterLand = kountries.filter((val)=>
    val.includes('land')
)
console.log(filterLand);

const countriesEndsByia = kountries.filter((kountry) => kountry.endsWith('ia'))
console.log(countriesEndsByia)

// reduce()
const sums = sonlar.reduce((acc, cur)=> acc + cur, 0)
console.log(sums);

// every() / &&
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const arrAllStr = names.every((name) => typeof name === 'string')
console.log(arrAllStr)

// find() / ||
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log(age)

const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]
const score = scores.find((user) => {
  return user.score > 80
})
console.log(score)

// findIndex()
const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const agee = ages.findIndex((age) => age < 20)
console.log(age) // 5

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyo', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
//   return 0
})
console.log(users) 