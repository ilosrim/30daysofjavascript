// input 3 ga bo'linsa Fizz
// input 5 ga bo'linsa Bazz
// input 3 va 5 ga bo'linsa FizzBazz
// input 3 va 5 ga bo'linmasa return input
// input son bo'lmasa, return 'Son emas!

let input = 15;

const fizzBazz = (num) => {
  if (typeof num !== 'number')
    return "Son emas!"
  else if (num % 3 === 0 && num % 5 === 0)
    return "FizzBazz";
  else if (num % 3 === 0)
    return "Fizz";
  else if (num % 5 === 0)
    return "Bazz";
  else
    return num;
}

let count = fizzBazz(input);
console.log(count);