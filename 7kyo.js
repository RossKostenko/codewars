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

// Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript

function squareDigits(num){
  let arr = String(num).split('');
  let str = arr.map(element => Math.pow(element, 2)).join('');
  return Number(str);
}

// Chuck Norris II - One Punch
// https://www.codewars.com/kata/57057a035eef1f7e790009ef/train/javascript
const onePunch = (s) => (typeof(s) !== "string" || s.length === 0) ? "Broken!" : s.split(' ').sort().map(x => x.replace(/[ae]/ig,'')).join(' ');
