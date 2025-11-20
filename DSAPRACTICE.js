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
// Merge Two sorted  arrays into arr1//
// let arr1 = [1,2,2,3,4,5]
// let arr2 = [2,3,8,9]
// let m = arr1.length;

// let i = m-1;
// let j = arr2.length-1;
// arr1.length = arr2.length + arr1.length;
// let k = arr1.length-1
// while(i>=0&&j>=0){
//     if(arr1[i]>arr2[j]){
//         arr1[k--] = arr1[i--]
//     }
//     else if(arr2[j]>arr1[i]){
//         arr1[k--] = arr2[j--]
//     }
//     else{
//         arr1[k--] = arr1[i--];
//         arr1[k--] = arr2[j--];
//     }

// }
// while(i>=0){
//     arr1[k--] = arr1[i--]
// }
// while(j>=0){
//     arr1[k--] = arr2[j--]
// }
// let result = arr1.slice(k+1);
// console.log(result)
// Buy and sell Stock 2nd ||//
// let arr = [7,1,4,3,8,9,2,5];
// let minPrice = arr[0];
// let profit = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//         // price drops → reset buying point
//         minPrice = arr[i];
//     } else {
//         // price goes up → sell and rebuy at same price
//         profit += arr[i] - minPrice;
//         minPrice = arr[i];
//     }
// }

// console.log(profit);
// Sort Color//
// let arr = [0,2,1,0,1,0,2,1,1]
// let i =0;
// let j =0;
// let k = arr.length-1;
// while(i<=k){
//     if(arr[i]===0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j++;
//     }
//     else if(arr[i]===2){
//         let temp = arr[i]
//         arr[i] = arr[k]
//         arr[k] = temp
//         k--;
//     }
//     else{
//         i++;
//     }
// }
// console.log(arr)

// Maximum Subarray//Kadane's Algorithm
// let arr = [-2,3,-5,2,8,5,-2,6]
// let sum = 0;
// let maxSum = -Infinity;
// for(let i =0; i<arr.length;i++){
//     sum+=arr[i];
//     if(sum>maxSum){
//         maxSum = sum;
//     }
//     if(sum<0){
//         sum = 0;
//     }
// }
// console.log(maxSum)
// // Majority Sum // moor 'voting Elements//
// let arr = [2,2,1,1,1,2,2,1,2,1,1]
// let ans = arr[0];
// let count = 0;

// for(let i =0; i<arr.length;i++){
//     if(arr[i]===ans){
//         count++;
//     }
//     else if(count===0){
//         ans = arr[i];
//         count = 1;
//     }
//     else{
//         count--;
//     }
// }
// console.log(ans)
// left Rotation by K element//
// let arr = [2,4,5,1,3,9]
// let k = 8
// k = k%arr.length;
// // left Rotation //
// // Reverse(0,k-1);
// // Reverse(k,arr.length-1);
// // Reverse(0,arr.length-1)
// // console.log(arr)
// // Right Rotation//
// Reverse(0,arr.length-1)
// Reverse(0,k-1);
// Reverse(k,arr.length-1);

// console.log(arr)
// // for(let i =1;i<=k;i++){
//     let copy = arr[0];
//     for(let j = 1; j<arr.length;j++){
//         arr[j-1] = arr[j];
//     }
//     arr[arr.length-1] = copy;
// }
// console.log(arr)
// left Rotatation by reversal
// function Reverse(i,j){
//     while(i<j){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp;
//         i++;
//         j--
//     }
// }

// Tapping water //
// let arr = [1,0,5,8,6,7,2,9]
// let arr = [4,2,0,3,2,5]

// let right = new Array(arr.length)
// let left = new Array(arr.length)
// let leftMax = arr[0];
// let rightMax = arr[arr.length-1];
// right[right.length-1] = rightMax
// left[0] = leftMax

// for(let i =1;i<arr.length;i++){
//     leftMax = Math.max(arr[i],leftMax)
//     left[i] = leftMax;
// }
// for(let i = arr.length-2;i>=0;i--){
//     rightMax = Math.max(arr[i], rightMax)
//     right[i] = rightMax;
// }
// let ans = 0;
// for(let i = 0;i<arr.length;i++){
//     ans += Math.min(left[i],right[i]) - arr[i]
// }
// console.log(ans)












