var a = [10,20,30,5,40,58,05,20,0,45]

for(let i =0;i<a.length-1;i=i+2){
    let x = a[i]
    a[i] = a[i+1]
    a[i+1] = x
}

console.log(a)