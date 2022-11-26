var a = [1,2,3,4,5]
var sum = 5
var k = 0

for (let i = 0;i<a.length;i++){
  for(let j = k;j<a.length;j++){
    if(a[i]+a[j]===sum){
        var arr = []
        arr.push(a[i],a[j])
        k++
        arr.sort()
        console.log(arr);
    }
  }
}
