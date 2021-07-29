//Callback
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback('It did not go well', skills)
  }, 2000)
}

const callback = (err, result) => {
  if (!err) {
    return console.log(err)
  }
  return console.log(result)
}
console.log('started...');
doSomething(callback)

// Promise
console.log('started2...');

const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 4) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

// doPromise
//   .then(result => {
//     console.log(result)
//   })
//   .catch(error => console.log(error))


  ///
  // async function myfunc(){

  // }
const blabla = async()=>{
    try{
        const bla = await doPromise;
        console.log(bla);
    }
    catch(er){
        console.log(er);
    }
}
blabla()

// class Animals {
//   constructor(aye, legs, hands, head, noise){
//     this.aye = aye;
//     this.legs = legs;
//     this.hands = hands;
//     this.head = head;
//     this.noise = noise;
//   }
//   doLegs(){
//     console.log(`Oyoqlar soni ${this.legs}`);
//   }
// }
// const animal = new Animals(2,4,2,1,1)
// console.log(animal);

// class Sutemizuvchilar extends Animals{
//   constructor(aye, legs, hands, head, noise, emchak){
//     super(aye, legs, hands, head, noise)
//     this.emchak = emchak;
//   }
// }
// const sut = new Sutemizuvchilar(2,4,2,1,1,4)
// console.log(sut);

// class Ayiqlar extends Sutemizuvchilar{
//   constructor(aye, legs, hands, head, noise, emchak, dum){
//     super(aye, legs, hands, head, noise, emchak)
//     this.dum = dum;
//   }
// }
// const ayiq = new Ayiqlar(2,4,2,1,1,4,1)
// console.table(ayiq);

// async and Await
// const square = async function (n) {
//   return n * n
// }
// const value = await square(2)

const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.log(error))

const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.log(err)
  }
}
console.log('===== async and await')
fetchData()
