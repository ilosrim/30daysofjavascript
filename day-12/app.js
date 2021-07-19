// Regular Expressions

// without flag
// let pattern = 'love'
// let flag = 'gi'
// let regEx = /love/gi
// console.log(regEx);

// RegExpp Object Methods
const user = {
    skils: 'Html, Css, Js'
}
// const str = 'I Love JavaScript 30 days'
// const pattern = /css/ig
// const result = pattern.test(user.skils)
// console.log(result)

// Array containing all of the match
const str = 'I love JavaScript'
const pattern = /love/g
const result = str.match(pattern)
// const result = str.search(pattern)
console.log(result)

// Replacing a substring
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/python/gi, 'JavaScript')
console.log(matchReplaced)


const text = `\n%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\n
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\n
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.`

matches = text.replace(/%/g, '')
console.log(matches)  

const txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern = /[Ee]-?mail/g  // ? means optional
matches = txt.match(pattern)

console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]

const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\d{4}/g  // exactly four times
const matches = txt.match(pattern)
console.log(matches)  // ['2019']
