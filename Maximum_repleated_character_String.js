var str = "testsample"
var obj ={}
for(let i of str){
   if(i === " "){
     continue
   }
    if(i in obj){
       obj[i]++
    }else{
        obj[i]=1
    }
}
var max = str.charAt(0)
for(let j in obj){
    console.log(obj[j]);
    if(obj[j]>obj[max]){
        max = j
    }else if(obj[j]===obj[max]){
        if(max>j){
            max = j
        }
    }
}
console.log(max)