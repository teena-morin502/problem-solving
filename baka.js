// // console.log("============forloop=+==========");

// let aqua=50;
// for(water=12;water<=aqua;water++){
//     console.log(" "+water+" ");
// }

// // console.log("============even numbers==========");
// aqua=50;
// for(water=12;water<=aqua;water++){
//     if(water%2==0){
//     console.log(water+"is even");
//     }
// }

// // console.log("============odd numbers==========");
// aqua=50;
// for(water=12;water<=aqua;water++){
//     if(water%2!=0){
//     console.log(water+"is odd");
//     }
// }

// // console.log("============even and odd numbers==========");
// aqua=50;
// for(water=12;water<=aqua;water++){
//     if(water%2==0){
//     console.log(water+" "+"is even");
//     }else{
//         console.log(water+" "+"is odd");
//         }
//     }

 // console.log("============even and odd numbers==========");

// function number(e){
   
//         if(e%2==0){
//             console.log(e+" "+"even");
//         }else{
//             console.log(e+" "+"odd")
//         }
   
// }

 // console.log("============range low and high==========");

// temperature(18);
//  function temperature(n){
//     if(n<22){
//         console.log("cold");
//     }else if (n>22) {
//         console.log("hot");
//     } else {
//         console.log("normal");
//     }
//  }


 // console.log("============rocket launch==========");

 // let n=10;
// rocket(n);
// function rocket(n){
//   while(n>=1){
//     if(3<n){
//   console.log(n);
//   }else if(3==n){
//     console.log("get");
//   }else if(2==n){
//     console.log("set");
//   }else{
//     console.log("launch");
//   }
//    n--
// }

// }

// console.log("===========identify ========");

// const readline = require('readline');
// // Create interface to get input from the user
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// // Ask the user for the start range
// rl.question('Enter start range: ', (userInputStartRange) => {
//     // Ask the user for the end range
//     rl.question('Enter end range: ', (userInputEndRange) => {
//             // Ask the user to have a skip interval
//         rl.question('Enter skip interval : ', (userSkipInterval) => {
//         let startNumber = parseInt(userInputStartRange);
//         let endNumber = parseInt(userInputEndRange);
//         let skipInterval = parseInt(userSkipInterval);
//             if (skipInterval === 0) {
//                 console.log("Skip interval cannot be zero.");
//                 rl.close();
//                 return;
//             }
//         print("*** Printing numbers between "
//          + startNumber + " and " + endNumber + " ***");
//         if(startNumber < endNumber){
//             printRangeAscending(startNumber, endNumber, skipInterval);
//         }else{
//             printRangeDescending(startNumber, endNumber, skipInterval);
//         }
//         rl.close();
//     });
// });
// });
//   function printRangeAscending(startNumber, endNumber, skipInterval){
//       while(startNumber < endNumber){
//           console.log(startNumber);
//           startNumber = startNumber+skipInterval;
//       }
//   }
//   function printRangeDescending(startNumber, endNumber, skipInterval){
//     while(startNumber > endNumber){
//         console.log(startNumber);
//         startNumber = startNumber-skipInterval;
//     }
// }
// function print(message){
// console.log(message);
// }

// i=250;//seats
// n=0;
// seats(i);
// function seats(i){
//     while(i>n){
//         if(i>3){
//             console.log(i+"seats are taken");
//         }else if(i==3){
//             console.log(i+"2 seats left");
//         }
//     }
// 


// console.log("===========multiply ========");

// function printMultiplicationTable(n,r){
//      while(r>=1){
//     console.log(n+"*"+r+"="+n*r);
//      r--
//      }
// }


// printMultiplicationTable(5,6)

// console.log("===========identify day ========");

// let n=1;
// function getDayName(n){
//     switch(n){
//         case 1:
//             console.log("monday"); 
//             break;
//         case 2:
//             console.log("tuesday"); 
//             break;
//         case 3:
//             console.log("wednesday"); 
//             break;  
//         case 4:
//             console.log("thursday"); 
//             break; 
//         case 5:
//             console.log("friday"); 
//             break;
//         case 6:
//             console.log("saturday"); 
//             break;
//         case 7:
//             console.log("sunday"); 
//             break;
//         default:
//             console.log("invalid day"); 
//             break;
//     }
    
// }     
//console.log(getDayName(4));


// console.log("===========identify number ========");

// classifyNumber(4);

// function classifyNumber(n){

//      if(n%3==0&&n%5==0){
//     console.log ("divisible by three and 5");
//      }else if(n%5==0){
//     console.log("divisible by five");
//      }else if(n%3==0){
//         console.log("divisible by both three ");
//      }else{
//         console.log(" not divisible  by three and five");
//      }

