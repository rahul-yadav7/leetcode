
let s = "abab", p = "ab"
var findAnagrams = function(s, p) {
    res = [];
    start =0;
    let pObj  = p.split('').reduce((tot,v) => {
        tot[v] = true
        return tot
    }, {})
    let map = {};
    for(let i=0; i<s.length; i++) {
        console.log("🚀 ~ file: leepcode438.js:13 ~ findAnagrams ~ map:", map, start)
       
        if(pObj[s[i]]) {
            while(map[s[i]]) {
                delete map[s[start]]
                start += 1;
            }
            map[s[i]] = true
        } 
        if(Object.keys(map).length == p.length) {
            res.push(start)
            delete map[s[start]]
            start +=1
        }
    }
    return res
    
};
console.log("🚀 ~ file: leepcode438.js:6 ~ findAnagrams ~ findAnagrams:", findAnagrams(s,p))
