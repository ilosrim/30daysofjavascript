// Level 1
const dog = {}
// console.log(dog);

dog.name = 'Bo\'bik'
dog.legs = 4
dog.color = 'WhiteYellow'
dog.age = 4
dog.bark = ()=>{
    return 'woof woof'
}
// console.log(dog);

const copyDog = Object.assign({}, dog)
// console.log(copyDog);

dog.breed = 'laycha'
dog.getDogInfo = {
    name: "Bo'bik",
    legs: 4,
    color: 'WhiteYellow',
    age: 4,
}
// console.log(dog);

// Level 2
// 1
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const bla = Object.values(users)
let blabla = bla.map(val=>{
    // val.points>=50 && console.log(val);
})


// const user = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 25,
//     dob: '08/02/1989',
//     active: true
// };
// // iterate over the user object
// for (const key in user) {
//     // console.log(`${key}: ${user[key]}`);
// }

// 2
const people = {
  user1: {
    name: 'John Doe',
    skil: 'MERN stack'
  },
  user2: {
    name: 'John Jack',
    skil: 'Full stack'
  },
  user3: {
    name: 'Jack John',
    skil: 'Backend dev.'
  },
  user4: {
    name: 'John Doe',
    skil: 'Frontend dev.'
  }
}
people.user1.name = 'Mirsolih'
console.log(people);
Object.keys(people).forEach(key =>{
  // console.log(key)
  // console.log(people[key].skil)
  // console.log(people[key].skil==='MERN stack' && key)
})

let pKeys = Object.keys(people)
// console.log(pKeys)

let pValues = Object.values(people)
// console.log(pValues)

// 7
const countries = [
  {
    id: 'us',
    name: 'USA',
    capital: 'Washington',
    lang: 'England'
  },
  {
    id: 'uz',
    name: 'Uzbekistan',
    capital: 'Tashkent',
    lang: 'Uzbek'
  },
  {
    id: 'en',
    name: 'Great Britain',
    capital: 'London',
    lang: 'England'
  },
  {
    id: 'ru',
    name: 'Russia',
    capital: 'Moscow',
    lang: 'Russian'
  }
]
// console.log(countries);

// Level 3
// 1
const personAccount = {
  firstName: 'Eshmat',
  lastName: 'Toshmatov',
  incomes: totalIncome(),
  expenses: totalExpense(),
  totalIncome: function(){
    return addIncome+addExpense
  },
  totalExpense: function(){
    return addIncome+addExpense
  },
  accountInfo: function(){
    let name = 'Mirsolih', age = 23;
    return name + age
  },
  addIncome: function(){
    let income = 25000
    return income
  },
  addExpense: function(){
    let expense = 5000
    return expense
  }
}