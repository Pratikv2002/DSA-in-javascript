let a = 15
let b = 35

function gcd(a,b){
    
     if(a===0){
        return b
     }
     if(b===0){
        return a
     }
     while(a!=b){
        console.log(a,b)
        if(a>b){
            a = a-b
        }else{
            b= b-a
        }
     }
     return a
}
console.log(gcd(a,b));