const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    hobbies: ['music', 'sports'],
    address: {
      city: 'Miami',
      state: 'FL'
    },
    getBirthYear: function(){
      return 2021 - this.age;
    }
  }

const firstName = person.firstName;   // Steve
const firstName2 = person['lastName'];  // Smith
const bYear = person.getBirthYear();  // 1991
const values = Object.values(person);  // an array of the values
const entries = Object.entries(person); // an array with they keys and values

console.log(entries)