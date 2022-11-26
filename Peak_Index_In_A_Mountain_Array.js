let arr = [5,5,5,5]

var Mountain = (arr)=>{
    let s = 0
    let e = arr.length-1
    
    let mid = Math.floor(s+(e-s)/2) 
    
    while(s<e){
       if(arr[mid]<arr[mid+1]){
         s = mid+1
       }else{
            e = mid
        }
        mid = Math.floor(s+(e-s)/2) 
    }
    return arr[s]
}

console.log(Mountain(arr))