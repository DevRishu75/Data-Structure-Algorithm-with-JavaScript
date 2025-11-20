// let's practice what we have learnt again'//
// whole stars//
// let prompt = require('prompt-sync')();
// let n = Number(prompt("Enter a number :  "))
// for(let i =1;i<=n;i++ ){
//     for(let j=1;j<=n;j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }
// Right Angle Tringle//
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }
// Inverted Right angle Triangle//
// for(let i=1;i<=n;i++){
//     for(let j=n;j>=i;j--){
//         process.stdout.write("*")
//     }
//     console.log();
// }
// Mirror right angle Triangle//
// for(let i=1;i<=n;i++){
//     for(let j=n;j>=i;j--){
//         process.stdout.write(" ")
//     }
   
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*");
//     }
//     console.log();
// }
// pyramid pattern//
// for(let i=1;i<=n;i++){
//     for(let j=n;j>=i;j--){
//         process.stdout.write(" ");
//     }
//     for(let j=1;j<=i;j++){
//         process.stdout.write(" *")
//     }
//     console.log();
// }
// // pyramid from up and down //
// for(let i=1;i<=n;i++){
//     for(let j=n;j>=i;j--){
//         process.stdout.write(" ")
//     }
//     for(let j=1;j<=(2*i-1);j++){
//         process.stdout.write("*")
//     }// Upper part
//     console.log();
// }
// for(let i=n-1;i>=1;i--){
//     for(let j=n;j>=i;j--){
//         process.stdout.write(" ");
//     }
//     for(let j=2*i-1;j>=1;j--){
//         process.stdout.write("*")
//     }
//     console.log();
// }
// More Optimized way to rotate an array//
// left rotation//
// let arr = [1,2,3,4,5]
// let prompt = require('prompt-sync')();
// let k = Number(prompt("Enter number you want to rotate the array: "));
//  k= k%arr.length;
// Reverse(0,k-1);
// Reverse(k,arr.length-1);
// Reverse(0,arr.length-1);

// console.log(arr)
// function Reverse(i,j){
//     while(i<j){
//         let temp = arr[i];
//          arr[i] =  arr[j];
//          arr[j] = temp;
//          i++;
//          j--;

//     }

// }
// Right rotation  Rotate
// Reverse(0,arr.length-1);
// Reverse(0,k-1);
// Reverse(k,arr.length-1);

// console.log(arr)
// function Reverse(i,j){
//     while(i<j){
//         let temp = arr[i];
//          arr[i] =  arr[j];
//          arr[j] = temp;
//          i++;
//          j--;

//     }

