

// var topKFrequent = function(nums, k) {
//     let arrayt = []
//     let obj = nums.reduce((obj,cv)=>{
//         if(obj[cv]) {
//             obj[cv] += 1
//         } else {
//             obj[cv] = 1
//         }
//         return obj
//     },{})
    
//     console.log("topKFrequent -> obj", obj)
//     for(let key in obj) {
//         console.log("topKFrequent -> key", key)
        
//          arrayt[0] = key
//          console.log("topKFrequent -> arrayt", arrayt)
//         for(let j=k; j>0; j--) {
//             if(arrayt[i]) {
//                 if() {
                    
//                 }
//              let tem =   arrayt[j]
//              arrayt[j] = arrayt[j+1]
//                arrayt[j+1] = tem 
//             }  else {
//                 arrayt[i] = key
//             }
//         }
//     }
//     return arrayt
   
// };


// var topKFrequent = function(nums, k) {
//     const freqMap = new Map();
//     const bucket = [];
//     const result = [];
    
//     for(let num of nums) {
//         freqMap.set(num, (freqMap.get(num) || 0) + 1);
//     }
//     console.log("topKFrequent -> freqMap", freqMap)
    
//     for(let [num, freq] of freqMap) {

//         bucket[freq] = bucket[freq] ?  bucket[freq].push(num) : [num];
//     }
//     console.log("topKFrequent -> bucket", bucket)
    
//     for(let i = bucket.length-1; i >= 0; i--) {

//         if(bucket[i]) {
//             result.push(bucket[i])
//         } ;
//         if(result.length === k) break;
//     }
//     return result;
// }




const topKFrequent = (nums, k) => {
    const map = {};
    const result = [];
    const bucket = Array(nums.length + 1).fill().map(() => []);
    console.log("topKFrequent -> bucket", bucket)
    
    for (let num of nums) {
        map[num] = ~~map[num] + 1;
    }
    console.log("topKFrequent -> map", map)
    
    for (let num in map) {
        bucket[map[num]].push(parseInt(num));
    }
    
    for (let i = nums.length; i >= 0 && k > 0; k--) {
        while (bucket[i].length === 0) i--;
        result.push(bucket[i].shift());
    }
    
    return result;
};



console.log(topKFrequent([1,1,2,2,2,3,3,3],2))

console.log(~~true)
 