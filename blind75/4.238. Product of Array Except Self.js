/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let count = 0;
    let product = nums.reduce((sum, cv)=> {
        if(cv == 0) {
            count += 1
        } else {
            sum = sum * cv;
        }
       
        return sum
    },1)
    if(count == 1) {
        return nums.map(num => {
            if(num == 0) {
                return product
            } else {
                return 0
            }
        })
    } else if( count > 1){
        return nums.map(num=> 0)
    } else {
        return nums.map(num=> {
            return product/ num
        })
    }

};