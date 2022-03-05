function fakeStr(test) 
{
    let newString = [];
    for(let i = 0; i < test.length; i++)
    {
        if(test[i] < 5)
        {
            newString.push(0);
        } if(test[i] >= 5)
        {
            newString.push(1);
        }
    }  
    return newString.join('');
}
console.log(fakeStr('46444'));
console.log(fakeStr('45385593107843568')); // '01011110001100111'
console.log(fakeStr('509321967506747')); // '101000111101101'