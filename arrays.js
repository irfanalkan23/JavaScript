// let numbers = [1, 2, 3, 4, 5];
// console.log (numbers);

// let fruits = ['Apple', 'Banana', 'Grapes'];
// console.log (fruits);

// let cars = new Array('Ford', 'Toyota', 'Mercedes');
// console.log (cars);

// console.log (cars[1]);
// cars[1] = 'Honda';
// console.log (cars[1]);
// console.log (cars);

// fruits.push('cherry');
// console.log (fruits);
// console.log (fruits.length);

// let x;
// for(x in fruits){
//     console.log (fruits[x]);
// }

// for(x of fruits){
//     console.log(x)
// }



let fruits = ['Apple', 'Banana', 'Grapes'];
console.log (fruits);

fruits.pop()
console.log (fruits);   //[ 'Apple', 'Banana' ]

fruits.shift();
console.log (fruits);   //[ 'Banana' ]

fruits.push('Cherry');
console.log (fruits);   //[ 'Banana', 'Cherry' ]

fruits.unshift('Lemon');    //[ 'Lemon', 'Banana', 'Cherry' ]
console.log (fruits);

delete fruits[1];       //[ 'Lemon', <1 empty item>, 'Cherry' ]
console.log (fruits);

fruits[1] = 'Orange';
console.log (fruits);   //[ 'Lemon', 'Orange', 'Cherry' ]

fruits.splice(1,2);     //delete 2 elements, starting from 1st index
console.log (fruits);   //[ 'Lemon' ]

fruits.splice(2,0,'Orange', 'Cherry')   //add 2 elements, delete 0 elements
console.log (fruits);   //[ 'Lemon', 'Orange', 'Cherry' ]

let citrusFruits = fruits.slice(0,2)    //slice from index 0 until 1, not changes the original array
console.log (fruits);       //[ 'Lemon', 'Orange', 'Cherry' ]
console.log (citrusFruits); //[ 'Lemon', 'Orange' ]

let evenNumbers = [2, 4, 6];
let oddNumbers = [1,3,5];
let primeNumbers = [2,3,5];

let numbers = evenNumbers.concat(oddNumbers, primeNumbers);
console.log (numbers);  //  [ 2, 4, 6, 1, 3, 5, 2, 3, 5 ]
