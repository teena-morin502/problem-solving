// // array rotations
// function rotLeft(a, d) {
//   for (let i = 0; i <= d - 1; i++) {
//     a.push(a[0]);
//     a.shift();
//     console.log(a);
//   }
// }
// rotLeft([1, 2, 3, 4, 5], 3);
// console.log("=======================================");

// //remove dublicates from string

// function str(s) {}
// str("aaabbcccad");
// console.log("=======================================");

// //isarray

// function arr(s) {
//   let result = [];
//   for (let i = 0; i <= s.length - 1; i++) {
//     if (Array.isArray(s[i])) {
//       result = [...result, ...s[i]];
//     } else {
//       result = [...result, s[i]];
//     }
//   }
//   console.log(result);
// }
// arr([[1, 2, 3], 45, [4, 5, 6], [7, 8, 9]]);

//hr:min(palindrome)

function palindrome(hr, min) {
while(true){
  let hour=hr<10?"0"+hr:""+hr;
  let minute=min<10?"0"+min:""+min;
  let time=hour+minute;
   if(time[0]===time[3]&&time[1]===time[2]){
    return hour+":"+minute;

   }
   min++;
   if(min===60){
    hr++;
    min=0;
    if(hr=24){
      hr=0;
    }
   }
}
  
}
console.log(palindrome(14,15));
