let firstName = 'Mirsolih';
let lastName = 'Mirsultonov';
let country = 'Uzbekistan';
let city = 'Fergana';
let age = 23;
let isMarried = false;
let years = 1998;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof years);

// 2 - 3
console.log(10=='10');
console.log(10=='9.8');

// 4
// truthy
console.log(true == true);
console.log(true == 1);
console.log(undefined == null);
console.log(false == false);
console.log(false === false);

// falsy
console.log(true == false);
console.log(true === 1);
console.log(undefined === null);
console.log(NaN == NaN);

// 5
console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!='4');
console.log(4=='4');
console.log(4==='4');
console.log('python'.length == 'jargon'.length);

// 6
console.log(!(4>3));
console.log(!(4<3));
console.log(!(false));
console.log(!(4>3 && 10<12));
console.log(!(4==='4'));
console.log(!('dragon'.length == 'python'.length));

// 7 Date object
// const now = new Date;
// console.log(`Today is ${now.getFullYear()}`);
// console.log(`Today is ${now.getMonth()}`);
// console.log(`Today is ${now.getDay()}`);
// console.log(`Today is ${now.getDate()}`);
// console.log(`Today is ${now.getHours()}`);
// console.log(`Today is ${now.getMinutes()}`);

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56


const d = new Date(2020,6,15,3,26,35);
console.log(d);

// Level 2
// 1
let countOne = prompt('Enter base: ');
let countTwo = prompt('Enter height: ');
let area = (0.5*countOne*countTwo);
document.write(`The area of the triangle is ${area}\n`);
/*
 S=P*a/2
 Bu muntazam (barcha ichki burchaklari va tomonlari o'zaro teng bo'lgan) oltiburchakning yuzasini topish formulasi.
 P - oltiburchakning perimetri,
 a - ichki chizilgan aylananing radiusi.
 Boshqachasiga, mumtazan oltiburchakni oltita teng muntazam uchburchakga ajratish mumkin. Shunday qilinsa, ajralgan 
 uchburchaklarning asoslari yig'indisi oltiburchakning perimetriga (P), balandliklari esa ichki chizilgan aylananing 
 radiusiga (a) teng bo'lib qoladi. Shu tarzda har qanday murakkab shaklning yuzasini, avval uni sodda geometrik shakllar 
 yuzalariga ajratib olib (masalan, to'rtburchak, uchburchak, parallelogram, romb, trapetsiya va hokazo), keyin o'sha 
 shakllarning yuzalari yig'indisini hisoblab topib olish mumkin.
 */

// 2
let sideA = prompt('Enter side a: ');
let sideB = prompt('Enter side b: ');
let sideC = prompt('Enter side c: ');
let perimetr = sideA + sideB + sideC;
document.write(`\nThe perimeter of the triangle is ${perimetr}`);

// 13
let birthDay = prompt('Enter birth day: ');
let todays = new Date();
document.write(`You are ${todays.getFullYear()-birthDay}`);