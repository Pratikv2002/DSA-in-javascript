let arr = [1, 3, 4, 7, 10, 58, 100, 625];
let key1 = 100;

var fun = (arr, key1) => {
  let start = 0;
  let end = arr.length-1;
  let mid = Math.floor(start + (end - start) / 2) 
  while (start <= end) {
    console.log("here");
    if (arr[mid] === key1) {
      return mid
    } else if (arr[mid] < key1) {
      start = mid + 1;
    } else if (arr[mid] > key1) {
      end = mid - 1;
    }
    mid = Math.floor(start + (end - start) / 2) 
  }
  return -1
};
console.log(fun(arr, key1));
