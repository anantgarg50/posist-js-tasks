/**
 * Try-Catch statements
 */
// try-catch
try {
  // Put code to execute in a normal flow here.
  let tempArray = Array.from(['abc', 65, true, 100]);
  console.log(tempArray); // ['abc', 65, true, 100]

  // following line produces error
  console.log(undefinedVariable);
} catch (error) {
  // Put code to execute after error here
  if (error) {
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
  }
}

// try-catch (catch without an argument)
try {
  // Put code to execute in a normal flow here.
  let tempArray = Array.from(['abc', 65, true, 100]);
  console.log(tempArray); // ['abc', 65, true, 100]

  // following line produces error
  console.log(undefinedVariable);
} catch {
  // Put code to execute after error here
  console.error('An unknown error occurred!');
}

// try-catch-finally
try {
  // Put code to execute in a normal flow here.
  let tempArray = Array.from(['abc', 65, true, 100]);
  console.log(tempArray); // ['abc', 65, true, 100]

  // following line produces error
  console.log(undefinedVariable);
} catch (error) {
  // Put code to execute after error here
  if (error) {
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
  }
} finally {
  // Put code which is to be executed in both cases success and failure 
  console.log('Hi there! this is the finally block!');
}

// Nested try-catch block
try {
  try {
    produceRangeError(15);
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.error('Reference Error occurred!');
    } else {
      throw error; // Re-throwing error
    }
  }
} catch (error) {
  if (error instanceof RangeError) {
    console.error('Range Error occurred!');
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
  }
}

/**
 * Type of Runtime Errors.
 */
// 1. Range Error
function produceRangeError(number) {
  if (number <= -10 || number >= 10) {
    throw new RangeError('Number must be between -10 and 10.');
  }

  return number;
}

try {
  produceRangeError(55);
} catch (e) {
  if (e instanceof RangeError) {
    console.error('Range Error occurred!');
  }
}

// 2. Reference Error
function produceReferenceError() {
  if (!number) {
    throw new ReferenceError("'number' is undefined.");
  }
}

try {
  produceReferenceError();
} catch (e) {
  if (e instanceof ReferenceError) {
    console.error('Reference Error occurred!');
  }
}

// 3. Type Error
function produceTypeError(number) {
  if (typeof number !== 'number') {
    throw new TypeError("expected an argument of number type.");
  }
}

try {
  produceTypeError();
} catch (e) {
  if (e instanceof TypeError) {
    console.error('Type Error occurred!');
  }
}