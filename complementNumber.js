var a = prompt("EnterNumver")
var m = a
var mask = 0
if(m ===0){
   console.log(0);
}
while(m!=0){
    mask =( mask<<1 )| 1
    m = m>>1
}
var ans = (~a) & mask
console.log(ans)
