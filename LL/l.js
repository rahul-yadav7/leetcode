class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

let head = null
let data1 = new Node(1)
let data2 = new Node(2)
let data3 = new Node(3)
let data4 = new Node(4)
let data5 = new Node(5)
let data6 = new Node(6)
let data7 = new Node(7)
data1.next = data2
data1.next.next = data3
data1.next.next.next = data4
data1.next.next.next.next= data5
data1.next.next.next.next.next= data6
data1.next.next.next.next.next.next= data7
// data7.next = data3

head = data1


// function traver(head) {
//     fast = head
//     slow = head

   
//     while(fast != null && fast.next !=null) {
//         console.log('--------slow', slow.val)
//         console.log(slow.val)
        
//         fast = fast.next.next
//         slow = slow.next
//         if(fast.val == slow.val) {

//             slow = head
//             while(slow.val != fast.val) {
 
//                 slow = slow.next
//                 fast = fast.next
//             }
//             console.log('----jj',slow.val)
//             return true
//         }
//     }
//     return false
    

// }

// console.log( traver(head))




// function reverse(head) {
//     let node = head
//     let prev = null
//     while (node !== null) {
//         let next = node.next
//         node.next = prev
//         prev = node
//         node = next
//     }
//     console.log(node)
//     return prev
// }
// console.log("🚀 ~ file: l.js:61 ~ reverse ~ reverse:", reverse(head))
   

function removeElem(head, val) {

    let pre = null
    let currnet = head
    while(currnet) {

        if(currnet.val == val) {
            pre.next = currnet.next
        }
        pre = currnet
        currnet = currnet.next
    }
    while(head) {
        console.log(head.val)
        head = head.next
    }
}
removeElem(head,2)