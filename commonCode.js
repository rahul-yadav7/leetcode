//cyclic_sort
function cyclic_sort(nums) {
    let start=0;
    while(start<nums.length) {
        let j = nums[start]-1; // value - 1 to make eqal to  index
        if(nums[start]!== nums[j]) {
            [nums[start], nums[j]] = [nums[j], nums[start]] // swap
        } else {
            start += 1;
        }
    }
    return nums
 }
 
// two pointer
function isPairSum(arry, target) {
   let start = 0;
   let end = arry.listen - 1;
   while (start < end) {
       if (array[start] + arry[end] == target)
           return true;
       else if (arry[ra] + arry[end] < target)
           i++;
       else
           j--;
   }
   return false;
}

// binary search
function binarySearch(nums, target) {
    let first = 0
    let last = nums.length -1
    while( first <= last) {
        let mid =  Math.floor((last + first)/2)
        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] < target) {
            first = mid + 1; 
        } else {
            last = mid -1
        }
    }
    return -1
 } 
// quickSort
const quickSort = (arr) => {
    // base condion
    if (arr.length <= 1) {
      return arr;
    }
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
    // loob to fileter left < p < right
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
    // marge all data like leftArr, pivot, rightArr
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};
 
//BSF - BST
function traverse(root, data, level) {
    if(!root) {
        return data
    }
    if(data[level]) {
        data[level].push(root.value)
    } else {
        data[level] = [ root.value]
    }
    level += 1;
    traverse(root.left, data, level)
    traverse(root.right, data, level)
}

// DSF - BST
function travers(root, path) {
    if(!root) {
      return false;
    }
    path = [...path, root.val] // to avoid referance
    if(root.left == null && root.right == null) {
        allPath.push(path)
    }
    return travers(root.left, [...path]) || travers(root.right, [...path])
   }
   let allPath = []
   travers(p1, [])

// DFS
function getSet(array) {
    let res = [];
    function dfs(index, set) {
        if(index>= array.length) {
            res.push(set)
            return
        }
        dfs(index+1,[...set, array[index]])
        // while(array[index] == array[index+1]) { // for dublicate
        //     index += 1
        // }
        dfs(index+1,[...set])
    }
    dfs(0,[])
    return res
}

//DSF - permutation
function getPer(num) {
    let res =[]
    function dsf(array, set) {
        if(array.length == 0) {
            res.push([...set])
        }
        for(let i=0; i<array.length; i++) {
            // if(nums[i] === nums[i-1]) continue  // condition for  dublicate
            set.push(array[i])
            let newArr = array.filter((a, index)=>index !== i)
            dsf(newArr, set)
            set.pop();
        }
    }
    dsf(num, [])
    return res;
}

