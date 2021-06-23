let myArray = [true, 44, undefined, null, 'hello', {a:1,b:2}, new Date()];
let myArray2 = new Array(true, 44, undefined, null, 'hello', {a:1,b:2}, new Date());


arrayLength = myArray.length;  // 7
arrayTest = Array.isArray(myArray);  // true
zerothIndex = myArray[0];  // true (arrays are zero based)
myArray[0] = false;  // change an index
getIndex = myArray.indexOf('hello');  // 4
hasHello = myArray.includes('hello');  // true
myArray.push('last');  // add new last index
myArray.pop(); // remove last index
myArray.unshift('first'); // new first index, previous first becomes 2nd...
myArray.shift(); // remove first index, previous 2nd becomes 1st...

let numbers = [0,1,2,3,4,5,6,7,8,9];
numbers.splice(7,2);  // remove two indexes starting at index 7
numbers.reverse();  // reverse the array
numbers = numbers.concat([33,45,73,78,17,62,77,999,333,423]);  // push an array to the back
numbers.sort();  // sort by first digit(number or letter)



// destructuring destructuring destructuring destructuring destructuring 
const employee = ['jacob', 'couch', 'male'];

// pull variables out of the array
//age is undefined
const [fname, lname, gender, age] = employee;
// only pull out the third element
const [, , myGender] = employee;
// elements contains and array of the 2nd and 3rd elements of employee
const [, ...elements] = employee;
// give a default
const [, , , age2=26] = employee;



