let str = "abcscdba"

var palindrom=()=>{
    for(let i = 0;i<str.length/2;i++){
        if(str.charAt(i)!=str.charAt(str.length-1-i)){
            return false
        }
    }
    return true
}

console.log(palindrom(str));

