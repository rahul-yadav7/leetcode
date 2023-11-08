class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

let head1 = null
let data1 = new Node(1)
let data4 = new Node(4)
let data7 = new Node(7)
data1.next = data4
data1.next.next = data7
head1= data1


let head2 = null
let data11 = new Node(1)
let data13 = new Node(3)
let data14 = new Node(4)
let data16 = new Node(6)

data11.next = data13
data11.next.next = data14
data11.next.next.next = data16
head2=  data11


function traver(head1) {
    while(head1) {
     console.log(head1.val)
     head1 = head1.next
    }
}



function merge(nhead1, nhead2) {
       let head1 = nhead1
       let head2 = nhead2
    while(head2) {
        // if(!head1) {
        //     return
        // }
        if(head1.val >= head2.val) {
  
            next1= head1.next
            next2 = head2.next
            head1.next = head2
            head2.next = next1
            head2 = next2
        } else {
            head1= head1.next
        }

    }
}

merge(head1, head2)
traver(head1)