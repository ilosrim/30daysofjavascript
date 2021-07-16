// Ixtiyoriy so'zni ichida nechta unli harf borligi aniqlansin.
// Bunda so'z o'zbek lotin alifbosida ekanligi hisobga olinsin.

// let arr = [`a`,`e`,`i`,`u`,`o'`,`o`];
// const tekshir = gapArr.map(val=>console.log(val))
// console.log(gapArr.forEach(val=>console.log(val)));
let gap = 'Assalomu alaykum';
// 1-usul
let unlilarSoni = gap.match(/[`a`|`e`|`i`|`u`|`o`|`o'`|`u`]/gi).length
console.log(unlilarSoni);

// 2-usul
let gapArr = gap.split('');
const uSoni = gapArr.reduce((count, val) => {
    if(val.toLocaleLowerCase()=='a' || val.toLocaleLowerCase()=='e' || val.toLocaleLowerCase()=='i' || val.toLocaleLowerCase()==`o'` || val.toLocaleLowerCase()=='o' || val.toLocaleLowerCase()=='u'){
        count+=val.length
    }
    return count
},0)
console.log(uSoni);


let gap = 'Assalomu alaykum';
let gapArr = gap.split('');
let count = 0;
for(const i of gapArr){
    if(i.toLocaleLowerCase()=='a' || i.toLocaleLowerCase()=='e' || i.toLocaleLowerCase()=='i' || i.toLocaleLowerCase()==`o'` || i.toLocaleLowerCase()=='o' || i.toLocaleLowerCase()=='u'){
        count+=i.length
    }
}
console.log(count);