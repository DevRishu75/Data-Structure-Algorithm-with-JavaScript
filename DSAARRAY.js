// let arr = [];
// arr.push(100);
// arr.push(10);
// arr.push(20)
// arr.pop(); // last element remove
// arr[0] = 20;
// arr[1] = 68;
// arr[5] = 98; // it will create 3 empty items// This only happens in JavaScript
// // console.log(arr); 

// let arr = new Array (3);
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 40;
// arr[3] = 40; // yet we have given (3) as size but there is nothing fixed in JavaScript // Array is Dynamic in JavaScript// 
// console.log(arr)
//WE SHOULD USE INDEX TO ASSIGN VALUE WE SHOULD NOT USE PUSH FUNCTION //

// let arr = new Array (3);
// arr.push(10);
// console.log(arr) // we wil see that 100 is on the 3rd index

// Taking value from prompt and put into an array//
// let arr = [];

// for(let i = 0; i<=5;i++){
// let ans = Number(prompt("Enter a number "));
// arr[i] = ans;
// }
// console.log(arr);
// 1 to n number sum
// let arr = [10,20,30,40,50];
// let sum = 0;
// for(let i =0;i<arr.length;i++){
//     sum = sum + arr[i];
// }
// console.log(sum)

// Maximum Element 
// let arr = [90,50,80,100,15,15,15,85];
// let maximum = arr[0]; // MAAN LIYA KI 0TH INDEX ELEMENT SBSE BADA HAI 
// for(let i = 1; i<arr.length;i++){ // TO LOOP 1ST INDEX SE CHLEGA//
//     if(maximum<arr[i]){ // AGAR CURRENT ELEMENT MAX SE BADA HAI TO MAXIMUM ME CURRENT ELEMENT DAL DO
//         maximum = arr[i];
//     }

// }
// console.log(maximum)
// Let minumum element  //
// let minimum = arr[0];
// for(let i = 1; i<arr.length;i++){
//     if(minimum>arr[i]){
//         minimum = arr[i]
//     }
// }
// console.log(minimum)
// SECOND MAXIMUM ELEMENT//
// let maxone = 0;
// let maxsecond =0;

// for(let i = 0; i<arr.length;i++){
//     if(arr[i]>maxone){
//         maxsecond = maxone; //firstly we should update maxsecond so that we can get maxone value to maxsecond before updating the value of maxone
//         maxone = arr[i]
//     }
//     else if(arr[i]>maxsecond && arr[i]!== maxone){
//         maxsecond = arr[i]
//     }
// }

// console.log(maxone)
// console.log(maxsecond)

// second minimum//
// let Fmin = Math.min(arr[0],arr[1]);
// let Smin = Math.max(arr[0],arr[1]);
// for(let i = 2;i<arr.length;i++){
//     if(arr[i]<Fmin ){
//         Smin = Fmin;
//         Fmin = arr[i];
//     }
//     else if(arr[i]<Smin && arr[i]!==Fmin){
//         Smin = arr[i]
//     }
//     // else{
//     //     Smin = arr[1];
//     // }
   
// }
// console.log(Fmin)
// console.log(Smin)
let arr = [90,50,80,100,15,15,15,85];
// let rever =[];
// let j = 0; // take it as index for rever array
// for(let i = arr.length-1;i>=0;i--){
// rever[j] = arr[i];
// j++;
//     // console.log(arr[i])
//     // rever.push(arr[i])
// }
// // // console.log(arr)
// console.log(rever)
console.log(arr.reverse())

