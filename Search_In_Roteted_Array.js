let arr = [6,7,9,10,1,2,3,4,5]
let key = 1

var searchKey = (arr,key)=>{
    let s = 0
    let e = arr.length -1
    let mid = Math.floor(s +(e-s)/2) 

    while(s<e){
        if(arr[mid]>=arr[0]){
            s=mid+1
        }else{
            e = mid
        }
        mid = Math.floor(s +(e-s)/2) 
    }
    if(arr[0]<=key){
      e=s-1
      s=0
      mid = Math.floor(s +(e-s)/2) 
    }else{
        e = arr.length -1
        mid = Math.floor(s +(e-s)/2) 
    }
    while(s<=e){
        if(arr[mid]===key){
            return mid
        }else if(arr[mid]<key){
            s = mid+1
        }else{
            e = mid - 1
        }
        mid = Math.floor(s +(e-s)/2) 
    }
    return -1
}

console.log(searchKey(arr,key));