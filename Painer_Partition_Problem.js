let arr = [48,90];
// let arr = [5,5,5,5];
let painter = 2;

function isPosibleSol(arr, mid, painter) {
  let painterCount = 1;
  let time = 0;
  for (let i = 0; i < arr.length; i++) {
    if (time + arr[i] == mid) {
        return true
      }
     else if (time + arr[i] < mid) {
      time += arr[i];
    } else {
      painterCount++;
      if (painterCount > painter || arr[i] > mid) {
        return false;
      }
      painterCount = arr[i];
    }
  }
  return true;
}

var painterPartition = (arr, painter) => {
  let start = 0;
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  let end = sum;
  let mid = Math.floor(start + (end - start) / 2);
  let ans = -1;
  while (start < end) {
    if (isPosibleSol(arr, mid, painter)) {
      end = mid - 1;
      ans = mid;
    } else {
      start = mid + 1;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  return ans;
};

console.log(painterPartition(arr, painter));
