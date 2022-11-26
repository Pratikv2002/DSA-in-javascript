let s = "aabababa"
// let s = "pratik shankar vyavahare"
let part = "aba"

for(let i =0;i<s.length;i++){
    s = s.replace(part,"")
    console.log(s)
}
