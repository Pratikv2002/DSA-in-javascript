var arr1 =  [2,5,7,10,13,14,19]
var target = 24

var start = 0
var end = arr1.length-1

// console.log(mid);

while(start<end){
   var sum = arr1[start] + arr1[end]
//    console.log(sum);
   if(sum===target){
     return [start+1,end+1]
   }else if(sum<target){
      start++
   }else{
   end--
   }
}