


var sqrt = (a)=>{
    var s = 0
    var e = a
    var mid = Math.trunc(s+(e-s)/2)
  
    while(s<=e){
        if(mid**2===a){
            return mid
       }else if (mid**2>a){
            e = mid - 1
        }else{
            s = mid + 1
        }
        mid = Math.round(s+(e-s)/2)
    }
    return mid - 1

}
var exactSol =(tempSol,sq,digit)=>{
    let ans = tempSol
    let decimal = 1
    for(let i = 0 ;i<digit;i++){
       decimal = decimal/10
       
      for(let j = ans;ans*ans<sq;j=j+decimal){
        console.log(ans);
        ans = j
      }
    }
    return ans
}
var Main = ()=>{
    var a = 6
    return exactSol(sqrt(a),a,3)
}
console.log(Main());