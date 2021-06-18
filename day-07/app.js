// A function can be declared or created in couple of ways:
    // Declaration function
    // Expression function
    // Anonymous function
    // Arrow function

// function declaration
function funcName(){
    // code..
}
funcName()

// function without parameter,  a function which make a number square
function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}
square() // 4

// function without parameter
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo
  console.log(sum)
}
addTwoNumbers() // a function has to be called by its name to be executed 

function printFullName(){
    let firstName = 'Mirsoli'
    let lastName = 'Mirsultonov'
    let fullName = firstName + ' ' +lastName
    console.log(fullName)
}
printFullName()

// function returning value
// function printFullName (){
//     let firstName = 'Mirsoli'
//     let lastName = 'Mirsultonov'
//     let fullName = `${firstName} ${lastName}`
//     return fullName
// }
// console.log(printFullName())

// Function with a parameter
function areaOfCircle(r){
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(15))

function square(number) {
  return number * number
}
console.log(square(10))


// month
function monthBase(name){
    console.log(name)
    let a = ''
    for(let i=1; i<29;i++){
        return a[i]
    }
    console.log(a)
}
function monthShort(name){
    monthBase(name)
    console.log(29)
    console.log(30)
}
function monthLong(name){
    monthShort(name)
    console.log(31)
}
console.log(monthLong('Yanvar'))

// more argument
function moreArgument(...args){
    console.log(args)
}
moreArgument('Juice WRLD',999,'forever')

// Anonymous Function
// const anonymousFun = function() {
//   console.log('I am an anonymous function and my value is stored in anonymousFun')
// }
// anonymousFun()

// Self Invoking Functions
// (function(n) {
//   console.log(n * n)
// })(2)

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)

// Arrow Function
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
  return n * n
}
console.log(square(2)) // 4

const square = n => {
  return n * n
}
console.log(square(2))  // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square = n => n * n  // -> 4

const changeToUppercase = arr => {
    const newArr = []
    for (element of arr){
        newArr.push(element.changeToUppercase())
    }
    return newArr
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUppercase(countries))