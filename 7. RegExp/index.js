// Validate phone number in the format of (+cc-ddddd-ddddd)
const phoneNumberRegex = /\+\d{2}-\d{5}-\d{5}/;

console.log(phoneNumberRegex.test('+91-0000000000')); // false
console.log(phoneNumberRegex.test('+910000000000')); // false
console.log(phoneNumberRegex.test('+91-00000-00000')); // true

// Capitalize first character of a every word.
function capitalizeEachWord(str) {
  return str.replace(/(?:^|\s)\S/g, function (char) {
    return char.toUpperCase();
  });
}

console.log(capitalizeEachWord('+91-0000000000')); // +91-0000000000
console.log(capitalizeEachWord('a quick brown fox jumps over the lazy dog.')); // A Quick Brown Fox Jumps Over The Lazy Dog.
console.log(capitalizeEachWord('aQuickBrownFoxJumpsOverTheLazyDog.')); // AQuickBrownFoxJumpsOverTheLazyDog.

// case insensitive search in text
function searchText(keyword, text) {
  const searchRegex = new RegExp(keyword, 'i');

  return searchRegex.exec(text);
}

const str = 'a quick brown fox jumps over the lazy dog.';
console.log(searchText('QUI', str));
console.log(searchText('WOW', str));
console.log(searchText('fox Jumps', str));