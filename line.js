// " Write a program to check if the character is a vowel, print (The character is a vowel) If the character is a consonant, print (The character is a consonant.) Make sure to handle both upper and lower case letters. A vowel is a character which is any of letters a, e, i, o, u. Any letter which is a not a vowel is considered a consonant."
// /
// " Given three numbers a, b, c print the maximum number amongst the three.a =10, b = 30, c = 5=>print 30"

// // let a=10;
// // let b=30;
// // let c=5;

// // if(a<b&&c<b){
// //     console.log(b+" "+"is the maxinum number");
// // }else if(a>b&&a>c){
// //     console.log(a+" "+"is the maxinum number");
// // }else if(a<c&&b<c){
// //     console.log(b+" "+"is the maxinum number");
// // }else{
// //     conaole.log("number not defined")
// // }   
// console.log("=============================================");
// " Write a program to generate the following series 1, 3, 5, 7, 9, 11....up until the nth term ;if n = 4, print the first 4 odd numbers 1 3 5 7"
// let n=5;
//  n=n*2;
// for(i=0;i<n;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }


// console.log("==============================================")
// ". If the initialDiscount is 5% and the dailyIncrease is 2%, the function should calculate the total discount over 10 days."
// "Day 1: 5%"
// "Day 2: 7% (5% + 2%)"
// "Day 3: 9% (7% + 2%)"

// "Day 10: Calculate this using a loop."
// "Remember, you don't have to store each day's discount. Just keep a running total of the discount percentage. The challenge is to use a single loop to accumulate the total discount percentage over the 10 days."

// let number=5;
// for (i=1;i<=10;i++){
//     console.log("Day" + " " + i +":" + number + "%" );
//     number=number+2;
// }





// console.log("==================================================")
// "Given an array of integers find the number of multiples of 5."

// let numbers=[5,14,19,203,225,30];
// for(i=0;i<numbers.length;i++){
//     if(numbers[i]%5==0){
//         console.log( numbers[i]+"is multiply by 5")
//     }
// }

// console.log("=================================================")
// "Given an array of integers and 2 numbers a and b (a < b) count the number of elements in the array which are between a and b"

// let mid=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// for (i=mid[4];i<=mid.length-1;i++){
//     if(i<=mid[9]){
//         console.log(i);
//     }
// }


// console.log("====================================================")
// "Given an array of strings count the number of elements which are starting with a vowel"

// let ab=["apple","kiya","roman","overview","iodex","under"]

// for(i=0;i<ab.length;i++){
//     if(ab[i].startsWith("a")){
//         console.log(ab[i]);
//     }else if(ab[i].startsWith("e")){
//         console.log(ab[i]);
//     }else if(ab[i].startsWith("i")){
//         console.log(ab[i]);
//     }else if(ab[i].startsWith("o")){
//         console.log(ab[i]);
//     }else if(ab[i].startsWith("u")){
//         console.log(ab[i]);
//     }
// }

// console.log("=====================================")
// " Given an array of float find the average of the numbers."
// let avg=[44.5,53.8,76.3,78.3,90.9]
// let sum=0;

// for(i=0;i<avg.length;i++){
//     sum=sum+avg[i];
// }
// console.log(sum/avg.length)

// console.log("==================================================");

// "1. *Odd or Even Checker:*"
// " - Write a program that takes an integer input and prints Even if it's divisible by 2, otherwise prints Odd"
//    "- Example:"
//      "- Input: 7"
//     " - Output: Odd"

//     function even(n){
//         if(n%2==0){
//             console.log(n+" is a even number")
//         }else{
//             console.log(n+" is a odd number")
//         }
//     }

//     even (9);


//     console.log("=========================================================")

//    " *Alphabet Case Identifier:*"
//    "- Create a program to check whether a given character is uppercase or lowercase. Print Uppercase Letter or Lowercase Letter accordingly."
//    "- Example:"
//      "- Input: g"
//    " - Output: Lowercase Letter"

//    function upperOrLower(l){
//     if(l>="A"&&l<="Z"){
//         console.log( l +" is a upper case")
//     }else{
//         console.log(l +" is a lower case")
//     }
//    }

//    upperOrLower("o")

// console.log("========================================================")

// "*Minimum of Three Numbers:*"
// "- Write a function that takes three integers and prints the smallest among them."
// "- Example:"
//   "- Input: a = 12, b = 5, c = 20"
//   "- Output: 5"

//   function minimum(a,b,c){
//     if(a<b&&c>a){
//         console.log(a+ "  is smaller")
//     }else if (a>b&&b<c){
//         console.log(b+ " is smaller")
//     }else if(a>c&&b>c){
//         console.log(c+ "  is smaller")
//     }
//   }
//   minimum(68,8,9);



//   console.log("========================================================")


