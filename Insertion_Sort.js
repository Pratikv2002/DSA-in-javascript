var arr = [10, 1, 7, 6, 14, 9];

for(i = 1;i<arr.length;i++){
    let temp = arr[i]
    let j = i-1
    while(j>=0){
        if(arr[j]>temp){
           arr[j+1] = arr[j]
        }else{
            break
        }
        j--
    }
    arr[j+1]=temp
}
console.log(arr);