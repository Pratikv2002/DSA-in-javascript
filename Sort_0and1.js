// solution 1
// let a = [0,1,0,0,1,0,0,1,1,0]
// console.log(a.sort())

// solution 2
// let a = [0,1,0,0,1,0,0,1,1,0]
// let b = []
// for(let i of a){
//    if(i===1){
//       b.push(i)
//    }else{
//       b.unshift(i)
//    }
// }
// console.log(b)

// solution 3 

let a = [0,1,0,0,1,0,0,1,1,0]
let i = 0
let j = a.length - 1
while(i<j){
    if(a[i]==0){
        i++
    }else if(a[j]==1){
        j--
    }
    else if(a[i]==1 && a[j]==0){
        a[i]=0
        a[j]=1
        i++
        j--
    }
}

console.log(a);