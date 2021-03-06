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
const newArr = [juft, toq]
console.log(newArr)

// 13
let randomNum = Math.random()
for (let i = 0; i<=5; i++){
    console.log(Math.floor(randomNum+=i))
}

// let nums = [1,8,5,6,65]
// const random = Math.floor(Math.random(1,2,3,4,5,6))
// console.log(nums[random])

// 15
function GeneratePassword(length){
    let chartset = 'ABCDEFGKLMNOPQRSTUVWYXZabcdefgklmnopqrstuvwyxz0123456789@#$%_';

    let password = '';

    for(let i = 0; i < length; ++i){
        let at = Math.floor(Math.random() * (chartset.length + 1));
        password += chartset.charAt(at);
    }
    return password;
}
console.log(GeneratePassword(6))

function randomNumber(numLength){
    let ids = '123456abcd'
    let passwd = ''
    for(let i = 0; i<numLength; ++i){
        let cp = Math.floor(Math.random()*(ids.length + 1))
        passwd+=ids.charAt(cp)
    }
    return passwd
}
console.log(randomNumber(6))

// random string npm package
var randomstring = require("randomstring");

const crypto = randomstring.generate({
    length:16,
    charset:'numeric'
});
console.log(crypto);

// generate
    // options
        // length - default=32
        // charset: alphabet[a-z, A-Z]
        //      numeric[0-9]
        //      alphanumeric[0-9 a-z A-Z]
        //      hex[0-9 a-f]
        //      binary[0 1]
        //      octal[0-7]
        //      custom - any given characters
        // capitalisation
        //      lowercase
        //      uppercase
    // cb
        // Optional. If provided uses async version of crypto.randombytes