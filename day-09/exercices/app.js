const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Estonia']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
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
const number = 123456.789;
console.log(new Intl.NumberFormat('uz-UZ', { style: 'currency', currency: 'UZS' }).format(number));


const onlyPrice = products.filter(value => {
  return value.price.toString().length > 0
})
console.log(onlyPrice);

// 16
const arrList = ['hi', 'hello', 'world', 2021]
function getStringList(arrList){
  return arrList
}
console.log(getStringList(arrList));

// 17
const raqamlar = [1,2,3,4,5,6,7,8,9,10]
const getNum = raqamlar.reduce((item, val) => {
  return item+=val
}, 0)
console.log(getNum);

// 18
const getLand = countries.reduce((item, val) => {
  return item+=val+', '
}, '')
console.log(`${getLand}are north European countries`);

// 20
const nameLen = names.some(val => val > 7)
console.log(nameLen);

// 21
const nameLand = countries.every(val => val == 'land')
console.log(nameLand);

const string = 'some 1 content 2 with 3 digi6ts';
console.log(string.match(/\d+/g));