console.log("Heap")
/**
 * Heap
—-----

Type of heap 
1 max heap - always greater than its child node
2 min heap - always smaller than the child node

Heap opreation 
—--------------------
Heapfy -
Insert -
Delete -



 */
class MAX_HEAP {
 constructor() {
     this.heap = [null]
 }
 getMin() {
     
     return this.heap[1];
 }
  /**
  * for insertion
  * we push new value at last location in array then we compare new value with it's parent 
  * and if it newValue > parent value then we swap values until we reached on root
  * 
  * push value at last position  //  this.heap.push(value)
  * get pushed value index       //   let currntIndex = this.heap.length - 1  // bzz. we pushed value in array and it's store in last index
  *                                                                           // so lastIndex is array.length - 1
  * get parent index            //let parentIndex = Math.trunc(currntIndex / 2)// in heap to find parent we simply use currntIndex / 2
  * 
  */
 insert(value) {
     let temp;
     this.heap.push(value)
     let currntIndex = this.heap.length - 1
     let parentIndex = Math.trunc(currntIndex / 2)
     while(currntIndex > 1 && this.heap[currntIndex] > this.heap[parentIndex] ) {  // here we are runing this untill we reached on root(currntIndex > 1) and also compareing parent with child
     temp = this.heap[currntIndex];
     this.heap[currntIndex] = this.heap[parentIndex];
     this.heap[parentIndex] = temp

     currntIndex = parentIndex
     parentIndex = Math.trunc(currntIndex / 2); 

    
     }
 }

 detet() {
     if(this.heap.length <= 1) {
        console.log("heap already empty...")
     }
    this.heap[1] = this.heap[this.heap.length-1]   // delete root  element value and storing last element value at root place
    let lastIndex = this.heap.length-1 
    this.heap.length = lastIndex // deleting last element from array
    let temp;
   
    let parentIndex = 1
    let leftChildIndex = 2 * parentIndex
    let rightChildIndex = 2 * parentIndex + 1
    let bigChild = this.heap[leftChildIndex] > this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex // finding big ching of a parent
   
    while(parentIndex < lastIndex && this.heap[parentIndex] < this.heap[bigChild] ) {// traveing top to bottom  and compairing parent with child and swap
        this.print()
    temp = this.heap[bigChild];
    this.heap[bigChild] = this.heap[parentIndex];
    this.heap[parentIndex] = temp


    parentIndex = bigChild
    let leftChildIndex = 2 * parentIndex
    let rightChildIndex = 2 * parentIndex + 1
    bigChild = this.heap[leftChildIndex] > this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex
    this.print()
    }
}

 print() {
     
        console.log(this.heap)
     
 }
}


const minHeap = new MAX_HEAP()
minHeap.getMin()
minHeap.insert(1)
minHeap.insert(2)
minHeap.insert(3)
minHeap.insert(4)
minHeap.insert(5)
minHeap.insert(6)
minHeap.insert(7)
minHeap.insert(8)
minHeap.insert(9)
minHeap.insert(10)
minHeap.insert(11)
minHeap.insert(12)
minHeap.insert(13)
minHeap.insert(14)
minHeap.print();
minHeap.detet();




var topKFrequent = function(nums, k) {
    let output=[], counter=0
    for(let i=0;i<nums.length; i++) {
        
        if(nums[i]=== k) {
            counter+=1;
            output.push(counter)
            
        }
    }
    return output.length ?  output: [-1]
};

console.log(topKFrequent([1,2],1))


// how to sepecify size of a array




 