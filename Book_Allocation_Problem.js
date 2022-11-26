var arr = [10, 20, 30, 40];
var student = 2;
function isPosibleSol(arr, mid, student) {
  var studentCount = 1;
  var pageSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (pageSum + arr[i] <= mid) {
      pageSum += arr[i];
    } else {
      studentCount++;
      if (studentCount > student || arr[i] > mid) {
        return false;
      }
      pageSum = arr[i];
    }
  }
  return true;
}
var book_Allocation = (arr, student) => {
  var start = 0;
  var sum = 0;
  for (let i of arr) {
    sum += i;
  }
  var end = sum;
  var ans = -1;
  var mid = Math.floor(start + (end - start) / 2);
  while (start <= end) {
    if (isPosibleSol(arr, mid, student)) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  return ans;
};

console.log(book_Allocation(arr, student));
