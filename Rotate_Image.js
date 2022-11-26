var matrix = [[1,2,3],[4,5,6],[7,8,9]]

var rotate = function(matrix) {
   let row = matrix.length
   let col = matrix[0].length
    for(let i = 0;i<row;i++){
        var arr = []
        for(let j = col-1;j>=0;j--){
           let temp =  matrix[j][i]
             arr.push(temp)
        }
        matrix.push(arr)
    }
    for(let i = 0;i<row;i++){
        matrix.shift()
    }
return matrix
};
console.log(rotate(matrix))
