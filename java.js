//"Fix the issues in this code"
console.log("============1st=========")
calculateArea();
greetUser();

function calculateArea() {
 const radius = 5;
 let area;
area = Math.PI * radius * radius;
 console.log(area);
}
function greetUser() {
var userName = "John";
console.log(userName);

}

//"Why is this loop not stopping? How can you modify the code to ensure the loop counts down properly upto 100?"
console.log("============2nd==========")

let count = 1;
while (count <= 100) {
 console.log("Counting down: " + count);
 count = count + 1;
}

// "Why always It's cold outside. is printed irrespective of the temperature value. Fix this!"
console.log("============3rd==========")

let temperature = 30;
if (temperature <= 20) {
    console.log("It's cold outside.");
   } else {
    console.log("It's warm outside.");
   }

//    "Fix the issues in the code so that output is printed correctly"
console.log("============4th==========")

checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);function checkNumber(num) {
  if (num < 0){
    console.log("Negative");
  }else if (num >0) {
    console.log("Positive");
  } else {
    console.log("Zero");
  }
}

// "Write a function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n using a while loop."
console.log("===============5th============")

function sumNumbers(n){
  let sum =0;
  let i=0;
    while(i<=n){
        sum=sum+i
        i++
    }
   return sum;
}

console.log(sumNumbers(10));


//"Write a function calculateFactorial that takes a number n as a parameter and returns the factorial of that number using a while loop."
console.log("=========6th==========")

function calculateFactorial(n){

 for (i=5;i>=0;i--){
    

 }
 return i;
}

console.log(calculateFactorial(5))


console.log("+=====================+") 

function isBeautifulArray(arr) {
  // Calculate the sum of all elements in the array
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  // Check if sum is divisible by 2, 3, and 5
  if (sum % 2 === 0 && sum % 3 === 0 && sum % 5 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
}
isBeautifulArray([1,2,12,15,30]) 

console.log("==================");


function digitSumFact(n) {
  let num = n; 
  let sum = 0;
  while ( num > 0) {
      let digit = num % 10;
      sum += factorial(digit);
      num = Math.trunc(num / 10); 
  }

  if(n == sum) {
      console.log("Strong");
  }
  else {
      console.log("Not Strong");
  }
}
digitSumFact(5)
function factorial(n) {
  let fact = 1;
  for (let i  = 1; i <= n; i++) {
      fact = fact * i;
  }
  return fact;
}
 




