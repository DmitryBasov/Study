// Task 1//
function toJadenCase(string){    
    return string.split(' ').map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join(' '); 
}

console.log(toJadenCase('How can mirrors be real if our eyes aren"t real')); // How Can Mirrors Be Real If Our Eyes Aren"t Real

//Task 2//
function oddOrEven(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        sum += number;        
    })
    if (sum % 2 == 0){
        return "even";
    } else return "odd";    
}

console.log(oddOrEven([0, 1, 5])); // 'even''четное'
console.log(oddOrEven([0, 1, 3])); // 'even'
console.log(oddOrEven([0, -1, -5])); // 'even'
console.log(oddOrEven([0, 1, 4])); // 'odd''нечетное'
console.log(oddOrEven([0, -1, 2])); // 'odd'
console.log(oddOrEven([0])); // 'even'