var arr = [7,8,9,1,2,3,4]
var key = 1
var searchKey =(arr,key)=>{
    var start = 0
    var end  = arr.length-1
    var mid = Math.floor(start +(end-start)/2)
    while(start<=end){
        if(arr[mid]===key){
            return mid
        }else if(arr[mid]>=arr[start]){
               if (key<=arr[mid] && key>=arr[start]){
                end = mid - 1
               }else{
                start = mid+1
               }
        }else{
            if(key>=arr[mid]&&key<=arr[end]){
                start = mid+1
            }else{
                end = mid - 1
            }
        }
        var mid = Math.floor(start +(end-start)/2)
    }
    return -1
}
console.log(searchKey(arr,key));


