/**
 * var :- function scoped, hoisted in its scope.
 */

(function varDeclaration() {
  var isAllowed = false;

  if (isAllowed) {
    var declaration = 10;
    console.log('Value of var declaration :- ', declaration);
  } else {
    // On Execution on next line, there will be no reference error because var declarations are hoisted in their scope.
    console.log('Value of var declaration :- ', declaration);
  }
})();

/**
 * let :- block scoped, not hoisted in its scope.
 */

(function letDeclaration() {
  let isAllowed = false;

  if (isAllowed) {
    let declaration = 10;
    console.log('Value of var declaration :- ', declaration);
  } else {
    // On Execution on next line, there will be reference error because let declarations are not hoisted.
    console.log('Value of var declaration :- ', declaration);
  }
})();

/**
 * const :- block scoped, not hoisted in its scope, provides a constant binding. 
 */

(function constDeclaration() {
  const DECLARATION = 'This is constant!';
  // Next line gives error because we're trying to change constant binding.
  // DECLARATION = 'New Value assigned.';

  // But in case of, reference assignment
  const REF_ASSIGNMENT = {
    a: 10,
    b: 20
  };
  // Next assignment gives error because we're trying to change constant binding.
  REF_ASSIGNMENT = {
    c: 25,
    d: 45
  };

  // But Next assignment doesn't throw an error, because content of the memory location is changed, not the binding.
  REF_ASSIGNMENT.a = 'this is allowed';

  console.log('Updated REF_ASSIGNMENT :-', REF_ASSIGNMENT);
})();

/**
 * var vs. let
 */
(function varVsLet() {
  // var declaration can't shadow let declaration, but vice-versa is allowed.
  var temp1 = 10;
  {
    let temp1 = 20;
    console.log('let, shadowing var :- ', temp1);
  }

  let temp2 = 30;
  {
    var temp2 = 15;
    console.log("var, can't shadow let :- ", temp2);
  }

  // Case: where var can shadow let.
  varShadowingLet();
  function varShadowingLet() {
    var temp2 = 15;
    console.log("var, shadowing let :- ", temp2);
  }

  // var in for loop :-
  // 1. This loop structure runs infinitely.
  for (var i = 0; i < 10; i++) {
    for (var i = 0; i < 5; i++) {
      console.log(i);
    }
  }

  // 2. This loop prints all 10.
  for (var j = 0; j < 10; j++) {
    setTimeout(function () {
      console.log(j);
    }, 500);
  }

  // let in for loop :-
  // 1. Works as expected.
  for (let i = 0; i < 10; i++) {
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
  }

  // 2. Works as expected.
  for (let j = 0; j < 10; j++) {
    setTimeout(function () {
      console.log(j);
    }, 500);
  }
})();