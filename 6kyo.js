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


// Who likes it?
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
const likes = names => {
  switch(names.length) {
    case 0: return 'no one likes this';
    case 1: return `${names[0]} likes this`;
    case 2: return `${names[0]} and ${names[1]} like this`
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}


// Length of missing array
// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript
const getLengthOfMissingArray = arrayOfArrays => {
  if (arrayOfArrays === null || arrayOfArrays.length === 0) return 0
  
  let lengthArr = [];

  for (let i = 0; i < arrayOfArrays.length; i++) {
    const check = !Boolean(arrayOfArrays[i]) || !arrayOfArrays[i].length;
    if (check) return 0;

    lengthArr.push(arrayOfArrays[i].length)
  }

  lengthArr = lengthArr.sort((a, b) => a - b);

  for (let i = 1; i < lengthArr.length; i++) {
    if (lengthArr[i] - lengthArr[i - 1] === 2) return lengthArr[i] - 1
  }
}

// Your order, please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

const getNuberFromWord = word => Number(word.match(/\d/)[0])

const order = words => {
  let arr = words.split(' ').sort((a,b) => getNuberFromWord(a) - getNuberFromWord(b));
  return words ? arr.join(' ') : ''
}

// Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions/javascript

const findOdd = arr => {
    for (const number of arr) {
        const check = arr.filter(el => el === number).length % 2 === 1
        if (check) {
            return number
        }
    }
}


