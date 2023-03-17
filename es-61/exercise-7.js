class Person {
  firstName;
  lastName;
  age;

  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  // get & set first name
  get firstName() {
    return this.firstName
  }
  set firstName(x) {
    this.firstName = x
  }

  //get & set last name
  get lastName() {
    return this.lastName
  }
  set firstName(x) {
    this.lastName = x
  }

  //get & set age
  get age() {
    return this.age
  }
  set age(x) {
    this.age = x
  }

  //get full name
  get fullName() {
    return `${this.firstName} ${this.lastName} `
  }
}
const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);