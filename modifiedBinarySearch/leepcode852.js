// 852. Peak Index in a Mountain Array
//162
let arr = [3,1,2]
// Output: 1

var peakIndexInMountainArray = function(arr) {
    let first = 0
    let last = arr.length -1
    while(first< last) {
        let mid = Math.floor((last + first)/2)
        console.log("🚀 ~ file: leepcode852.js:10 ~ peakIndexInMountainArray ~ mid:", mid)
        if(arr[mid+1] && arr[mid+1]>arr[mid]) {
            first = mid+1
        } else if(arr[mid-1] && arr[mid-1] > arr[mid]) {
            last = mid-1
        } else {
            return mid
        }
    }
    return -1
};

console.log("🚀 ~ file: leinArray:", peakIndexInMountainArray(arr))
