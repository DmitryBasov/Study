// Task 1//
const names = ['john', 'smith', 'karl'];
let newArr= [];

function reverse(item)
{
    names.forEach(function(item)
    {
        newArr.unshift(item)
    })
    return newArr;
}

console.log(reverse(newArr)); // [ 'karl', 'smith', 'john' ]

//Task 2//
function pangrams(item) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'; 
    for(let i = 0; i < letters.length; i++)
    {
      if(item.indexOf(letters[i]) === -1)
      {
        return "false";
      }
    }
    return "true";
}

console.log(pangrams('The quick brown fox jumps over the lazy dog')); //true
console.log(pangrams('We promptly judged antique ivory buckles for the prize')); //false