let arr = [6,7,9,10,1,2,3,4,5]

var pivot =(arr)=>{
     let s = 0
     let e = arr.length -1
     let mid = Math.floor(s + (e-s)/2)

     while(s<e){
       if(arr[mid]>=arr[0]){
          s = mid+1
       }else{
        e = mid
       }
       mid = Math.floor(s + (e-s)/2)
     }
     return arr[s]
}
console.log(pivot(arr))