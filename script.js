// // Task 1//

// function calc(operator, value1, value2) {
//     if (operator === '+') {
//         return value1 + value2
//     }
//     else if (operator === '-') {
//         return value1 - value2
//     }
//     else if (operator === '*') {
//         return value1 * value2
//     }
//     else if (operator === '/') {
//         return value1 / value2
//     }
// }

// console.log (calc('+', 4, 7))
// console.log (calc('-', 15, 18))
// console.log (calc('*', 5, 5))
// console.log (calc('/', 49, 7))

// //Task 2//

// function squareOfSum(number1, number2){

//     return (number1 ** 2) + (( 2 * number1) * number2) + (number2 ** 2)
  
// }

// console.log(squareOfSum(2,3))
// console.log(squareOfSum(1,10))

//Task 3//

function finalGrade(exam, projects) {

    if (exam >= 90, projects >= 10) {
        return 'your rating = 100'
    }
    else if (exam >= 75, projects >= 5) {
        return 'your rating = 90'
    }
    else if (exam >= 50, projects >= 2) {
        return 'your rating = 75'
    }
    else if (exam < 50, projects < 2) {
        return 'your rating = 0'
    }
}

console.log (finalGrade(90, 10))