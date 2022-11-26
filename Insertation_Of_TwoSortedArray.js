var a = [1,2,2,2,3,4]
var b = [2,2,3,3,5,6,8]
var k = 0
var arr = []
for(let i=0;i<a.length;i++){
    for(let j = k;j<b.length;j++){
        if(a[i]<b[j]){
           break
        }
        if(a[i]===b[j]){
           arr.push(a[i])
            k++
            break
        }
    }
}
console.log(arr)