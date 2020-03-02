/**
 * Global Scope
 */
const GLOBAL_VARIABLE = 10;

console.log("Global variable accessed in global scope --> ", GLOBAL_VARIABLE);

/**
 * Local Scope
 */
(function localScope() {
  const LOCAL_VARIABLE = 15;

  console.log("Global variable accessed in local scope --> ", GLOBAL_VARIABLE);
  console.log("Local variable accessed in local scope --> ", LOCAL_VARIABLE);
})();

// Next line will produce an Error upon uncommenting.
//console.log("Local variable accessed in global scope --> ", LOCAL_VARIABLE);

/**
 * Types of Local Scoping
 */
/**
 * 1. Function Scope :- Variable(var only) or function declarations are accessible throughout the function
 */
(function functionScope() {
  var SCOPE_VARIABLE = 'value';

  console.log("Scope variable accessed in function scope --> ", SCOPE_VARIABLE);
  innerFunction();

  function innerFunction() {
    console.log('This is inner function.');
  }
})();

/**
  * 2. Block Scope
  */
(function blockScope() {
  const SCOPE_VARIABLE = 'outer scope value';

  console.log("Scope variable accessed in outer block scope --> ", SCOPE_VARIABLE);
  {
    const SCOPE_VARIABLE = 'inner scope value';

    console.log("Scope variable accessed in inner block scope --> ", SCOPE_VARIABLE);
  }
  console.log("Scope variable accessed in outer block scope --> ", SCOPE_VARIABLE);
})();

/**
 * Lexical Scoping
 */
const TEMP_NUMBER = 100;

function printTempNumber() {
  console.log("Output will be according to lexical or compile-time variable declarations --> ", TEMP_NUMBER);
}

(function lexicalScope() {
  const TEMP_NUMBER = 500;
  printTempNumber();
})();

/**
 * Scope Shadowing
 */
(function scopeShadowing() {
  const SHADOWED_VARIABLE = 'value';

  console.log("variable without shadowing --> ", SHADOWED_VARIABLE);

  shadow();
  function shadow() {
    const SHADOWED_VARIABLE = 'shadowed value';

    console.log("Shadowed variable --> ", SHADOWED_VARIABLE);
  }
})();