let arr  = [0,1,0,2,3,14,5,0]
let len = arr.length
for(let j = 0;j<len;j++){
    for(let i=0;i<arr.length-1-j;i++){
        if(arr[i]===0&&arr[i+1]!=0){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        }
    }
    len--
}

console.log(arr)