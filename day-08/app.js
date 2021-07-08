const person = {
    firstName: 'Mirsolih',
    lastName: 'Mirzaahmad o\'g\'li',
    age: 23,
    country: 'Uzbekistan',
    city: 'Fergana',
    skils: ['HTML', 'CSS', 'SASS', 'Bootstrap', 'JavaScript', 'React JS', 'Node JS', 'MongoDB', 'Git'],
    isMerrid: false,
    fullName: function(){
        return `${this.firstName}${this.lastName}`
    },
    'phone number': '+998993490698'
}
console.log(person.fullName);