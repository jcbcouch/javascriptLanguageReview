class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    getAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getFullYear() - 1970);
    }

    static addNumbers(a, b) {
        return a + b;
    }
}

const me = new Person('Jacob', 'Couch', '12/24/1994');

class Customer extends Person {
    constructor(firstName, lastName, dob, membership) {
        super(firstName, lastName, dob);
        this.membership = membership;
    }
}

const jacob = new Customer('Jacob', 'Couch', '12/24/1994', 'standard');
