var array = [6,1,2,8,3,4,7,9,10]
var n = 10
var x = array.sort(function(a, b){return a - b})
var start = 0
var end = array.length
var mid = Math.floor(start + (end-start)/2)
while(start<=end){
    console.log(mid+1,x[mid]);
      if(mid+1===x[mid]){
        start=mid+1
      }else{
        end=mid-1
      }
    mid = Math.floor(start + (end-start)/2)
}
console.log(mid);