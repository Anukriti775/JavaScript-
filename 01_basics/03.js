// conversion opeartion
let score = "67"

console.log(typeof score);
console.log(typeof (score));

// conversion to number 
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
// but if 
score = "562bdhusbhu"
let valueInNumber2 = Number(score)
console.log(typeof valueInNumber2) // but this is not a number 
// to rsolve this issue , it is advisable that you also check the datatype through this
console.log(valueInNumber2)
// above line shows NaN