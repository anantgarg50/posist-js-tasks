/**
 * Conditionals
 */
let condition = true;

// if
if (condition) {
  console.log('if block!');
}

// if-else
if (condition) {
  console.log('if block!');
} else {
  console.log('else block!');
}

// if-else chaining
let condition1 = true;
let condition2 = true;
let condition3 = true;
let condition4 = true;

if (condition1) {
  console.log('1st if block!');
} else if (condition2) {
  console.log('2nd if block!');
} else if (condition3) {
  console.log('3rd if block!');
} else if (condition4) {
  console.log('4th if block!');
} else {
  console.log('if block!');
}

// nested ifs
let condition1 = true;
let condition2 = true;

if (condition1) {
  if (condition2) {
    console.log('Nested ifs.');
  }
}

// AND(&&) Operator
if (condition1 && condition2) {
  console.log('Executes if both are true.');
}

// OR(||) Operator
if (condition1 || condition2) {
  console.log('Executes any of the condition is true.');
}

// NOT(!) Operator 
if (!condition1) {
  console.log('Reverses the condition.');
}

// Ternary Operator
let conditionBasedValue = condition ? 'Executes on true' : 'Executes on false';

/**
 * switch
 */
const MATCH_VALUE = 10;

switch (MATCH_VALUE) {
  case 1:
  case 2:
  case 3:
    console.log('for case 1, 2, 3');
    break;
  case 4:
  case 5: {
    console.log('for case 4, 5');
    break;
  }
  case 6:
  case 7:
  case 8: {
    console.log('for case 6, 7, 8');
    break;
  }
  case 10:
    console.log(10);
    break;
  default: console.log('this is default case.');
}

/**
 * Loops
 */
// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do-while loop
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

// breaking out of loop without label.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// breaking out of loop with label.
outer: for (let i = 0; i < 10; i++) {
  inner: for (let j = 0; j < 10; j++) {
    if (i === 5) {
      break outer;
    }
    console.log('j:', j);
  }
  console.log('i:', i);
}