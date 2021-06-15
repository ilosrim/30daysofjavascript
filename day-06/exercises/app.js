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
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// console.log(countries.length)
// console.log(webTechs.length)
// console.log(mernStack.length)

// 1
for(let i=0; i<=10; i++){
    console.log(i)
}

let i = 0;
while (i<=10) {
    console.log(i)
    i++
}

let j = 0
do {
    console.log(j)
    j++
} while (j<=10);

// 4
let x = ''
for(let i=1; i<=7; i++){
    x+='#'
    console.log(x)
}

// 5
for(let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i * i}`)
}

// 6
console.log(`i  i^2 i^3`)
for (let i = 0; i <= 10; i++){
    console.log(`${i}  ${i*i}   ${i*i*i}`)
}

// 7
for (let i = 0; i <= 100; i++){
    if(i%2 == 0){
        console.log(`Even: ${i}`)
    }
}

// 8
for (let i = 0; i <= 100; i++){
    if(i%2 != 0){
        console.log(`Odd: ${i}`)
    }
}

// 9
for (let i = 0; i <= 100; i++){
    if(i%1 != 0 && i%i != 0){
        console.log(`Prime numbers: ${i}`)
    }
}

// 10
let c = 0
for (let i = 0; i <= 100; i++){
    c+=i
}
console.log(`The sum of all numbers from 0 to 100 is ${c}`)

// 11
let juft = 0
let toq = 0
for (let i = 0; i<=100; i++){
    if(i%2==0){
        juft+=i
    }
    if(i%2!=0){
        toq+=i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${juft}. And the sum of all odds from 0 to 100 is ${toq}`)

// 12
const newArr = []
console.log(newArr.push(juft, toq))