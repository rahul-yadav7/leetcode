/**
 * @param {number[]} prices
 * @return {number}
 */



























var maxProfit = function(prices) {
  
    let max =1;
    let min =0
    let profit =0
    while(min<prices.length) {
        if(prices[min]<prices[max]) {
            let p = prices[max]- prices[min]
            profit = Math.max(profit, p)
        } else {
            min = max
        }
        max += 1
    }
    return profit
};
let prices = [2,4,1];
console.log(maxProfit(prices))
