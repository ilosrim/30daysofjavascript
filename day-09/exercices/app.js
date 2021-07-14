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

// 23
const country = countries.find(item => item.length > 6)
console.log(country);

// 24
const countryIndex = countries.findIndex(item => item.length > 6)
console.log(countryIndex);

// 25
const norweyIn = countries.findIndex(val => val.toLowerCase() === 'norway')
console.log(norweyIn);

// 26
const rusIn = countries.findIndex(val => val.toLowerCase() === 'russia')
console.log(rusIn);

// Level 2
// 1
let counts = 0
const totalPrice = products.filter(value => {
  if(value.price) counts+=value.price
})
console.log(counts);

// 2
const finds = products.reduce((sum, val) => {
  if(val.price) sum+=val.price
  return sum
},0)
console.log(finds);

// 3
const landSearch = countries.filter(val => val.toLowerCase().endsWith('land'))
console.log(landSearch);

// 5
const getFirstTenCountries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Estonia', 'India', 'Canada', 'Australia', 'New Zeland', 'Argentina']
const findLetter = getFirstTenCountries.filter(val => val.includes('A'))
console.log(findLetter);

// Level 3
// 1
const landName = [
  {
    country: 'USA',
    capital: 'Washington',
    population: 450_000_000
  },
  {
    country: 'Canada',
    capital: 'Ottawa',
    population: 100_000_000
  },
  {
    country: 'Brasilia',
    capital: 'Brasilia',
    population: 500_000_000
  },
  {
    country: 'England',
    capital: 'London',
    population: 90_000_000
  },
  {
    country: 'Germania',
    capital: 'Berlin',
    population: 950_000_000
  },
  {
    country: 'Uzbekistan',
    capital: 'Tashkent',
    population: 34_000_000
  },
  {
    country: 'South Krea',
    capital: 'Seul',
    population: 110_000_000
  }
]
// sort by name, capital, population
const sortName = landName.sort((a,b) => a.country.toLowerCase().localeCompare(b.country.toLowerCase()))
console.log(sortName);

// 2
const arr5 = [
  {country: 'English',count:91},
  {country: 'French',count:5},
  {country: 'Arabic',count:25},
  {country: 'Spanish',count:24},
  {country:'Russian',count:30},
  {country:'Portuguese', count:14},
  {country:'Dutch',count:27},
  {country:'German',count:7},
  {country:'Chinese',count:10},
  {country:'Swahili',count:15}
]

const blabla = arr5.sort((a,b) => b.count-a.count)
console.log(blabla);

function mostSpokenLanguages(countries, n){
  countries.sort((a,b)=>{
    return a.count - b.count
  })
}
// console.log(mostSpokenLanguages(arr5, 3));

// 4
const statistic = [
  {
    count: 25,
    sum:  744,
    min:  24,
    max:  38,
    range:  14,
    mean:  30,
    median:  29,
    mode:  (26, 5),
    variance:  17.5,
    'standard deviation':  4.2,
    'frequency distribution': [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)],
    describe: function(){
      this.count=count;
      this.sum=sum;
      this.min=min;
      this.max=max;
      this.range=range;
      this.mean=mean;
      this.median=median;
      this.mode=mode;
      this.variance=this.variance;
    }
  }
]
const stand = statistic.some(val => val.describe)

console.log(stand);