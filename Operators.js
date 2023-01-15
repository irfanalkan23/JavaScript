let x=5
let y=2
let result = x ** y //exponential
console.log('Result is : ' + result)

//**= Exponential and assign
x**=y //x=x**y
console.log(x)

// ===  equal value and equal type
let a =10
let b='10'
console.log(a == b) // true
console.log(a === b) // false

let result2 = x > y ? x : y
console.log(result2)

/******* typeof **********/
console.log('****** typeof ******')
let firstName = 'Raghav'
console.log(typeof firstName)
console.log(typeof 123)
console.log(typeof true)

/******* instanceof **********/
console.log('****** instanceof ******')
let lastName = 'Pal'
let num1 = new Number(123)
console.log(lastName instanceof String) //false
console.log(num1 instanceof Number) //true

console.log (typeof "Raghav");      // Returns "string"
console.log (typeof 123);           // Returns "number"
console.log (typeof false);         // Returns "boolean"
console.log (typeof NaN);           // Returns "number"
console.log (typeof [1,2,3,4]);               // Returns "object"
console.log (typeof {name:'Peter', age:25} ); // Returns "object"
console.log (typeof new Date());        // Returns "object"
console.log (typeof null);              // Returns "object"
console.log (typeof function () {});    // Returns "function"
console.log (typeof myClass);           // Returns "undefined"