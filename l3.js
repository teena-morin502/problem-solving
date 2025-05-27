// function fizzBuss(n){

// for(i=1;i<=n;i++){
// if(i%3!=0&&i&5!=0){
//     console.log(i);
// }else if(i%3==0&&i%5==0){
//     console.log("fizzBuzz");
// }else if(i%3==0){
//     console.log("fizz");
// }else if(i%5==0){
//     console.log("buzz")
// }
// }
// }

// fizzBuss(15);

// console.log("========lcm==============");



// function lcm(a,b){
//     let n=a*b;
//     for(i=1;i<=n;i++){
//         if(i%a===0&&i%b===0){
//             console.log(i);
//             break;
//         }
//     }
// }
// lcm(22,46);


// console.log("=============gcd=================");

// a=80;
// b=10;
// for(i=1;i<=Math.min(a,b);i++){
//     if(a%i==0&&b%i==0){
//         sum=i;
//     }
// }
// console.log(sum);

// function prime(num){
//     for(i=2;i<Math.sqrt(num);i++){
//         if(num%i==0){
//             return "Not Prime";
//         }
//     }
//     return "prime";

// }


// console.log(prime(51));

// console.log("==============pattern=============")
// function dimond(n){
//     let str="";
//     let reverse="";
    
//     for(i=1;i<=n;i++){
//     str+=i+" ";
//     }
    
//     for(j=1;j<n;j++){
//         reverse+=j;
//     }
//     let total=str+reverse;
    
// }
// dimond(3);

// console.log("=============sum of factorial========================")

// function factorial(n){
//     let sum=0;
//     let value=1;
//     for(i=1;i<=n;i++){
//         value*=i;
//         sum+=value;

//     }
//     console.log(sum);
// }
// factorial(5);
// console.log("================square pattern==============");
// // function square(n){
// //     let str="";
// // for(j=1;j<=n;j++)
// // for(i=1;i<=n;i++){
// // str+="* "  

// // }
// // console.log(str);
// // }
// // square(4);

// console.log("==================harshad number====================")
// function harshadlNumber(n){
//     let str=n.toString();
//     str=str.split(", ");
    

// }
// harshadlNumber(59);

// function lcm(a,b){
//     let n=a*b;
//    for(i=1;i<=n;i++){
//     if(i%a===0&&i%b===0){
//         console.log(i);
//         break;
//     }
//    }
// }
// lcm(6,2)

// console.log("==================fibonacci sequence=================")

// function fibonacciSequence(num){
//    for(i=1;i<=num;i++){
//   let num1=0;
//   let num2=1;
//   let sum;
//   if(num===1){
//     return num1;
//   } else if(num===2){
//     return num2;
//   }else{
//     for(i=3;i<=num;i++){
//         sum=num1+num2;
//         num1=num2;
//         num2=sum;
//     }
//     return num2;
//   }
  
//    }
// }
// console.log("fibonacii(8) : " + fibonacciSequence(8));

// console.log("=========== multiple of 3 ============");
// function multipleOf3(n){
// for(k=0;k<=n;k++){
//   for(i=3;i<=n;i*3){
//     if(i==n){
//       return "yes"
//     }
//   }
//   if(i!=n){
//     return "no"
//   }
// }
// }
// console.log( multipleOf3(81));

// console.log("============= pattern=======")

// // function pattern(n){
// //   for(i=1;i<=n;i++){
// //     let str="";
// //     for(j=1;j<=n;j++){
// //       if(i%2!==0){
// //         str+="* ";
// //       }else{
// //         str+="# ";
// //       }
// //     }
// //     console.log(str);
// //   }
// // }
// // pattern(3);

// console.log("+=====================+") 

// function isBeautifulArray(arr) {
//   // Calculate the sum of all elements in the array
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }

//   // Check if sum is divisible by 2, 3, and 5
//   if (sum % 2 === 0 && sum % 3 === 0 && sum % 5 === 0) {
//     console.log(1);
//   } else {
//     console.log(0);
//   }
// }
// isBeautifulArray([1,2,12,15,30]) 

// console.log("==================");
// function digitSumFact(n) {
//   let num = n; 
//   let sum = 0;
//   while ( num > 0) {
//       let digit = num % 10;
//       sum += factorial(digit);
//       num = Math.trunc(num / 10); 
//   }

//   if(n == sum) {
//       console.log("Strong");
//   }
//   else {
//       console.log("Not Strong");
//   }
// }

// function factorial(n) {
//   let fact = 1;
//   for (let i  = 1; i <= n; i++) {
//       fact = fact * i;
//   }
//   return fact;
// }


// function fib(n){
// let num1=0;
// let num2=1;
//  if(n==num1){
//   return num1;
//  }else if(n==num2){
//   return num2;
//  }else {
//   for(i=3;i<=n;i++){
//     let sum=num1+num2;
//     num1=num2;
//     num2=sum;
//   }
//   return num2;
//  }
// } 
// console.log(fib(4))
//0 1 1 2 3 5 8 13 21
// 4 



//  without return function
// function fib(number){
//   let f=[];
//   let num1=0;
//   let num2=1;
//   f.push(num1,num2);
//   for(i=3;i<=20;i++){
//     let sum=num1+num2;
//     num1=num2;
//     num2=sum;
//     f.push(num2);
//   }
//   console.log(f)
//   console.log(f[number-1])
// }

// fib(6)

// function num(n){
 
//  let str=n.toString().split("").map(Number)
//  let sum=""
//  for(i=0;i<=str.length-1;i++){
//   sum=sum+str[i];

//  }
//  if(sum%n==0){
//   console.log("yes")
//  }else{
//   conaole.log("no")
//  }

// }
// num(23);


// ****
// *  *
// *  *
// ****
// let n=4;
// for(i=0;i<n;i++){
//  let str="";
//  for(j=0;j<n;j++){
//    if(i!=0&&j!=0&&i!=n-1&&j!=n-1){
//      str+="  ";
//    }else{
//      str+="* "
//    }
//  }
//  console.log(str)
// }

// let sentance="my name is kim nirom i love eagle and apple";
// let arr=[];
// let sum=[]
// let vowels=["a","e","i","o","u","A","E","I","O","U"];
// let str=sentance.split(" ");
// console.log(str)

// for(i=0;i<=str.length-1;i++){
  
//   for(j=0;j<=vowels.length-1;j++){
 
//   if(str[i][0]==vowels[j]){
//     arr.push(str[i]);
//   }
//   }
// }

// for(k=0;k<=arr.length-1;k++){
//   let len=str[k].length-1;
//   if(arr[k].length==1){
//     len=0;
//   }
//   for(l=0;l<=vowels.length-1;l++){
//      if(arr[k][len]==vowels[l]){
//       sum.push(arr[k])
//      }
//   }
// }
// console.log(sum)


let str="aaaaaaaaaaddddrrrggvbb"
let output="";
let count=1;
for(i=0;i<=str.length-1;i++){
  if(str[i]==str[i+1]){
    count++
  }else{
    output+=count+str[i]+"  ";
    count=1;
  }
}
console.log(output)