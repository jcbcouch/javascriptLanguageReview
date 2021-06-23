for(let i = 0; i < 10; i+=1){
    if(i === 2){
      console.log('2 is my favorite number');
      continue;
    }
  
    if(i === 5){
      console.log('Stop the loop');
      break;
    }
  
    console.log('Number '+ i);
  }
  


let i = 0;
while(i < 10){
  console.log('Number ' + i);
  i+=1;
}



let j = 100;
do {
  console.log('Number ' + j);
  j+=1;
} while(j < 10);


const user = {
    firstName: 'John', 
    lastName: 'Doe',
    age: 40
  }
   for(let x in user){
    console.log(`${x} : ${user[x]}`);
  }


const arr = [1,3,5,7,9];
for (let i of arr) {
  console.log(i);
}