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

