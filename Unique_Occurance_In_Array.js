var arr =  [1,2,2,1,1,3]

function uniqueOccurance(arr){
//     var obj = {}
//     for(let i of arr){
//         if(obj[i]){
//             obj[i] = obj[i] + 1
//         }else{
//             obj[i]=1
//         }
//     }

//     var valueObj = Object.values(obj).sort()
//       let j = 0
//     for(let i = 1;i<valueObj.length;i++){
//         if(valueObj[j]==valueObj[i]){
//             return false
//         }
//         j++
//     }
//     return true
const countMap = arr.reduce((acc, num) => {
    acc[num] =( acc[num] || 0 ) + 1
    return acc
  }, {})
  const values = Object.values(countMap)
  const set = new Set(values)

  return values.length === set.size
}
console.log(uniqueOccurance(arr));
console.log(2||0);