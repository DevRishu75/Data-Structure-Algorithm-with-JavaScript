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
// Right rotation by k 
// for(let j= 1;j<=k;j++){
//     let copy = arr[arr.length-1];
//     for(let i = arr.length-1;i>=1;i--){
//         arr[i] = arr[i-1];
//     }
//     arr[0] = copy;
// }
// console.log(arr)
// Remove duplicate elements from an array//
// let arr = [0,0,1,1,1,2,2,3,3,4]
// let j =1;
// let i =0;
// while(i<arr.length-1){
//     if(arr[i]!=arr[i+1]){
//         arr[j] = arr[i+1]
//         j++
//     }
//     i++;
    
// }
// console.log(arr)
// Best time to buy stock and sell//
// let arr = [7,4,1,5,2,8]
// let minPrice = arr[0];
// let maxProf = 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i] < minPrice){
//         minPrice = arr[i]
//     }
//    else if(arr[i]-minPrice>maxProf){
//         maxProf = arr[i] -  minPrice
//     }
// }
// console.log(maxProf)
// Strong Number //
// let n = 285;
// let sum = 0;
// let temp = n

// while(n >0){
//     let f = 1;
//     rem = n%10;
    
//     for(let i = 1;i<=rem;i++){
//         f = f*i;
      
//     }
//      sum+=f;
     
//     n = Math.floor(n/10);
// }
// if(sum === temp){
//     console.log("This is a strong number ", sum)
// }
// else{
//     console.log("Sorry the sum is not equal to number ", sum)
// }




