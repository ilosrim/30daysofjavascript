const numbers = [1, 2, 3, 4]

let sum = 0
numbers.forEach(value => sum+=value)
console.log(sum);

function hello(){
    console.log('Hello');
}
function hello2(){
    console.log('Hello 2');
}
setTimeout(hello, 3000)
// setInterval(hello, 2000)

const countries = ['finland', 'denmark', 'sweden', 'norway', 'iceland']
countries.forEach((el)=>{
    let up = el.slice(0,1).toUpperCase()
    let letter = el.slice(1)
    let main = up+letter
    console.log(main);
})