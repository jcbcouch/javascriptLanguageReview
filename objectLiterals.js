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




