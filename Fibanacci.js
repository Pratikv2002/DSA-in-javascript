// let a = 0;
// let b = 1
// let count = 10

// if(count<=1){
//     console.log(0) 
// }
// if(count>=2){
//     console.log(0) 
//     console.log(1); 
// }
// for(let i=0;i<count-1;i++){
//     let sum = a + b
//     console.log(sum);
//     a = b
//     b = sum
// }


// Recursive Approach

// function fib(n) {
//     if (n < 2) {
//       return n;
//     }
//     return fib(n - 1) + fib(n - 2); // Fn-1 + Fn-2
//   }

//  console.log(fib(10));

function  fib(n)
    {
        /* Declare an array to store Fibonacci numbers. */
        let f = new Array(n+2); // 1 extra to handle case, n = 0
        let i;
        /* 0th and 1st number of the series are 0 and 1*/
        f[0] = 0;
        f[1] = 1;
        for (i = 2; i <= n; i++)
        {
            /* Add the previous 2 numbers in the series
            and store it */
            f[i] = f[i-1] + f[i-2];
        }
        return f[n];
    }
    let n=9;
    console.log(fib(n));