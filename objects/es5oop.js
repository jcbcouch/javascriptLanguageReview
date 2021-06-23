function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

Person.prototype.getAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getFullYear() - 1970);
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.setFirstName = function(newFirstName) {
    this.firstName = newFirstName;
}

const me = new Person('Jacob', 'Couch', '12/24/1994');

myAge = me.getAge();  // 26
myName = me.getFullName(); // Jacob Couch
me.setFirstName('Bob');
myName = me.getFullName(); // Bob Couch




function Customer(firstName, lastName, dob, membership) {
    Person.call(this, firstName, lastName, dob);
    this.membership = membership;
}
Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

const jacob = new Customer('Jacob', 'Couch', '12/24/1994', 'Standard');

const jacobAge = jacob.getAge();  // 26