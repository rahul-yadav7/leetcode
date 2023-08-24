
class Node {
    constructor(value) {
        this.data = value
        this.next = null
    }
}


class LinkList {

    constructor() {
        this.head = null
    }
    insert(value) {
        let newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode
        } else {
            let data = this.head
            while (data.next) {
                data = data.next
            }
            data.next = newNode
        }
        console.log('new value added ...')
    }
    print() {
        if (!this.head) {
            console.log('list is empty ...')
            return
        }
        let node = this.head
        while (node && node.next) {
            console.log(node.data)
            node = node.next
        }
        console.log(node.data)
    }
    delete() {
        if (this.head == null) {
            console.log('list already empty ...')
        }
        else {
            this.head = this.head.next
            console.log('one element deleted ...')
        }
    }
    getLast() {
        if (this.head == null) {
            return null
        }
        else {
            let node = this.head
            let scondNode ={}
            while (node && node.next) {
                console.log(node.data)
                scondNode = node;
                node = node.next

            }
             scondNode.next = null
            console.log("LinkList -> getLast -> data.data", node.data)
            return node.data
        }
    }

//         head
//           1 -> 2 -> 3 -> 4
    revers() {
         console.log('-------------------')

         let data = this.head
        let t1 =null, t2 = null;
        while(data) { 
            t2 = data.next     //  t2 = 2
            data.next = t1     // data = 1, data.next = null
            t1 = data         //t1 = 1
            data = t2          // data = 2

        }
        this.head = t1


    }
}

let ll = new LinkList();

ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.insert(4)
ll.insert(5)
ll.insert(6)
ll.print();
ll.revers()
ll.print()







// head ->1-> 2->3->4->5 ->6

// head ->6->5->4->3->2->1