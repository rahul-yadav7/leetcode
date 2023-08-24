class Node {
   constructor(value) {
       this.data = value;
       this.left = this.right = null
   }
}

let root = new Node(3)
root.left = new Node(9)
root.right = new Node(20)
// root.left.left = new Node(1)
// root.left.right = new Node(4)
root.right.left = new Node(15)
root.right.right = new Node(7)

function trverse(root,level) {
    if(root==null)
    {
        return
    }else {
        console.log(root.data, level)
        if(data[level]) {
            data[level].push(root.data)
        } else {
            data[level] = [root.data]
        }
        level+=1
        trverse(root.left, level)
        trverse(root.right, level)
    }
}
let data = [];
trverse(root,0)
console.log(data)


// function trverse(root) {
//     // console.log('---root', root)
//     if(root == null) {
//      return
//     }
//      trverse(root.left)
//     console.log(root.data) 
   
//     trverse(root.right)
// }
// function search(root, value) {
//     // console.log('------------root',root.data)
//     if(root == null) {
//         return
//     }
//     if(root.data == value) {
//         console.log("found")
//         return root
//     }
//     if(root.value< value) {
//        return search(root.left, value)
//     }else {
//        return search(root.right,value)
//     }
//     return 

// }
// function push(root, val) {
//     console.log('root--',root)
//     if(root == null) {
//         root = new Node(val)
//         return
//     }else {
//         if( val < root.left) {
//             root.left = push(root.left, val)
//         }
//         else{
//             root.right =  push(root.right, val)
//         }
//     }
//     return root

// }
// let root = null
// trverse(root)
// root = push(root,65)
// root = push(root,27)
// root = push(root,98)
// root = push(root,56)
// root = push(root,23)
// root = push(root,09)
// root = push(root,54)
// trverse(root)
// console.log(search(root, 8))/