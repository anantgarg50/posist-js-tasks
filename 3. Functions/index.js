/**
 * Function declaration, hoisted like var declarations thus can be called before declaration.
 */

example();
function example() {
  console.log('This is an example of function declaration.');
}

/**
 * Function expression, can't be called before definition
 */
FE('abc'); // Reference Error
const FE = function FE(param) {
  console.log('This is an example of FE.');
}
FE('bcd');

/**
 * Default parameters for functions before ES6.
 */
function printValue(value) {
  if (value === undefined) {
    value = 10;
  }

  console.log(value);
}

printValue(1000);
printValue();

/**
 * Default parameters for functions after ES6.
 */
function printValue(value = 10) {
  console.log(value);
}

printValue(1000);
printValue();

/**
 * Variable number of arguments in functions before ES6.
 */
function flexibleArguments() {
  const args = Array.from(arguments);
  console.log(args.join(', '));
}

flexibleArguments(1000, 'Name', null, { a: 10 });
flexibleArguments(1, 2);
flexibleArguments(1);

/**
 * Variable number of arguments in functions after ES6.
 */
function flexibleArguments(...args) {
  console.log(args.join(', '));
}

flexibleArguments(1000, 'Name', null, { a: 10 });
flexibleArguments(1, 2);
flexibleArguments(1);

/**
 * Nested Functions
 */
function outer() {
  function innerOne() {
    console.log('Inner One');
  }

  const innerTwo = function innerTwo() {
    console.log('Inner Two');
  }

  innerOne();
  innerTwo();
}

/**
 * Closures
 */
function multiplyBy(number) {
  return function (anotherNumber) {
    return number * anotherNumber;
  }
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(8));

/**
 * Immediately invoked function expressions
 */
// making var block-scoped
(function () {
  var temp = 10;
  console.log(temp);
})();
// lines below fails.
console.log(temp);
console.log(window.temp);

// making private variables using IIFE and Closures
const counter = (function () {
  let counter = 0;
  return {
    get: function get() {
      return counter;
    },

    increase: function increase() {
      counter++;
    },

    decrease: function decrease() {
      counter--;
    }
  }
})();

console.log(counter.get());
counter.increase();
console.log(counter.get());
counter.decrease();
console.log(counter.get());

// making var work like let in for loop.
for (var j = 0; j < 10; j++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 500);
  })(j);
}

/**
 * Recursion
 */
// Function to calculate fibonacci number at a position in fibonacci series.
function fibonacci(pos) {
  if (pos === 0 || pos === 1) {
    return 1;
  }

  return fibonacci(pos - 1) + fibonacci(pos - 2);
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(10)); // 89
console.log(fibonacci(5)); // 8
console.log(fibonacci(20)); // 10946

// Function to reverse the string
const testString = 'A quick brown fox jumps over the lazy dog.';

function strRev(text) {
  if (text.length === 1) {
    return text;
  }

  return `${text.slice(text.length - 1)}${strRev(text.slice(0, text.length - 1))}`
}
console.log(strRev(testString)); // .god yzal eht revo spmuj xof nworb kciuq A

// Function to process complex data with self-repeating structure
let data = {
  empire: [{
    name: 'Palpatine',
    salary: 1000000
  }, {
    name: 'Darth Vader',
    salary: 600000
  }],

  rebellion: {
    jedi: [{
      name: 'Obi-Wan Kenobi',
      salary: 20000
    }, {
      name: 'Luke Skywalker',
      salary: 18000
    }],

    others: [{
      name: 'Princess Leia',
      salary: 1300000
    }, {
      name: 'Jar-Jar Binks',
      salary: 130
    }, {
      name: 'Han Solo',
      salary: 120000
    }]
  }
};

function calculateTotalSalary(data) {
  if (Array.isArray(data)) {
    return data.reduce(function (accumulator, current) {
      accumulator += current.salary;
      return accumulator;
    }, 0);
  }

  return Object.keys(data).reduce(function (accumulator, current) {
    accumulator += calculateTotalSalary(data[current]);

    return accumulator;
  }, 0);
}
console.log(calculateTotalSalary(data)); // 3058130

/**
 * Callbacks
 */
// Simple Callback
const button = document.createElement('button');

// Here we assigned a function to event-listener, which will be invoked when button is clicked.
button.addEventListener('click', function (e) {
  console.log('Button Clicked!');
});

document.body.appendChild(button);

// Callback Hell (Pyramid Problem)
const pageOne = new XMLHttpRequest();
pageOne.open('GET', 'https://reqres.in/api/users?page=1', true);
pageOne.addEventListener('load', function fetchPageTwo() {
  console.log('Loaded page-1: ', pageOne.response);

  const pageTwo = new XMLHttpRequest();
  pageTwo.open('GET', 'https://reqres.in/api/users?page=2', true);
  pageTwo.addEventListener('load', function fetchPageThree() {
    console.log('Loaded page-2: ', pageTwo.response);

    const pageThree = new XMLHttpRequest();
    pageThree.open('GET', 'https://reqres.in/api/users?page=3', true);
    pageThree.addEventListener('load', function () {
      console.log('Loaded page-3: ', pageThree.response);
    });
    pageThree.send();
  });
  pageTwo.send();
});
pageOne.send();