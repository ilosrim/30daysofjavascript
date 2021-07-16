//Set()
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLangauges = new Set(languages)
// console.log(setOfLangauges)

for(const language of setOfLangauges){
    // console.log(language);
}

const compaines = new Set()
// console.log(compaines.size);

compaines.add('Google')
compaines.add('Facebook')
compaines.add('Amazon')
compaines.add('Oracle')
compaines.add('Microsoft')
compaines.add('Amazon')
compaines.add('Oracle')
compaines.add('Microsoft')

// console.log(compaines);

const setOfCompaines = new Set()
for (const company of compaines){
    setOfCompaines.add(company)
}
setOfCompaines.delete('Facebook')
// console.log(setOfCompaines.has('Amazon'));

setOfCompaines.clear()
// console.log(setOfCompaines);

const langSet = new Set(languages)
const counts = []
const count = {}

for (const l of langSet){
    const filteredLang = languages.filter((lang) => lang === l)
    counts.push({lang: l, count: filteredLang.length})
}
console.log(counts);

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)


// Map()
// const map = new Map()
// console.log(map)

countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
  ['uzb','kzk']
]
const map = new Map(countries)
console.log(map)
console.log(map.size)

const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

console.log(countriesMap.get('Finland'));
console.log(countriesMap.has('Finland'));
for(const country of countriesMap){
  console.log(country);
}
for(const [country, city] of countriesMap){
  console.log(country, city);
}