/**
 * 253. Meeting Rooms II
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), 
 * find the minimum number of conference rooms required.
 * Input: [[0, 30],[5, 10],[15, 20], [31,32],[33,40],[34,35],[39,40],[37,39]]
 *  Output: 4
 */
function numberOfRoom(intervals) {
    let result =[intervals[0]]
    let maxRoom = 0;
    let roomCount = 1;
    for(let i=1;i<intervals.length; i++) {
        if(result[result.length-1][1]>=intervals[i][0]) {
            result[result.length-1][1] = Math.max(intervals[i][1],result[result.length-1][1])
            roomCount +=1;
        }
        else {
            roomCount = 1
            result.push(intervals[i])
        }
        maxRoom = Math.max(maxRoom, roomCount)
    }

    return maxRoom
}
let intervals = [[0, 30],[5, 10],[15, 20], [31,32],[33,40],[34,35],[39,40],[37,39]]
console.log(numberOfRoom(intervals))
