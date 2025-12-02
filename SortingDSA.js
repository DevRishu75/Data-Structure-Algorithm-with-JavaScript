// Bubble sort//
// let arr = [15,5,12,1,2,6]

// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//         }
//     }

// }
// console.log(arr)
// Selection Sort //
// let arr  = [15,5,12,12,13,1,2,6,15]
// for(let i =0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[i]){
//             [arr[j],arr[i]] = [arr[i], arr[j]]
//         }
//     }
// }
// console.log(arr)
// let arr  = [15,5,12,12,13,1,2,6]
// for(let i =0;i<arr.length-1;i++){
//     let minindex = i;
//     for(let j=i+1;j<arr.length;j++){
//        if(arr[minindex]>arr[j]) minindex = j;
//     }
//     if(minindex != i){
//         let temp = arr[minindex]
//         arr[minindex] = arr[i]
//         arr[i] = temp
//     }
// }
// console.log(arr)

// Insertion sort//
// let arr = [15,2,1,12,14,15,6,5]

// for(let i =1;i<arr.length;i++){
//     let key = arr[i];
//     let j=i-1
// while(j>=0 && arr[j]>key){
//     arr[j+1] = arr[j]
//     j--
// }
// arr[j+1] = key
// }
// console.log(arr)
// Brute force Two sum//
// let arr = [5,4,3,9,2,8]
// let target = 12;
// for(let i=0;i<arr.length;i++){
//     for(let j= i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]===12){
//             console.log([i,j])
//         }
//     }
// }
// bubble sorting technique//
// let arr = [10,1,5,2,8,9]
// for(let i = 0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//         }
//     }
// }
// console.log(arr)
// Selection sorting>> My own way 
// let arr = [10,15,8,1,2,5,14]
// for(let i=0;i<arr.length;i++){
//     for(let j= i+1;j<arr.length;j++){
//         if(arr[j]<arr[i]){
//             [arr[j],arr[i]] = [arr[i],arr[j]]
//         }
//     }
// }
// console.log(arr)
// By Ali bhai way's
// let arr = [10,15,8,1,2,5,14]
// for(let i=0;i<arr.length;i++){
//     let minIndx = i;
//     for(let j= i+1;j<arr.length;j++){
//         if(arr[minIndx]>arr[j]) minIndx = j;
//     }
//     if(minIndx!=i){
//         let temp = arr[minIndx]
//         arr[minIndx] = arr[i]
//         arr[i] = temp // we are swapping the value of arr[i]  with the value we have inserted in minIndex from j 
//     }
// }
// console.log(arr)

// Insertion method//
// let arr = [10,15,4,2,8,12]
// for(let i=1;i<arr.length;i++){
//     let key = arr[i];
//     let j = i-1;
//     while(j>=0 && arr[j] >key){
//         arr[j+1] = arr[j]
//         j--
//     }
//     arr[j+1] = key
// }
// console.log(arr)
// 3sum//
// let arr =  [-1,0,1,2,-1,-4]

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         for(let k=j+1;k<arr.length;k++){
//             if(arr[j] + arr[i]+arr[k]===0){
//                 console.log([arr[i],arr[j],arr[k]])
//             }
//         }
//     }
// }
// // 
// let arr = [-2,0,5,-2,4]
//    let c = arr[0]
//     let max = 0;
// for(let i=0;i<arr.length-1;i++){
 
//     for(let j= i+1;j<arr.length;j++){
//         if(arr[j]<c){
//             c = arr[j];
//         }
//         if(arr[j] + arr[i] - c > max){
//             max = arr[j]+arr[i] -c
//         }
//     }
// }
// console.log(max)
// let strs = ["flower","flow","floght"];

// let pref = "";

// for (let i = 0; i < strs[0].length; i++) {
//     let char = strs[0][i];
//     console.log(char) // Acess the character of first string of strs 

//     for (let word of strs) {
//         if (word[i] !== char) {
//             console.log(pref);
//             return;
//         }
//     }

//     pref += char;
// }

// console.log(pref);
// 3Sum //
// let arr = [-1,0,1,2,-1,-4]
// arr.sort((a, b) => a - b);

  
// // console.log(newArr)
// for(let i=0;i<arr.length;i++){
//     if(arr[i] === arr[i+1]){
//         continue;
//     }
//   let j=i+1;
//     let k=arr.length-1
//     while(j<k){
//         if(arr[j]+arr[k]+arr[i]>0){
//             k--
//         }
//         else if(arr[j]+arr[k]+arr[i]<0){
//             j++
//         }
//         else{
            //   console.log([arr[i],arr[j],arr[k]])
//              j++;
//              k--;
             
//         }
       
//     }
   
// }
var threeSum = function(nums) {
    nums.sort((a,b)=> a-b);
    for(let i=0;i<nums.length;i++){
        let j=i+1;
        let k=nums.length-1;
        while(j<k){
            if(nums[i]+nums[j]+nums[k]>0){
                k--
            }
            else if(nums[i]+nums[j]+nums[k]<0){
                j++
            }
            else{
                return [[nums[i],nums[j],nums[k]]]
                j++;
                k--;
            }
        }
    }
}
threeSum([-1,0,1,2,-1,-4])