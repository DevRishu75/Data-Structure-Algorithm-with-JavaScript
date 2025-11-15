// This is practice file for js//
// Whole stars//
let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number : "));

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


