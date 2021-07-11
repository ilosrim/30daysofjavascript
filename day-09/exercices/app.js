const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Estonia']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Level 1
// 3
const eachFunc = countries.forEach((value)=>{
  console.log(value);
})

// 6
const toUpper = countries.map(value => {
  value.toUpperCase()
  // 7
  return value.length
})
console.log(toUpper);

// 8
const numSquare = numbers.map(value => value*value)
console.log(numSquare);

// 10
const productFunc = products.map(value => value.price)
console.log(productFunc);

// 11
const landFunc = countries.filter((value) => {
  // value.toLowerCase().includes('land')
  // 12
  // return value.length === 6
  // 13
  // return value.length >= 6
  // 14
  return value[0] === 'E'
})
console.log(landFunc);

// 15
const onlyPrice = products.filter(value => {
  return value.price === 'number'
})
console.log(onlyPrice);