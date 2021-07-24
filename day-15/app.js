class Animals{
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    getName(){
        let name = this.name;
        return name;
    }
}

class Dog extends Animals{
    constructor(name, age, color, legs, laqab){
        super(name, age, color, legs);
        this.laqab = laqab;
    }
}
class Cat extends Animals{
    constructor(name, age, color, legs, laqab){
        super(name, age, color, legs);
        this.laqab = laqab;
    }
}

const animals = new Animals('Animal', 3, 'Black', 4);
const dog = new Dog(`Dog`, 3, 'White', 4, `Bo'bik`);
const cat = new Dog(`Cat`, 1, 'Yellow', 4, `Vaska`);

console.log(animals);
console.log(dog);
console.log(cat);