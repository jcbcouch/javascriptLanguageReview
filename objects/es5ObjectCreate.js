const personPrototypes = {
    greeting: function() {
      return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
      this.lastName = newLastName;
    }
  }
  
  const mary = Object.create(personPrototypes);
  mary.firstName = 'Mary';
  mary.lastName = 'Williams';
  mary.age = 30;
  
  mary.getsMarried('Thompson');
  
  

  
  
  const jacob = Object.create(personPrototypes, {
    firstName: {value: 'Jacob'},
    lastName: {value: 'Couch'},
    age: {value: 26}
  });
  
