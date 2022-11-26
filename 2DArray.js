var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];
let target = 5;

function wavePrint(arr) {
  for (let i = 0; i < 3; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < 3; j++) {
        console.log(arr[i][j]);
      }
    } else {
      for (let j = 2; 0 <= j; j--) {
        console.log(arr[i][j]);
      }
    }
  }
}
console.log(wavePrint(arr));

// function printLargeRow(arr){
//     let row = 0
//     let temp = 0
//     for(let i = 0;i<3;i++){
//         let sum = 0
//         for(let j = 0;j<3;j++){
//            sum = sum + arr[i][j]
//         }

//         if(temp<sum){
//             temp = sum
//             row = i
//         }
//     }
//     return row
// }
// console.log(printLargeRow(arr))
