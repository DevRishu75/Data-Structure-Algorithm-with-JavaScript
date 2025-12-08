// let arr = [1,5,9,16,58,87,92,111,125]

// function BinarySearch(target){
//     let first = 0;
//     let last = arr.length-1;
//     while(last>=first){
//     let mid = Math.floor((first+last)/2);
//         if(target===arr[mid]) return mid;
//          else if(target>arr[mid]){
//         first = mid+1;
//     }
//     else {
//         last = mid-1;
//     }
//     }
//    return `${target} not found`
// }
// console.log(BinarySearch(100))
// console.log("Haryy")
// Recursive method//
// function BinarySearch(arr,target,first=0,last=arr.length-1,){
//     if(last<first) return -1;
//     let mid = Math.floor((first+last)/2);
//     if(arr[mid]===target){
//         return mid;
//     }
//     else if(arr[mid]<target){
//         return BinarySearch(arr,target,mid+1,last,)
//     }
//     else if(arr[mid]>target){
//         return BinarySearch(arr,target,first,mid-1,)
//     }
// }
// console.log(BinarySearch([1,5,9,16,58,87,92,111,125],111))
// For Java and C++//
// we use mid = f+(l-f)/2 to get the mid vlaue // 
// we use it to fetch a single data from a grand sum of data//
