var arr = [10, 1, 7, 6, 14, 9];
for (let j = 0; j < arr.length; j++) {
    var swap = false
  for (let i = 0; i < arr.length-j; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      swap = true
    }
  }
  if(swap===false){
    break
  }
}

console.log(arr);
