let str ="abcdefg"
let num = 2
str = str.split('')

for(let i =0;i<num/2;i++){
    [str[i],str[num-1-i]] =  [str[num-1-i],str[i]]
}
str = str.join('')
console.log(str);