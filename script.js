// Task 1//

const cities = ['moscow', 'london', 'berlin', 'porto'];

function getCity(arr, cell) 
{
    if (cell === arr.length) 
    {

      return 'null'
  }  

    if (cell < 0) {

      return 'oops!'
  } 

    if (cell >= 0) {

      return arr[cell]

  }
}
  
console.log (getCity(cities, 4)) //null
console.log (getCity(cities, -1)) //oops
console.log (getCity(cities, 1)) //london

// //Task 2//
 
function ifUpperCase(str) 
{ 

    return str.split(/(?=[A-Z])/).join(" ")

  } 
  
  console.log(ifUpperCase('uppercase'))

//Task 3//

let arr = []
let  summ = 0  

function notaMinus(a, b, c , d) 
{

  arr.push(a, b, c, d);
  
for (let i = 0; i <= arr.length-1; i++) 
{

  if (arr[i] > 0) 
  {
    summ += arr[i]
  
  }
  
}
 return summ
}
    
console.log(notaMinus(1, -4, 7, 12))