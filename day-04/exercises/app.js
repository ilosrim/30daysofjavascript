// Level 1
// 1
let userInput = 19; // promt('Enter your age')
let minYears = 18;

// ternary
// userInput>=18 ? console.log('You are old enough to drive') : console.log('You are not 18 years old');

// if
if(userInput>=18) console.log('You are old enough to drive')
else console.log(`You are left with ${minYears - userInput} years to drive.`)

// 2
let now = new Date();
let myAge = now.getFullYear()-1998;
let yourAge = 20; // promt('Enter your age')
yourAge>myAge ? console.log(`You are ${yourAge-myAge} years older than me.`) : console.log(`You are ${myAge-yourAge} years younger than me.`);

// 3
let a = 4;
let b = 5;
a>b ? console.log(`${a} greater than ${b}`) : console.log(`${b} greater than ${a}`);

// 4 even or odd
let addNum = 2; // promt('Enter a number:')
if(addNum % 2 == 0){
    console.log(`${addNum} is an even number`)
}
else{
    console.log(`${addNum} is an add number`)
}

// Level 2

// 1
let scores = 101;
if(scores >= 0 && scores <= 49){
    console.log('Your score F');
}
else if(scores >= 50 && scores <= 59){
    console.log('Your score D');
}
else if(scores >= 60 && scores <= 69){
    console.log('Your score C');
}
else if(scores >= 70 && scores <= 79){
    console.log('Your score B');
}
else if(scores >= 80 && scores <= 100){
    console.log('Your score A');
}
else{
    console.log('Not defined!');
}

// 2
let season = 'Autumn';
let seasonMin = season.toLowerCase();
switch (seasonMin) {
    case 'autumn':
        console.log('September, October or November, the season is Autumn.');
        break;
    case 'winter':
        console.log('September, October or November, the season is Autumn.');
        break;
    case 'spring':
        console.log('September, October or November, the season is Autumn.');
        break;
    case 'summer':
        console.log('September, October or November, the season is Autumn.');
        break;
    default:
        console.log('Not defined!');
        break;
}

// 3
// let weekend = 'Saturday'.toLowerCase; // promt('What is the day today? ')

// switch (weekend) {
//     case 'saturday':
//         console.log(`${weekend} is a weekend.`)
//         break;

//     default:
//         console.log('Default value!')
//         break;
// }


// Level
// 1
let month = 'january'; //prompt('Enter a moth: ').toLowerCase();
switch (month) {
    case 'januar':
        console.log(`${month} has 31 day`);
        break;
    case 'february':
        console.log(`${month} has 28 day`);
        break;
    case 'march':
        console.log(`${month} has 30 day`);
        break;
    case 'april':
        console.log(`${month} has 31 day`);
        break;
    default:
        console.log('Default value');
        break;
}