// Reverse Number
var  a = prompt("Enter number:")
var i = 0
console.log(a)
while(a>0){
    i = i*10 + a%10;
    a =Math.floor(a/10) 
}
if(a>Math.pow(2,31)-1|| a<Math.pow(-2,31)){
    console.log(0) 
}else{
    console.log(i);
}
   
