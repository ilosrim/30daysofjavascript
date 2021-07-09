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

person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())

const copyPerson = Object.assign({}, person)
console.log(copyPerson)
const keys = Object.keys(copyPerson)
console.log(keys)
const values = Object.values(copyPerson)
console.log(values)

// Object.entries:To get the keys and values in an array
const entries = Object.entries(copyPerson)
console.log(entries)

// hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))
