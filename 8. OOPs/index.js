/**
 * Instantiate objects using Constructor function
 */
// 1. Basic object instantiation using constructor function.
function Person(name, age) {
  if (!new.target) {
    throw new SyntaxError("Must be called with 'new' operator.");
  }

  this.name = name;
  this.age = age;
  this.sayHi = function sayHi() {
    console.log(`${this.name} says Hi!`);
  }

  return this;
}

const perry = new Person('Perry The Platypus', 8);
console.log(perry); // {name: "Perry The Platypus", age: 8}
console.log(perry.sayHi()); // Perry The Platypus says Hi!

const r2d2 = new Person('R2D2', 5);
console.log(r2d2); // {name: "R2D2", age: 8}
console.log(r2d2.sayHi()); // R2D2 says Hi!

const c3po = Person('C3PO', 20); // Error - Must be called with 'new' operator.

// 2. using prototype property lookup to share common methods across instances.
function Person(name, age) {
  if (!new.target) {
    throw new SyntaxError("Must be called with 'new' operator.");
  }

  this.name = name;
  this.age = age;

  return this;
}

Person.prototype.sayHi = function sayHi() {
  console.log(`${this.name} says Hi!`);
}

const perry = new Person('Perry The Platypus', 8);
console.log(perry); // {name: "Perry The Platypus", age: 8}
console.log(perry.sayHi()); // Perry The Platypus says Hi!

const r2d2 = new Person('R2D2', 5);
console.log(r2d2); // {name: "R2D2", age: 8}
console.log(r2d2.sayHi()); // R2D2 says Hi!

/**
 * Inheritance
 */
function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;

  return this;
}

Employee.prototype.greet = function () {
  console.log(`Greetings from ${this.name}!`);
}

Employee.prototype.bio = function () {
  console.log(`${this.name} is ${this.age} old.`);
}

Employee.prototype.getSalary = function () {
  return this.salary;
}

function Manager(name, age, salary) {
  if (!new.target) {
    throw new SyntaxError("Must be called with 'new' operator.");
  }

  Employee.call(this, name, age, salary);
  this.designation = 'Manager';

  return this;
}

Manager.prototype = Object.create(Employee.prototype);
Object.defineProperty(Manager.prototype, 'constructor', {
  value: Manager,
  enumerable: false,
  writable: true
});

Manager.prototype.greet = function () {
  console.log(`Greetings from manager ${this.name}!`);
}