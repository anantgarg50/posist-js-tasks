/**
 * Array Declarations
 */
let exampleArray = [];
console.log(exampleArray); // Empty Array

exampleArray = [1, 'string', { a: 1, b: 'wow' }, true];
console.log(exampleArray); // [1, 'string', {a: 1, b: 'wow'}, true]

exampleArray = new Array(1, 2, 3);
console.log(exampleArray); // [1, 2, 3]

exampleArray = new Array(5);
console.log(exampleArray); // Empty Array of length 5

/**
 * Array Methods
 */
// Array from :-
let tempArray = Array.from(['abc', 65, true, 100]);
console.log(tempArray); // ['abc', 65, true, 100]

tempArray = Array.from([100, 550, 74], function (el) {
  return el * 2;
});
console.log(tempArray); // [200, 1100, 148]

// Array of
let tempArray = Array.of(10);
console.log(tempArray); // [10]

tempArray = Array.of(10, 'wow');
console.log(tempArray); // [10, 'wow']

tempArray = Array.of(true);
console.log(tempArray); // [true]

// Array isArray
let testArray = [[1, 2], new Array(5), 'wow', true, Array.of(10, 'wow')];
(function (testArray) {
  testArray.forEach(function (el) {
    if (Array.isArray(el)) {
      console.log(el.join(), 'is an Array.');
    } else {
      console.log(el, 'is not an Array.');
    }
  })
})(testArray);

/**
 * Array Prototype Methods
 */

let data = [
  {
    name: 'Obi Wan',
    age: 30,
    likes: ['football', 'chess']
  },
  {
    name: 'Yoda',
    age: 800,
    likes: []
  },
  {
    name: 'Darth Vader',
    age: 80,
    likes: ['Light Saber', 'Death Star']
  },
  {
    name: 'R2D2',
    age: 15,
    likes: ['Electricity', 'Data']
  },
  {
    name: 'Padme',
    age: 21,
    likes: ['Anakin Skywalker']
  }
];

// Array Fill
const exampleArray = new Array(5);
console.log(exampleArray); // Empty Array of length 5

exampleArray.fill(4);
console.log(exampleArray); // [4, 4, 4, 4, 4]

exampleArray.fill(1, 0, 2);
exampleArray.fill(3, 3, 5);
console.log(exampleArray); // [1, 1, 4, 3, 3]

// Array indexOf
const searchArray = [1, 2, 3, 4, 2];
console.log(searchArray.indexOf(2)); // 1
console.log(searchArray.indexOf(2, 3)); // 4
console.log(searchArray.indexOf(1, -2)); // -1
console.log(searchArray.indexOf(1, -5)); // 0

// Array keys
const keysIterator = searchArray.keys();
for (const key of keysIterator) {
  console.log(key);
}
// 0
// 1
// 2
// 3
// 4

// Array forEach
data.forEach(function (el) {
  const character = {
    ...el,
    starredIn: 'Star Wars'
  };

  console.log(character);
});
// { name: 'Obi Wan',  age: 30,
//   likes: [ 'football', 'chess' ],
//   starredIn: 'Star Wars' }
// { name: 'Yoda', age: 800, likes: [], starredIn: 'Star Wars' }{ name: 'Darth Vader',
//   age: 80,
//   likes: [ 'Light Saber', 'Death Star' ],
//   starredIn: 'Star Wars' }
// { name: 'R2D2',
//   age: 15,
//   likes: [ 'Electricity', 'Data' ],
//   starredIn: 'Star Wars' }
// { name: 'Padme',
//   age: 21,
//   likes: [ 'Anakin Skywalker' ],
//   starredIn: 'Star Wars' }

// Array map
const characterNames = data.map(function (el) {
  return el.name;
});
console.log(characterNames); // [ 'Obi Wan', 'Yoda', 'Darth Vader', 'R2D2', 'Padme' ]

// Array filter
const filteredData = data.filter(function (el) {
  return el.age < 50;
});
console.log(filteredData);
// [ { name: 'Obi Wan', age: 30, likes: [ 'football', 'chess' ] },
//   { name: 'R2D2', age: 15, likes: [ 'Electricity', 'Data' ] },
//   { name: 'Padme', age: 21, likes: [ 'Anakin Skywalker' ] } ]

// Array reduce
const likes = data.reduce(function (accumulator, current) {
  current.likes.forEach(function (el) {
    accumulator.add(el);
  });

  return accumulator;
}, new Set());
console.log(Array.from(likes).join(', ')); // football, chess, Light Saber, Death Star, Electricity, Data, Anakin Skywalker