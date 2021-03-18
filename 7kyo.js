// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers){
  let result = numbers.split(' ');
  return `${Math.max(...result)} ${Math.min(...result)}`;
}
