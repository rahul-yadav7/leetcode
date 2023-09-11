let S = "hhhhhhhhh", K = 5
// let S = "abcdefgehijk", K = 5

const gey = (S,k) => {
    let count =0;
    let start = 0;
    let hashMap = {};
    for(let i=0; i<S.length; i++) {
        if(hashMap[S[i]]) { // check is already exist 
            hashMap =  {} 
            start = i
        } else {
            hashMap[S[i]] = true
            if(i - start >= k-1) {
                count +=1;
                hashMap[S[start]] = false
                start++
            }
        }
    }
    return count
}
console.log('---',gey(S,K))

