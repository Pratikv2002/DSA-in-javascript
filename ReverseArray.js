var a = [10,30,25,55,68,79,80]

for(let i = 0;i<(a.length/2);i++){
    let b = a[i]
   a[i]=a[a.length-i-1]
   a[a.length-i-1] = b
}
console.log(a)
// console.log(a.length)