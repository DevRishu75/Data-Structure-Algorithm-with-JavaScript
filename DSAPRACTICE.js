// ARRay practice//
// max and second max
// let arr = [10,20,54,86,96,87,265]
// let maxone = Math.max(arr[0],arr[1])
// let maxsec = Math.min(arr[0],arr[1]);

// for(let i =2;i<arr.length;i++){
//     if(arr[i]>maxone){
//         maxsec = maxone;
//         maxone = arr[i];
//     } 
//     else if(arr[i]>maxsec && arr[i]!==maxone){
//         maxsec = arr[i]
//     }
// }
// console.log(maxone)
// console.log(maxsec)
// Reverse the array//
// let arr = [10,20,45,85,69,82]
// let i = 0;
// let j = arr.length-1;
// while(i<=j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] =  temp;
//     i++;
//     j--
// }
// console.log(arr)
// Remove negative to the left positive to the right//
// let arr = [-10,-20,30,50,86,-50,90]
// let i = 0;
// let j = 0;
// while(i<arr.length){
//     if(arr[i]<0){
//         let temp = arr[i]
//         arr[i] =  arr[j]
//         arr[j] = temp;
//         j++;
//     }
//     i++;
// }
// console.log(arr)
// left rotation by k element//
// // Using brute force//

// let arr = [1,4,5,8,9]
// let k = 8;
// k = k%arr.length;

// for(let j= 1;j<=k;j++){
//     let copy = arr[0];
//     for(let i=0;i<arr.length;i++){
//         arr[i] = arr[i+1];
//     }
//     arr[arr.length-1] = copy;
// }
// console.log(arr)

// }
// Right rotation by k Element//
// let arr = [1,4,5,8,9]
// let k = 9;
// k = k%arr.length;

// for(let i=1;i<=k;i++){
//     let copy = arr[arr.length-1];
//     for(let j=arr.length-1;j>=1;j--){
//         arr[j] = arr[j-1];
//     }
//     arr[0]=copy;
// }
// console.log(arr)
// Remove duplicate Elements from Sorted Arrays//
// let arr = [0,0,1,1,2,2,3,4,4,5]
// let i=0;
// let j=1;
// while(i<arr.length-1){
//     if(arr[i]!=arr[i+1]){
//         arr[j]=arr[i+1]
//         j++
//     }
//     i++;
// }

// console.log(arr)
// // Best time to buy and sell stock//
// let arr = [7,1,4,5,8,9]
// let minPrice = arr[0];
// let maxProfit = 0;

// for(let i=1;i<arr.length;i++){
//     if(arr[i]<minPrice){
//         minPrice = arr[i];
//     }
//     else if(arr[i]-minPrice>maxProfit){
//         maxProfit = arr[i]-minPrice;

//     }
// }
// console.log(maxProfit)
//Best time to buy and sell stock ||//
// let arr = [1,7,2,8,9]
// let profit =0;
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i+1]>arr[i]){
//         profit+=arr[i+1] -arr[i]
       
//     }
   
// }
// console.log(profit)
// Sort the color//
// let arr =[0,1,0,2,0,1,2,1,2];
// let i =0;
// let j=0;
// let k=arr.length-1;
// while(i<k){
//     if(arr[k]===2){
//         k--;
//     }
//     else if(arr[i]===0){
//         [arr[j],arr[i]] = [arr[i],arr[j]]
//         i++;
//         j++;
//     }
//     else if(arr[i]===2){
//         [arr[k],arr[i]] = [arr[i],arr[k]]
//         k--;
//     }
//     else{
//         i++;
//     }

// }
// console.log(arr)
// Kadane'sAlgorithm//

// let arr = [-2,5,-9,8,7,-8,9,5,7]
// let sum =0;
// let maxsum = 0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
//     if(sum>maxsum){
//         maxsum = sum;
//     }
//     if(sum<0){
//         sum =0;
//     }
// }
// console.log(maxsum)
// Majority voting //
// let arr  = [1,1,1,2,2,2,1,1,2,2,2]
// let count = 1;
// let ans = arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]===ans){
//         count++;
//     }
//     else {
//         count--
//     }
//     if(count<0){
//         ans = arr[i]
//     }
// }
// console.log(ans)
// Bubble Sort //
// let arr = [10,50,40,35,60];
// let n = arr.length;
// for(let i=0;i<n-1;i++){
//     for(let j=0;j<n-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//         }
        
//     }
// }
// console.log(arr)
// selection Sort//
// let arr = [10,45,12,15,58]

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[i]){
//             [arr[j],arr[i]] =  [arr[i],arr[j]]
//         }
//     }
// }
// console.log(arr)
// ALi bhai selection Sort
// let arr = [10,45,12,15,58]

// for(let i=0;i<arr.length;i++){
//     let min = i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[min]){
//             min = j
//         }
//     }
//     if(min!=i){
//         let temp = arr[min]
//         arr[min] = arr[i]
//         arr[i] = temp
//     }
// }
// console.log(arr)
// Tapping Rain Water question//
let arr = [1,4,0,2,3,1,6]
let right = new Array(arr.length);
let left = new Array(arr.length);
let rightmax = arr[arr.length-1];
let leftmax = arr[0];
right[right.length-1] = rightmax;
left[0] = leftmax;

for(let i=1;i<arr.length;i++){
    if(arr[i]>leftmax){
        leftmax = arr[i]
    }
    left[i] = leftmax;
}
for(let i=arr.length-2;i>=0;i--){
    if(arr[i]>rightmax){
        rightmax = arr[i]
    }
    right[i] = rightmax
}
let ans = 0;
for(let i=0;i<arr.length;i++){
    ans+= Math.min(right[i],left[i]) - arr[i]
}
console.log(ans)