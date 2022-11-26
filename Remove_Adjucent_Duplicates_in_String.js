let s = "abbaca"

let arr = []

for(let i of s){
    if(i === arr[arr.length-1]){
        arr.pop()
    }else{
        arr.push(i)
    }
}
console.log(arr)