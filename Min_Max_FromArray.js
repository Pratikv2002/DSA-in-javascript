var len = prompt("Enter array length:")
var arr = []

for (let i=0; i<len;i++){
    var value = prompt()
    arr[i]=value
}
var max = arr[0]
for(let i = 0; i <arr.length;i++){
    if(max<arr[i]){
        max = arr[i]
    }
}
console.log(max)