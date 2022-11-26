var a = [10,10,40,10,30,50,40]

// Solution 1

// for(let i=0;i<a.length;i++){
//     for(let j = i+1; j<a.length;j++){
//         if(a[i]===a[j]){
//             a[i]=2
//             a[j]=2
//         }
//     }
// }
// for(let i = 0;i<a.length;i++){
//     if(a[i]!==2){
//         console.log(a[i])
//         break
//     }
// }

// Solution 2
var ans = 0
for(let i =0 ;i<a.length;i++){
     ans = ans ^ a[i]
}
console.log(ans)