var limit = 12

function printPrimeNumber(limit){
    var arr = new Array(limit+1)
     arr = arr.fill(true)
     arr[0]= arr[1]= false

     for(let i = 2;i<arr.length;i++){
        if(arr[i]){
            for(let j=2*i;j<arr.length;j=j+i){
                arr[j] = false
            }
        }
     }
     for(let k = 2;k<arr.length;k++){
        if(arr[k]){
            console.log(k);
        }
     }
     
}
console.log(printPrimeNumber(limit));