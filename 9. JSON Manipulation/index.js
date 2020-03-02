let data = [
  {
    name: 'Obi Wan',
    age: 30,
    likes: ['Luke', 'Leia']
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

/**
 * JSON Stringify
 */
// 1. Simple without optional args
const JSON_DATA = JSON.stringify(data);
console.log(JSON_DATA);

// 2. with replacer function
const JSON_DATA = JSON.stringify(data, function (key, value) {
  if (typeof value === 'number') {
    return value * 2;
  }

  return value;
});
console.log(JSON_DATA);

// 3. with replace array
const JSON_DATA = JSON.stringify(data, ['name', 'likes']);
console.log(JSON_DATA);

// 4. with space argument
const JSON_DATA = JSON.stringify(data, ['name', 'likes'], 2);
console.log(JSON_DATA);

/**
 * JSON Parse
 */
// 1. Simple without optional args
const PARSED_DATA = JSON.parse(JSON_DATA);
console.log(PARSED_DATA);

// 2. with reviver function 
const PARSED_DATA = JSON.parse(JSON_DATA, function (key, value) {
  if (typeof value === 'number') {
    return value * 2;
  }

  return value;
});
console.log(PARSED_DATA);