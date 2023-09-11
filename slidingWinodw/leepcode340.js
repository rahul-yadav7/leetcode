/**
340. Longest Substring with At Most K Distinct Characters
Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
Output: 3
Explanation: T is "ece" which its length is 3.
 */


let s = "ecwecccccba", k = 2

function getLogestSub(s, k) {

    let start =0;
    let max = 0;
    let maxStr = ''
    let hasMap = {}
    for(let i=0;i<s.length; i++) {
        if(max< (i-start)) {
            max = (i-start)
            maxStr = s.substring(start, i);
        }
        if(hasMap[s[i]]) {
            hasMap[s[i]] += 1;
        } else {
            hasMap[s[i]] = 1;
        }
        while(Object.keys(hasMap).length> k) {
            if(hasMap[s[start]] == 1) {
                delete hasMap[s[start]]
            }else{
                hasMap[s[start]] -= 1;
            }
            start += 1;
        }
       
    }
    console.log(maxStr)
    return max
}
console.log(getLogestSub(s,k))
