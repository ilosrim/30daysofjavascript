// const arr = Array();
// // or
// // let arr = new Array()
// // or
// // const arr = []
// console.log(arr);

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// // Print the array and its length

// console.log('Numbers:', numbers)
// console.log('Number of numbers:', numbers.length)

// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

// console.log('Vegetables:', vegetables)
// console.log('Number of vegetables:', vegetables.length)

// console.log('Animal products:', animalProducts)
// console.log('Number of animal products:', animalProducts.length)

// console.log('Web technologies:', webTechs)
// console.log('Number of web technologies:', webTechs.length)

// console.log('Countries:', countries)
// console.log('Number of countries:', countries.length)

// const myArr = [
//     'Asabeneh',
//     250,
//     true,
//     {   country: 'Finland',
//         city: 'Helsinki'
//     },
//     {
//         skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] 
//     }
// ] // arr containing different data types
// console.log(a=myArr)

// // Creating an array using split
// let js = 'JavaScript'
// const charsInJavaScript = js.split(' ')
// console.log(charsInJavaScript)

// // Accessing array items using index
// const myFruits = ['banana', 'orange', 'mango', 'lemon']
// let lastFruit = myFruits[3]
// console.log(lastFruit)

// const myNumbers = [0, 3.14, 9.81, 37, 98.6, 100]
// console.log(myNumbers.length)

// // Modifying array element
// const mutArray = [1, 2, 3, 4, 5]
// mutArray[0] = 10
// mutArray[1] = 20
// console.log(mutArray)

// const countrie = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
  
// countrie[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
// let lastIndex = countries.length - 1
// countries[lastIndex] = 'Korea' // Replacing Kenya by Korea  
// console.log(countries)

// const ar = Array() // creates an an empty array
// console.log(ar)
// const eightEmptyValues = Array(8) // it creates eight empty values
// console.log(eightEmptyValues) // [empty x 8]

// const fruitss = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
// const vegetabless = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
// const fruitsAndVegetables = fruitss.concat(vegetabless)                 // concatenate the two arrays
// console.log(fruitsAndVegetables)

// // Arrey length
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.length) // -> 5 is the size of the array

// // indexOf()
// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits.indexOf('banana')  // 0

// // lastIndexOf()
// const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

// console.log(numbers.lastIndexOf(2)) // 7
// console.log(numbers.lastIndexOf(0)) // -1
// console.log(numbers.lastIndexOf(1)) //  6
// console.log(numbers.lastIndexOf(4)) //  3
// console.log(numbers.lastIndexOf(6)) // -1

// // includes()
// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.includes(5)) // true
// console.log(numbers.includes(0)) // false
// console.log(numbers.includes(1)) // true
// console.log(numbers.includes(6)) // false

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ] // List of web technologies

// console.log(webTechs.includes('Node'))  // true
// console.log(webTechs.includes('C'))     // false

// // join()
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
// console.log(names.join('')) //AsabenehMathiasEliasBrook
// console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
// console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
// console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// // splice()
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.splice(3, 3, 7, 8, 9)) 

// // push()
// // syntax
// const arr  = ['item1', 'item2','item3']
// arr.push('new item')

// console.log(arr)
// // ['item1', 'item2','item3','new item']


// // pop()
// const numbers = [1, 2, 3, 4, 5]
// numbers.pop() // -> remove one item from the end
// console.log(numbers) // -> [1,2,3,4]

// // unshift()
// const numbers = [1, 2, 3, 4, 5]
// numbers.unshift(0) // -> add one item from the beginning
// console.log(numbers) // -> [0,1,2,3,4,5]

// // reverse
// const numbers = [1, 2, 3, 4, 5]
// numbers.reverse() // -> reverse array order
// console.log(numbers) // [5, 4, 3, 2, 1]

// numbers.reverse()
// console.log(numbers) // [1, 2, 3, 4, 5]

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
  
//   webTechs.sort()
//   console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
  
//   webTechs.reverse() // after sorting we can reverse it
//   console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// // Arrey of arreys
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const fullStack = [frontEnd, backEnd]
// console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
// console.log(fullStack.length)  // 2
// console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
// console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]

// Level 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[^a-zA-Z 0-9]/g,"") 
console.log(words.split(" "))
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meet')
console.log(shoppingCart);