//   " *Generate Even Number Series:* "
//   " - Write a program to generate the first n even numbers starting from 0. "
//   " - Example: "
//     " - If n = 4, output: 0 2 4 6 "

// function evenSeries(n){
//     n=n*2;
//     for (i=0;i<n;i++){
//         if (i%2==0){
//             console.log(i);
//         }
//     }
// }

// evenSeries(9);

// console.log("================================================")

// "*Sum of First N Odd Numbers:*"
//   " - Calculate the sum of the first n odd numbers."
//    "- Example:"
//     " - If n = 5, sum = 1 + 3 + 5 + 7 + 9 = 25"


//     function sum(n){
//         n=n*2;
//         sum=0;
//          let i=1;
//         while(i<=n){
//             if(i%2!=0){
//                 sum=sum+i;
//             }
//            i++
//         }
//         console.log(sum)
//     } 
// sum(5)         

// console.log("=============================================================")

// "*Factorial Calculation:*"
//  "  - Write a program that computes the factorial of a given number N."
//   " - Example:"
// "  - Input: N = 6"
//  "    - Output: 720 (since 1*2*3*4*5*6 = 720)"

//  function factorial(n){
//     let multi=1;
//     for(i=1;i<=n;i++){
//         multi=multi*i;
//     }
//     console.log(multi);
//  }

//  factorial(6);

//  console.log("===============================================");

//   "*Cumulative Increase Over Days:* "
//     "- If an initial amount is $100 and it increases by $15 daily, calculate the total amount after 10 days. "
//    -  "Note: Use a loop to accumulate the total amount. "

// function increase(n){
//     let initial=100;
//    k=15;
//     for(i=1;i<=n;i++){
//         initial=initial+k
//         console.log("Day " + i + " : " + initial)
//     }
// }
// increase(10);

// console.log("==========================================================");

// "*Print Multiples of 4 Between Two Numbers:*"
//   " - Complete the function printMultiplesOf4(a, b) to print all multiples of 4 between a and b in descending order."

//   function multi8(a,b){
//     while(b>=a){
//         if(b%4==0)
//         console.log(b);
//     b--
//     }
//   }

// multi8(8,32);

// console.log("====================================");

// "*Multiplication Table:*"
// "- Given a number N, print its multiplication table up to 10."

// function table(n){
//     cal=1;
//     for(i=1;i<=10;i++){
//        cal=i*n;
//        console.log(n+" * "+ i+ " = "+ cal);
//     }
// }

// table(5)

// console.log("=======================================")

// "*Numbers Divisible by Both 2 and 3:*"
//     "- Print all numbers from 1 to N that are divisible by both 2 and 3."

//     function div2And3(n){
//        for(i=1;i<=n;i++){
//         if(i%2==0&&i%3==0){
//             console.log(i + " is divisible by both 3 and 2")
//         }
//        }
//     }

//     div2And3(30);

// console.log("================================================");


// "*Count Negative Numbers:*"
// "- Given an array of integers, write a function to count how many elements are negative."

// let integer=[1,-3,-6,8,-9,6,-5];

// for(i=0;i<=integer.length;i++){
//     if(integer[i]<=0){
//         console.log(integer[i])
//     }
// }

// console.log("=======================================================")

// "*Average of Positive Floats:*"
// " - Create a program that calculates the average of positive floating-point numbers in an array."

// let float=[1.5,-2.3, 3.7, 4.0, -5.2];
// let value=0;
// for(i=0;i<float.length;i++){
//     if(float[i]<0){
//         value++;

//     }
    
// }
// console.log(value);

// console.log("=======================================================")

// "*Find Smallest and Largest Elements:*"
//    "- Write a function that finds and prints the smallest and largest numbers in an integer array."

//   let min=[12, 7, 22, 3, 15];

//  let smallest= Math.min(12, 7, 22, 3, 15);
//  let largest= Math.max(12, 7, 22, 3, 15);

//  console.log("smallest : " + smallest , "largest : " + largest);
  
  
  
  
//   console.log("====================================");

//   " *Reverse an Array:*"
//    "- Given an array of integers, write a program to reverse the array."

//    let small=[12, 7, 22, 3, 15];
//    for(i=small.length-1;i>=0;i--){
//     console.log(small[i]);
//    }
// console.log("===================================================");

  " *Count Occurrences of a Number:* "
   "- Create a function that counts how many times a specific integer appears in an array."

   let arr = [1, 2, 2, 4,4, 5, 6, 3];
 let set=[...new Set(arr)];

 for(i=0;i<set.length;i++){
    count=0;
   for(j=1;j<arr.length;j++){
    if(set[i]==arr[j]){
        count++
    }
   }
   console.log(set[i] + "  occurs  "+ count + "  times  ")
 }


 
// console.log("==========================");

// "*Count Vowels in Character Array:*"
// "- Given an array of characters, write a function to count the number of vowels (a, e, i, o, u) present."


