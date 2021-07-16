// Level 1
const a = [4, 5, 7, 8, 9]
const b = [3, 4, 5, 7, 8]
const countries = ['Finland', 'Sweden']

// 1
const newSet = new Set();

for(let i = 0; i<11; i++){
    newSet.add(i)
}
newSet.delete(5)
newSet.clear()
newSet.add('JavaScript');
newSet.add('Node JS');
newSet.add('React JS');
newSet.add('Next JS');
newSet.add('Express JS');
newSet.add('Angular JS');
newSet.add('Vue JS');
newSet.add('TypeScript');
// console.log(newSet);

const countriess = new Map();
countriess.set('Finland', 'Helsinki');
countriess.set('Sweden', 'Stockholm');
countriess.set('Norway', 'Oslo');
console.log(countriess);

// Level 2
let c = [...a, ...b]
let C = new Set(c)
console.log(C);
