let arr = [1,2,3,4,5,6,7]
let key = 3
for(let i = 0;i<key+1;i++){
  let temp = arr.pop()
  arr.unshift(temp)
}
console.log(arr);