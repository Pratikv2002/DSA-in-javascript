let a = [6,3,1,5,5,4,2]
// output 3
a.sort()
// solution 1

// for(let i in a){
//    if(a[i]===a[parseInt(i)+1]){
//     console.log(a[i]);
//     break
//    }
// }

// solution 2
// var ans = 0
// for(var i= 0;i<a.length; i++ ){
//  ans = ans^a[i]
// }
// for(var i= 1;i<a.length; i++ ){
//     ans = ans^i
//    }
   
// console.log(ans)

//  solution 3

var ans = 0
for(var i= 0;i<a.length; i++ ){
 ans = ans^a[i]
}
console.log(a.length - ans)