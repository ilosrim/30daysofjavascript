// Day 06

// for loop
for(let i = 0; i <= 9; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

const countries = ['Finland', 'Uzbekistan', 'Iceland', 'German', 'Norwey']
const newArr = []
for (let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]
}
console.log(sum)

// while loop
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// do while loop
// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i <= 5)

// for of loop
const numers = [1, 2, 3, 4, 5]
for (const num of numers) {
  console.log(num)
}

let a = 0
for(const b of numers){
    a += b
}
console.log(a)

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}
for (const tech of webTechs) {
    console.log(tech[0])
}

// break
let ovqatlar = ['non', 'shorva', 'osh', 'manti', 'honim', 'choy']
for (const ovqat of ovqatlar){
    if(ovqat == 'manti') break;
    console.log(ovqat)
}