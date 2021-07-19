const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
    {
        name:'Brook',
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex',
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'David',
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    },
    {
        name:'John',
        scores:85,
        skills:['HTML'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha',
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
]

// Level 1
// 1
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
const [fin, est, sw, den, nor] = countries;
// console.log(fin, est, sw, den, nor);
const [] = countries;
// console.log(countries);

// Level 2
let {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter);
for (const i in rectangle){
    console.log(i)
}
var a = 5, b = 4;
[a, b] = 4, 5;
console.log(a, b);