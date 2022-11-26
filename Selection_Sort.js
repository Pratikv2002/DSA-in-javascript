var arr = [29, 72, 98, 13, 87, 66, 52, 51, 36];

for (let i = 0; i < arr.length - 1; i++) {
  var minimum = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minimum]) {
      minimum = j;
    }
  }
  [arr[i], arr[minimum]] = [arr[minimum], arr[i]];
}
console.log(arr);