// }


// console.log("===========identify 11 divisible number ========");

// function printMultiplicationTable(n,r){
//      while(r>=1){
//        if(r%2==0) 
//     console.log(n+"*"+r+"="+n*r);
//     r--
//      }
// }
// printMultiplicationTable(5,22)


// let   cars=["audi","BMW","cooper",]

// console.log("the value of the cars in index 3is------>"+cars[2]);

// for(i=cars.length-1;i>=0;i--){
//      console.log(cars[i]);
// }


// console.log("===========1st answer========");
// let lap = 1;
// let count = 10;
// while(lap<=10){
//     console.log("Lap"+lap);
//     lap++;
// }
// // console.log("===========2nd answer ========");
// function robot_movement(){
//     let v = 100;
// while(v>=20){
//     console.log(v+"%");
//     v=v-5;
// }
// console.log("Battery is low");
// }
//  robot_movement()
// console.log("===========3rd answer========");
// let directions = 3;
// switch(directions){
//     case 1:
//         console.log("North");
//         break;
//     case 2:
//         console.log("South");
//          break;
//     case 3:
//         console.log("East");
//         break;
//     case 4:
//         console.log("West");
//         break;
//     default:
//         console.log("direction is not found");
//  }
// // console.log("===========4th answer ========");
//  altitude(0)
// function altitude(feet){
//      let i=1000
// while(i>=feet){
//      if(i>=10){
//           console.log(".")
//      }else{
//           console.log("flight arrived")
//      }
//      i=i-10
// }
//  }
// // console.log("===========5th answer========");
// flight(4)
// function runaway(flight){

// switch(flight){
//     case 1:
//         console.log("runway"+flight);
//         break;
//     case 2:
//         console.log("runway"+flight);
//         break;
//     case 3:
//         console.log("runway"+flight);
//         break;
//     case 4:
//         console.log("runway"+flight);
//         break;
//     default:
//         console.log("invalide");
// }
// }
// console.log("===========6th answer========");


// let cars = ["Tesla", "BMW", "Toyota"];
// cars[1] = "Mercedes"; // Modifying the element at index 1
// console.log(cars); // Outputs: ["Tesla", "Mercedes", "Toyota


// let  fruits  =["mango","papaya","apple","grapes","kiwi"]
// console.log(fruits[3]) //grapes
// console.log(fruits[0]) //mango
// console.log(fruits[0]+","+fruits[4]) //mango,grapes
// console.log(fruits[5] )//undefined
// console .log (fruits.length) //5
// console.log(fruits[fruits.length-1] )// kiwi

// for(i=0;i<fruits.length;i++){
// console.log(fruits[i]); // mango
//                //     papaya
//                //     apple
//                //     grapes
//                //      kiwi

// }
// for(i=0;i<fruits.length;i++){
// if(i%2==0){ 
// console.log(fruits[i]);
// }

// }

// console.log("====================1st===================")
// function adding(num){
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     sum += num[i];
// }
// console.log(sum);
// }
// adding([1,2,3,4,5,6,7])
// console.log("=============2nd================")

// function adding(num){
//   add=digitSum(num);
//   console.log(add)
// }

// student=[
//    {
//     name:"shinchan",
//     age:5,
//     phoneNo:"3323232323",
// },
//    {
//      name:"nirom",
//      age:18,
//      phoneNo:"6380332454",
// }
// ]
// console.log(student);



// console.log("+====================================")

// students=[
//      {
//       name:"shinchan",
//       age:5,
//       phoneNo:"3323232323",
//   },
//      {
//        name:"nirom",
//        age:18,
//        phoneNo:"6380332454",
//   },
//      {
//           name:"nobita",
//           age:12,
//           phoneNo:"7845200257"
//      }
//   ]
//   console.log(student);

//   console.log("+====================================")
//   console.log(student[0].name);

//   console.log("+====================================")
//   console.log(students[2].name);

//   console.log("+====================================")
//   console.log(student[0].age)


//console.log("============================================")

// let vowel=["o","f","o","h","i"];
// adds=0;
// for(i=0;i<=vowel.length;i++){
// if(vowel[i]=="a"){
//    adds+= vowel[i];
// }else if(vowel[i]=="e"){
//     adds+= vowel[i];
// }else if(vowel[i]=="i"){
//     adds+= vowel[i];
// }else if(vowel[i]=="o"){
//     adds+= vowel[i];
// }else if(vowel[i]=="u"){
//     adds+= vowel[i];
// }

// }  

// console.log(adds.length-1)