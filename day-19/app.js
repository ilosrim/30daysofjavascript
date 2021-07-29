// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++
//         return count
//     }

//     return innerFunction
// }
// const innerFunc = outerFunction()

// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())


function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

// console.log(innerFuncs.plusOne)
// console.log(innerFuncs.minusOne)

function personAccount(){
    // firstname, lastname, incomes, expenses
    let firstname;
    let lastname;
    let incomes;
    let expenses;

    function totalIncome(){
        firstname = 'Mirsolih';
        lastname = 'Mirsultonov'
        return firstname + ' ' + lastname;
    }
    return {
        totalIncome:totalIncome()
    }
}
const fullFunc = personAccount();
console.log(fullFunc.totalIncome);