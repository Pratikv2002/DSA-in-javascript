let arr = [1,2,4,5,8,9]
let cow = 3
function isPosibileSol(arr,cow,mid){
   let cowCount = 1
  let distance = arr[1]
  for(let i = 0;i<arr.length;i++){
         if(arr[i]-distance>=mid){
            cowCount++
            distance=arr[i]
            if(cowCount>=cow){
                return true
            }
         }
          
    }
return false
  }
var aggresiveCow = (arr,cow)=>{
    let start = 0
    let end = arr[arr.length-1]
    // for(let i of arr){
    //     end+= i
    // }
    let mid = Math.floor(start + (end - start)/2)
    let ans = 0
    console.log(mid)
    while(start<=end){
        // console.log(mid)
        if(isPosibileSol(arr,cow,mid)){
            start = mid + 1
            ans = mid
        }else{
            end = mid-1
        }
        mid = Math.floor(start + (end - start)/2)
    }
    return mid
}
console.log(aggresiveCow(arr,cow));