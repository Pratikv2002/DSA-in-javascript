var arr1 = [1,2,3,4]
var arr2 = [6]
var sum1 = 0
for(let i = 0;i<arr1.length;i++){
    sum1 = sum1 * (10) +arr1[i]
}
var sum2=0
for(let i = 0;i<arr2.length;i++){
    sum2 = sum2 * (10) +arr2[i]
}
console.log(sum1+sum2);