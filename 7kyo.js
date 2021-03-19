// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers){
  let result = numbers.split(' ');
  return `${Math.max(...result)} ${Math.min(...result)}`;
}

// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// nice soloution
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
// mine
function getCount(string) {
  let regExp = /[aeiou]/ig;
  let arr = string.match(regExp);
  return (arr === null) 
  ? 0 
  : arr.length
}


