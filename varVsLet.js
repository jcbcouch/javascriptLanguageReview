let a = 1;
var b = 2;

for(let a = 0; a < 3; a+=1) {
}

for(var b = 0; b < 5; b+=1) {
}


console.log(a, b);  // 1 5, var changes the variable on the global scope, let and const do not