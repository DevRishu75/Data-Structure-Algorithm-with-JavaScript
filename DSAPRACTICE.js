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
// Recursion 1 to n natural number//
// function NaturalNum(n){
//     if(n===0)return n;
    
//     NaturalNum(n-1)
//     console.log(n)
    
// }
// console.log(NaturalNum(10))
// fibonacci sum of nth number//

// function fibo(n){
//     if(n==1 || n==0) return n;
//     return fibo(n-1) + (n-2)
// }
// console.log(fibo(6))
// fibonacci series//
// function fibo(n,first,second){
//     if(n==0)return ;
//     let third = first+second;
//     process.stdout.write(third+" ")
//     return fibo(n-1,second,third)
// }
// let n =10;
// process.stdout.write(0+" "+1+" ")
// console.log(fibo(n-2,0,1))
// Reverse an array usign recursion//
// let arr = 
// function Reverse(arr,i=0,j=arr.length-1){
//     if(i>=j) return arr;
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     return Reverse(arr,i+1,j-1)
// }
// console.log(Reverse([1,2,5,68,7,6]))
// Fibonacci series//
// function fibo(n,first,second){
//     if(n===0) return;
//     let third = first + second;
//     process.stdout.write(third+" ")
//     return fibo(n-1,second,third);
// }

// let n=10;
// process.stdout.write(0+" "+1+" ");
// console.log(fibo(n-2,0,1))

// fibonacci nth term sum//
// function fibo(n){
//     if(n==0 || n==1) return n;
//     return fibo(n-1) +(n-2);
// }
// console.log(fibo(5))
// functio POW//
// function temp(x,n){
//     if(n==0) return 1;
//     let ans = temp(x,parseInt(n/2));
//     if(n%2==0) return ans*ans;
//     else return ans*ans*x;
// }
// function POW(x,n){
//     if(n===0) return 1;
//     let ans = temp(x,n);
//     return n<0?1/ans:ans
// }
// console.log(POW(2,5))
// sqrt//
// checking the square root using the Binary search algo//
// let a = 10;
// function SQRT(a){
//     let first = 0;
//     let last = a/2;
//     while(first<=last){
//         let mid = Math.floor((first+last)/2);
//         let sq = mid*mid;
//         if(sq===a) return mid;
//         else if(sq>a){
//             last = mid-1;
//         }
//         else if(sq<a){
//             first = mid+1;
//         }

//     }
//     return last;
// }
// console.log(SQRT(625))
// Merge Sort//
// Divide and Conquor/
// function Merge(arr,first,last,mid){
//     let i= first;
//     let j = mid+1;
//     let temp = new Array(last-first+1);
//     let k = 0;
//     while(i<=mid && j<=last){
//         if(arr[i]<arr[j]){
//             temp[k] = arr[i];
//             i++;
//             k++;
//         }
//         else if(arr[i]>arr[j]){
//             temp[k]= arr[j];
//             k++;
//             j++;
//         }
//         else{
//             temp[k++]= arr[i++];
//             temp[k++] = arr[j++];
//         }
//     }
//     while(i<=mid){
//         temp[k++] = arr[i++];
//     }
//     while(j<=last){
//         temp[k++] = arr[j++];
//     }
//     let p = 0;
//     let t = first;
//     while(t<temp.length){
//         arr[p++] = temp[t++];
//     }
// }

// function Divide(arr,first,last){
//     if(first>=last) return;
//     let mid = Math.floor((first+last)/2);
//     Divide(arr,first,mid);
//     Divide(arr,mid+1,last);
//     Merge(arr,first,last,mid);
// }
// let arr = [1,2,8,9,4,5,12,20]
// Divide(arr,0,arr.length-1)
// console.log(arr)
// Quick Sort//
// pivot and partition//
// function FindPivot(arr,first,last){
//     let pivot = arr[first];
//     let i = first+1;
//     let j = last;
//     while(i<=j){
//         while(i<=last && arr[i]<=pivot) i++;
//         while(j>=first && arr[j]>pivot) j--;
//         if(i<j){
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         }
//     }
//     [arr[j],arr[first]] = [arr[first],arr[j]]
//     return j;
// }
// function partition(arr,first,last){
//     if(first>=last) return;
//     let pivotIND = FindPivot(arr,first,last);
//     partition(arr,first,pivotIND-1);
//     partition(arr,pivotIND+1,last);
// }
// partition(arr,0,arr.length-1);
// console.log(arr)
// cyclic sort//
// let arr =[1,4,5,6,2,3,7,8];

// function Cyclic(arr){
//     for(let i=0;i<arr.length;){
//         let correctInd = arr[i]-1;
//         if(arr[i]===arr[correctInd]){
//             i++;
//         }
//         else{
//             [arr[i],arr[correctInd]] = [arr[correctInd],arr[i]]
//         }
//     }
//     return arr;
// }
// console.log(Cyclic(arr))
// Book Allocation pages minimum//
// function isValid(arr,k,mid){
//     let numstudent = 1;
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//          if (arr[i] > mid) return false;
//         if(arr[i]+sum>mid){
//             numstudent++;
//             sum = arr[i];
//         }
//         else{
//             sum+=arr[i];
//         }
//         if(numstudent>k) return false;
//     }
//     return true;
// }
// function findPages(arr,k){
//     if(arr.length<k) return -1;
//     let first = 0;
//     let last = 0;
//     let ans = -1;
//     for(let i=0;i<arr.length;i++){
//          first = Math.max(arr[i],first);
//         last = last+arr[i];
//     }
//     while(first<=last){
//         let mid = Math.floor((first+last)/2);
//         if(isValid(arr,k,mid)){
//             ans = mid;
//             last = mid-1;
//         }
//         else{
//             first = mid+1;
        
//         }

//     }
//     return ans;
// }
// let arr = [2,5,7,3,8]
// console.log(findPages(arr,2))
