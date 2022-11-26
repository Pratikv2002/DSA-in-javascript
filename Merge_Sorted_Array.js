let arr1 = [1,2,3,0,0,0]
let arr2 = [2,5,6]
let k = 0
console.log(arr1.concat(arr2).sort())
// for(let i = 0;i<arr2.length;i++){
//     let temp = arr2[i]
//     let j =3-1
//     while(0<=j){
//         if(temp<arr1[j]){
//              arr1[j+1]=arr1[j]
//         }else{
//             break
//         }
//         j--
//     }
//     arr1[j+1]=temp
// }
// console.log(arr1);