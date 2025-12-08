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
// Bubble sort //
// let arr = [1,8,4,9,5,7,12]
// let n = arr.length;
// for(let i=1;i<n-1;i++){
//     for(let j=0;j<n-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//         }
//     }
// }
// console.log(arr)
// Selection Sort//
// let arr = [9,8,4,1,5,17,12]
// for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[i]){
//             [arr[j],arr[i]] = [arr[i],arr[j]]
//         }
//     }
// }
// console.log(arr)
// Insertion Sort//
// let arr =[9,8,4,1,5,7,12]

// for(let i=1;i<arr.length;i++){
//     let key = arr[i];
//     let j=i-1;
//     while(j>=0 && arr[j]>key){
//         arr[j+1] = arr[j]
//         j--
//     }
//     arr[j+1] = key
// }
// console.log(arr)
// Merge Sort//
// function Merge(arr,first,mid,last){
//     let i=first;
//     let j=mid+1;
//     let k=0;
//     let temp = new Array(last-first+1);
//     while(i<=mid&&j<=last){
//         if(arr[i]<arr[j]){
//             temp[k] = arr[i]
//             k++;
//             i++
//         }
//         else if(arr[i]>arr[j]){
//             temp[k] = arr[j]
//             k++;
//             j++;
//         }
//         else{
//             temp[k++] = arr[j++];
//             temp[k++] = arr[i++];
//         }
//     }
//     while(i<=mid){
//         temp[k++] = arr[i++]
//     }
//     while(j<=last){
//         temp[k++] = arr[j++]
//     }
//     let p=0;
//     let t=first;
//     while(p<temp.length){
//         arr[t++] = temp[p++]
//     }
// }
// function divide(arr,first,last){
//     if(first>=last) return;
//     let mid = Math.floor((first+last)/2)
//     divide(arr,first,mid)
//     divide(arr,mid+1,last)
//     Merge(arr,first,mid,last)
// }
// let arr = [1,4,8,7,9,12,5,6,25]
// divide(arr,0,arr.length-1)
// console.log(arr)
// Quick Sort//
// function findPivot(arr,first,last){
//     let pivot = arr[first]
//     let i=first+1;
//     let j=last;
//     while(i<=j){
//         while(i<=last&&arr[i]<=pivot) i++;
//         while(j>=first&&arr[j]>pivot)j--;
//         if(i<j){
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         }
//     }
//     [arr[j],arr[first]] = [arr[first],arr[j]]
//     return j;
// }
// function partition(arr,first,last){
//     if(first>=last) return;
//     let pvInd = findPivot(arr,first,last)
//     partition(arr,first,pvInd-1);
//     partition(arr,pvInd+1,last);
// }
let arr = [1,4,8,7,9,12,5,6,25]
// partition(arr,0,arr.length-1)
// console.log(arr)
// Binary Search//
// function BinarySearch(target){
//     let first = arr[0];
//     let last = arr.length-1;
   
//     while(last>=first){
//          let mid = Math.floor((first+last)/2);
//         if(arr[mid]===target) return mid;
//         else if(arr[mid]>target){
//             last = mid-1;
//         }
//         else {
//             first = mid+1;
//         }
//     }
//     return `${target} not in array`
// }
// console.log(BinarySearch(8))
// Recursive mode //
// function binarySearch(arr,target,first,last){
//     if(last<=first) return -1;
//     let mid = Math.floor((first+last)/2);
//     if(arr[mid]===target){
//         return mid;
//     }
//     else if(arr[mid]>target){
// return binarySearch(arr,target,first,mid-1)
//     }
//     else if(arr[mid]<target){
//        return binarySearch(arr,target,mid+1,last)
//     }
// }
// console.log(binarySearch(arr,8,0,arr.length-1,))

// POW //
// function POW(x,n){
//     if(n==0) return 1;
//     let ans = temp(x,n)
//     return n<0 ?1/ans : ans
// }
// function temp(x,n){
//     if(n==0) return 1;
//     let ans = temp(x,parseInt(n/2));
//     if(n%2==0){
//         return ans*ans
//         }
//         else {
//            return  ans*ans*x
//         }
// }
// console.log(POW(2,10))

// Sqrt //
// function Sqrt(x){
//     let first = 0;
//     let last = Math.floor(x/2);
//     while(last>=first){
//         let mid = Math.floor((first+last)/2)
//         let pow = mid*mid
//         if(pow===x) return mid;
//         else if(pow<x){
//             first = mid+1
//         }
//           else if(pow>x){
//             last = mid-1;
//         }
//     }
//     return last;
// }
// console.log(Sqrt(10))
// SQRT using Recursion//
// function Sqrt(x,first,last = Math.floor(x/2)){
//     if(last<first) return last;
//     let mid = Math.floor((first+last)/2);
//     let pow = mid*mid
//     if(pow==x) return mid;
//     else if(pow<x){
//         return Sqrt(x,mid+1,last)
//     }
//     else if(pow>x){
//         return Sqrt(x,first,mid-1);
//     }
// }
// console.log(Sqrt(18,0))
