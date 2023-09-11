    /**
     * 252. Meeting Rooms
     * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
     * determine if a person could attend all meetings.
     * Input: [[0,30],[5,10],[15,20]]
     *  Output: false
     */

function meetingRoom(intervals) {
    intervals = intervals.sort((a,b)=> a[0]- b[0])
    let result =[intervals[0]]
    for(let i=1;i<intervals.length; i++) {
        if(result[result.length-1][1]>=intervals[i][0]) {
           return false
        }
        else {
            result.push(intervals[i])
        }
    }
    return true

}
let intervals = [[11,13],[5,10],[15,20]]

console.log(meetingRoom(intervals))