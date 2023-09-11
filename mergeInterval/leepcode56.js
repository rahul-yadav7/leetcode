/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    interval = intervals.sort((a,b)=> {
   return a[0]- b[0]
   })
 const result = [interval[0]] // add first value in result
 for(let i=1;i<interval.length; i++) { // start loop from 1 index not 0
   let lastEnd = result[result.length-1][1]
   let currnetStart = interval[i][0]

  
   /**
    * checking previous value end with current value start
    * if current value start of interval < previous value end of result
    * if yes then replace result end with bigger end value between of reuslt and currnet
    * else push current value in result
    */
   if(currnetStart<= lastEnd) {  
     result[result.length-1][1] = 
     interval[i][1] > result[result.length-1][1] ?
      interval[i][1] :
      result[result.length-1][1]
   } else {
     result.push(interval[i])
   }
  
 }
 return result
};


