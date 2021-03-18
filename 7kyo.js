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

// Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
// Recursion
function solution(number){
  let result = 0;
  for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
         result += i;
      }
  } 
  return result;
}

// Simple Way

function solution(number){
  let result = 0;
  for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
         result += i;
      }
  } 
  return result;
}
