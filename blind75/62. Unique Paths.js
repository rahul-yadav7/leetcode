let m =3;
let n =7;
//here we running loop end to end
// m = 3, n = 3
// 1 1 1
// 1 1 1
// 1 1 1
// and same for storing value 
// 1 1 0
// 1 1 0
// 0 0 0

// function getPath(m,n) {
//   let dp = {};
//   for(let i=m-1;i>=0;i--) {
//     for(let j=n-1;j>=0;j--) {
//         if(i==m-1 || j== n-1) {
//             dp[`${i}${j}`] = 1
//         } else {
//             dp[`${i}${j}`] =  dp[`${i+1}${j}`] +  dp[`${i}${j+1}`]
//         }
     
//     }
//   }
//   return dp['00'];
// }


//here we reduce loop side like
// m = 3, n = 3
// 1 1 0
// 1 1 0
// 0 0 0
// and same for storing value 
// 1 1 0
// 1 1 0
// 0 0 0
// function getPath(m,n) {
//     let dp = {};
//    if(m == 1 || n==1) return 1
//     for(let i=m-2;i>=0;i--) {
//       for(let j=n-2;j>=0;j--) {
//               dp[`${i}${j}`] =  (dp[`${i+1}${j}`]||1) +  (dp[`${i}${j+1}`]||1) 
//       }
//     }
//     return dp['00'];
//   }

//here we reduce loop side like
// m = 3, n = 3
// 1 1 0
// 1 1 0
// 0 0 0
// and   storing value 
// 1 1 0
// 0 0 0
// 0 0 0
// next 
//   function getPath(m,n) {
//     let dp = {};
//     let next = 1;
//     if(m == 1 || n==1) return 1
//     for(let i=m-2;i>=0;i--) {
//       for(let j=n-2;j>=0;j--) {
//               dp[`${j}`] =  (dp[`${j}`]||1) +  next
//               next =  dp[`${j}`] 
//       }
//       next = 1
//     }
//     return dp['0'];
//   }
// function getPath(m,n) {
//     let count =0
//     function dsf(m,n) {
//         console.log(m,n)
//         if(m == 0 && n == 0) {
//             count += 1;
//         } 
//         if(m!=0) {
//             dsf(m-1,n)
//         }
//         if(n!=0) {
//             dsf(m,n-1)
//         }
//       }
//     dsf(m-1,n-1)
//     return count
// }

function getPath(m,n) {
   
    function dsf(i,j) {
        if(i==m || j==n) {
            return 0
        }
        if(i==m-1 ||j==n-1) {
            return 1
        }
        
        return dsf(i,j+1) + dsf(i+1,j)
    }
    return dsf(0,0)
    
}




console.log("n):", getPath(m,n))

// 1,1,1,1,1,1,1
// 1,1,1,1,1,1,1
// 1,1,1,1,1,1,1