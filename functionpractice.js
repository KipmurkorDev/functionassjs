



function recursive(num){
    if(num<=100){
   if(num%3===0 && num%5===0){
       console.log("FizzBuzz");
   }
   else if(num%3===0){
   console.log("Fizz");
   }
   else if(num%5===0){
       console.log("Buzz");
   }
   else{
       console.log(num);
   }
   // calling the function rercusively 
   recursive(num+1)
   }
   }
   // calling  the function
recursive(1)
   
