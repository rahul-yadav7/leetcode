
var longestPalindrome = function(s) {
    let res = "";
    let max = 0;
    for(let i = 0; i < s.length; i++){
        let l = i;
        let r = i;
        while(l >= 0 && r < s.length && s[l] === s[r]){
            let len = r - l + 1;
            if(len > max){
                res = s.substring(l, r + 1);
                max = len;
            }
            l--;
            r++;
        }
        r = i +1
        // same code just change right 'r' with + 1 to handle even cases
        while(l >= 0 && r < s.length && s[l] === s[r]){
            let len = r - l + 1;
            if(len > max){
                res = s.substring(l, r + 1);
                max = len;
            }
            l--;
            r++;
        }   
    }
    return res;
};


