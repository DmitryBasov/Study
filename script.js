// Task 1//
function removeChar(word) {

  let newWord = word.slice(1, word.length -1)

  return newWord;
}

console.log(removeChar('eloquent')); // loquen
console.log(removeChar('country')); // ountr
console.log(removeChar('person')); // erso

//Task 2//
const coll1 = [8, 9, 21, 19, 18, 22, 7]; 
const coll2 = [2, 0, 17, 3, 9, 15, 4]; 

function calculateSum(items) 
{
  let sum = 0;

  items.forEach(function(item) 
  {
      if (item % 3 === 0) 
      {
          sum = sum + item;
      }
  }
  return sum;
}

console.log(calculateSum(coll1)) // 48 
console.log(calculateSum(coll2)) // 27