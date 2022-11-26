var arr = [1,1,11, 3, 4, 5, 11, 11, 13, 14, ,15,15, 17];
var len = arr.length - 1;

function func(arr, len) {
    console.log(len)
  if (len === 0) {
    if (arr[0] <=arr[1]) {
      return true;
    }else{
        return false
    }
  }

  if (arr[len - 1] > arr[len]) {
    return false;
  }

  return func(arr, len - 1);
}
console.log(func(arr, len));
