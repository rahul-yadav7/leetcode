

/**
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * @param {*} intervals 
 * @param {*} newInterval 
 * @returns 
 */
function insert (intervals, newInterval) {
    intervals.push(newInterval)
    intervals = intervals.sort((a,b)=>a[0]-b[0])
    let result =[intervals[0]]
    for(let i=1;i<intervals.length; i++) {
        if(result[result.length-1][1]>=intervals[i][0]) {
            result[result.length-1][1] = Math.max(intervals[i][1],result[result.length-1][1])
        }
        else {
            result.push(intervals[i])
        }
    }

    return result
}