// }
// Leet code Remove duplicates from the sorted Arrays//
// let arr = [0,0,1,1,1,2,2,3]
// function RemoveDuplicate(){
//     let j = 1;
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]!==arr[i+1]){
//             arr[j]=arr[i+1];
//             j++;
//         }
//     }
//     return j;
// }
// console.log(RemoveDuplicate())

// Merge Two sorted Array//
// let arr1 = [2,4,5,8,9]
// let arr2 = [1,3,4,8]
// let merge = new Array(arr1.length+arr2.length)
// let i = 0;
// let j = 0;
// let k = 0;
// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         merge[k] = arr1[i];
//         i++;
//     }
//     else if(arr2[j]<arr1[i]){
//         merge[k] = arr2[j];
//         j++;
//     }
//     else{
//         merge[k++]= arr2[j++];
//         merge[k]=arr1[i++];
//     }
//     k++;
// }
// while(j<arr2.length){
//     merge[k++] = arr2[j++]
// }
// while(i<arr1.length){
//     merge[k++] = arr1[i++]
// }
// console.log(merge)


// merge two sorted array // in array one//
// let arr1 = [1,2,3,0,0,0]
// let arr2 = [2,5,8]
// let i = 2
// let j = arr2.length-1
// let k = arr1.length-1
// function MergeArray(){
//     while(j>=0 && i>=0){
//         if(arr1[i]>arr2[j]){
//             arr1[k--]=arr1[i--]
//         }
//       else {
//             arr1[k--] = arr2[j--]; // handles arr2[j] >= arr1[i]
//         }
        
//     }
//     while(j>=0){
//         arr1[k--] = arr2[j--]
//     }
//     return arr1
// }
// console.log(MergeArray())
// Remove Duplicates from sorted Array
// let arr = [0,0,1,1,2,2,3]
// let j=1;
// for(let i =0;i<arr.length-1;i++){
//     if(arr[i]!==arr[i+1]){
//         arr[j]=arr[i+1];
//         j++
//     }
    
// }
// console.log(arr)
// console.log(j)
// Merge two sorted Array using another Array//
// let arr1 = [2,4,8,9]
// let arr2 = [4,5,9,10]
// let merge = new Array(arr1.length+arr2.length);
// let i = 0;
// let j = 0;
// let k = 0;
// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         merge[k] = arr1[i];
//         i++;
//     }
//     else if(arr2[j]<arr1[i]){
//         merge[k]=arr2[j];
//         j++;
//     }
//     else{
//         merge[k++] = arr1[i++]
//         merge[k] = arr2[j++] 
//     }
//     k++;
// }
// while(i<arr1.length){
//     merge[k++] = arr1[i++]
// }
// while(j<arr2.length){
//     merge[k++] = arr2[j++]
// }
// console.log(merge)

// Merge two sorted Array without new array first array //
// let arr1 = [2,4,8,9]
// let arr2 = [4,5,9,10]
// let i = arr1.length-1
// let j = arr2.length-1
// let k = arr1.length + arr2.length -1;

// while(i>=0 &&j>=0){
// if(arr1[i]>arr2[j]){
//     arr1[k] = arr1[i]
//     i--
// }
// else if(arr2[j]>arr1[i]){
//     arr1[k] = arr2[j]
//     j--
// }
// else{ 
//     arr1[k--] = arr1[i--]
//     arr1[k] = arr2[j--]
// }
// k--
// }
// while(j>=0){
//     arr1[k--] = arr2[j--] 
// }
// console.log(arr1)
// Intersection of Two sorted Array//

// let inter = [];
// let i = 0;
// let j = 0;
// let k = 0;
// while(i<arr1.length&&j<arr2.length){
//     if(arr1[i]===arr2[j]){
//         inter[k++] = arr1[i]
//         j++;
//     }
//     i++;
  
// }
// console.log(inter)
// let union = [];
// let i = 0;
// let j = 0;
// let k = 0;

// while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//         if (k === 0 || arr1[i] !== union[k - 1]) {
//             union[k++] = arr1[i];
//         }
//         i++;
//     } 
//     else if (arr2[j] < arr1[i]) {
//         if (k === 0 || arr2[j] !== union[k - 1]) {
//             union[k++] = arr2[j];
//         }
//         j++;
//     } 
//     else {
//         if (k === 0 || arr1[i] !== union[k - 1]) {
//             union[k++] = arr1[i];
//         }
//         i++;
//         j++;
//     }
// }

// while (i < arr1.length) {
//     if (k === 0 || arr1[i] !== union[k - 1]) {
//         union[k++] = arr1[i];
//     }
//     i++;
// }

// while (j < arr2.length) {
//     if (k === 0 || arr2[j] !== union[k - 1]) {
//         union[k++] = arr2[j];
//     }
//     j++;
// }



// console.log(union)
//Buy and sell stock //
// let arr = [7,1,4,5,6];
// let minPrice =arr[0];
// let maxprofit = 0;
// for(let i =1; i<arr.length;i++){
//     if(arr[i]<minPrice){
//         minPrice = arr[i]
//     }
//     else if(arr[i]-minPrice>maxprofit){
//         maxprofit = arr[i] - minPrice;
//     }
// }
// console.log(maxprofit)
// Buy and sell stock || 2nd
