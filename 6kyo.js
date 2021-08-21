// Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
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

// Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
// https://www.codewars.com/kata/58291fea7ff3f640980000f9/train/javascript
function allContinents(list) {
  return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
            .every(opt => list.some(employee => opt === employee.continent));
}

// Sort the odd
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
const sortArray = array => {
  const oddArr = array.filter( num => num % 2).sort((a,b) => a - b);
  return array.map( num => num % 2 ? oddArr.shift() : num);
}

// Equal Sides Of An Array
const findEvenIndex = arr => {
  
  for (let i = 0; i < arr.length; i++) {
    
    const sumLeft = arr.reduce((a, b, currIdx) => 
        currIdx > i ? a + b : a, 0);
    const sumRight = arr.reduce((a, b, currIdx) => 
        currIdx < i ? a + b : a, 0);
    
    if (sumLeft === sumRight) {
      return i;
    } 
  }
  return -1;
}

// Take a Ten Minute Walk
function isValidWalk(walk) {
  let dirX = 0;
  let dirY = 0;
  walk.forEach(direction => {
    switch(direction) {
      case 'n':
        dirX += 1;
        break;
      case 's':
        dirX -= 1;
        break;
      case 'w':
        dirY += 1;
        break;
      default: 
        dirY -= 1;
    }})
    const check = dirX === 0 && dirY === 0 && walk.length === 10;
    return check ? true : false;
}

// Create Phone Number
const createPhoneNumber = numbers => {
  let format = "(xxx) xxx-xxxx";
  
  numbers.forEach( num => format = format.replace('x', num))

  return format;
}

// Find the unique number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/
const findUniq = arr => arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));

// Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
const letterScore = letter => {
  const alphabet = ' abcdefghijklmnopqrstuvwxyz';
  return alphabet.indexOf(letter);
}

const wordScore = word => 
    word.split('').reduce((reducer, letter) => reducer + letterScore(letter), 0)

const high = string => {
  let result;
  let reducer = 0;

  string.split(' ').forEach( el => {
    if (wordScore(el) > reducer) {
      reducer = wordScore(el)
      result = el;
    }
  })

  return result
}

// Two Sum
// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

const twoSum = (numbers, target) => {

  let secondI = null;

  for (let i = 0; i < numbers.length; i++) {
     const second = numbers.find((element, index) => {
        const check = ((element + numbers[i] === target) && (index !== i))

        if (check) {secondI = index}

        return check
     })
     if (second) return [i, secondI]
  }
}
