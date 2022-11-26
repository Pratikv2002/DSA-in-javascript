// Binary Search problem
let arr = [0,0,1,1,2,2,3,3,3,4,5,6,6,6];
var firstOccurance = (arr, key1) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(start + (end - start) / 2);
  let ans = -1
  while (start <= end) {
    if (arr[mid] == key1) {
      ans = mid
      end = mid - 1;
    } else if (arr[mid] < key1) {
      start = mid + 1;
    } else if (arr[mid] > key1) {
      end = mid - 1;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  return(ans)
};
var lastOccurance = (arr, key1) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor(start + (end - start) / 2);
    let ans = -1
    while (start <= end) {
      if (arr[mid] == key1) {
        ans = mid
        start = mid + 1;
      } else if (arr[mid] < key1) {
        start = mid + 1;
      } else if (arr[mid] > key1) {
        end = mid - 1;
      }
      mid = Math.floor(start + (end - start) / 2);
    }
    return(ans)
  };
// console.log(firstOccurance(arr, 0));
// console.log(lastOccurance(arr, 0));

var totalOccurance = (first,last) =>{
     return last - first + 1
}
console.log(totalOccurance(firstOccurance(arr,1),lastOccurance(arr,1)))