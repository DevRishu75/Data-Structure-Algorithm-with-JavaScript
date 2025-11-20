// This is practice file for js//
// Whole stars//
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number : "));

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }
// Right angle Triangle of stars//
// for(let i =1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }
//Inverted Right angle Triangle//
// for(let i = 1; i<=n;i++){
//     for(let j=n;j>=i;j--){
//         process.stdout.write("*")
//     }
//     console.log();
// }

// Mirror Right angle triangle//
// for(let i=1;i<=n;i++){
//     for(let j= n;j>=i;j--){
//         process.stdout.write(" ")
//     }
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }
// Mirror Inverted Right anlge triangle//
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(" ")

//     }
//     for(let j=n;j>=i;j--){
//         process.stdout.write("*")
//     }
//     console.log();
// }
// X pattern from stars//
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i===j||i+j===(n+1)){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// for(let i=1;i<=n;i++){
//     for(let j= 1; j<=2*n;j++){
//         if(i===j||((i+j) ===(2*n))){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }
// Equilateral Triangle or Pyramid//
// for(let i=1;i<=n;i++){
//     for(let j=n;j>=i;j--){
//         process.stdout.write(" ")
//     }
//     for(let j=1; j<=i;j++){
//         process.stdout.write(" *")
//     }
//     console.log();
// }
//Hollow pyramid // with extra stars at the end

// for(let i=1;i<=n;i++){
//     for(let j=n; j>i;j--){
//     process.stdout.write(" ")
//     }
//     for(let j=1;j<=2*i-1;j++){
//         if(j==1||j==(2*i-1)){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }
// for(let i=1;i<2*n;i++){
//     process.stdout.write("*")
// }
// dual pyramid//
// for(let i=1;i<=n;i++){
//     for(let j=n;j>=i;j--){
//         process.stdout.write(" ");
//     }
//     for(let j=1;j<=2*i-1;j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }
// for(let i=n-1;i>=1;i--){
//     for(let j=n;j>=i;j--){
//         process.stdout.write(" ")
//     }
//     for(let j=2*i-1;j>=1;j--){
//         process.stdout.write("*")
//     }
//     console.log();
// }
// Min and Second min in an array//
// let arr = [10,58,45,89,65]
// let Fmin = Math.min(arr[0],arr[1])
// let Smin = Math.max(arr[0],arr[1])
// for(let i=2;i<arr.length;i++){
//     if(arr[i]<Fmin){
//         Smin = Fmin;
//         Fmin = arr[i];
//     }
//     else if(arr[i]<Smin || arr[i]==Smin){
//         Smin = arr[i];
//     }
// }
// console.log(Fmin)
// console.log(Smin)
// let arr = [10,58,45,89,65]
// let Fmax = Math.max(arr[0],arr[1]);
// let Smax = Math.min(arr[0],arr[1]);

// for(let i=2;i<arr.length;i++){
//     if(arr[i]>Fmax){
//         Smax = Fmax;
//         Fmax = arr[i];
//     }
//     else if(arr[i]>Smax && arr[i]!==Fmax){
//         Smax = arr[i];
//     }

// }
// console.log(Fmax)
// console.log(Smax)
// Swap with o and 1 
// let arr = [1,0,0,1,0,1,1,0,1,0];
// let j=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===0){
//         let temp = arr[j];
//         arr[j]=arr[i];
//         arr[i] = temp;
//         j++;
//     }
// }
// console.log(arr);
// rotating left side element//
// let arr = [1,5,4,6,8]
// let copy = arr[0];
// for(let i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1];
// }
// arr[arr.length-1] = copy;
// console.log(arr)
// rotating right side element//
// let copy = arr[arr.length-1];
// for(let i = arr.length-1;i>=0;i--){
//     arr[i] = arr[i-1];
// }
// arr[0]= copy;
// console.log(arr)
// by K element time rotating left and right //
// left firstly
let arr = [2,8,4,5,6];
let k = 2;
let copy = arr[0];
for(let j =1;j<=k;j++){
for(let i = 0;i<arr.length-1;i++){
    arr[i] =arr[i+1];
}
arr[arr.length-1] = copy;
copy++;
 }
console.log(arr)