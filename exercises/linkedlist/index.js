// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    insertFirst(record) {    
        const node = new Node(record, this.head);
        this.head = node;
    }

    size() {
        let count = 0;
        let node = this.head;

        while (node) {
            count++;
            node = node.next;
        }

        return count;
    }

    getFirst() {
        return this.head
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        
        let node = this.head;
        
        while(node) {
            if(node.next){
                node = node.next;
            } else {
                return node;
            }
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        
        this.head = this.head.next
    }

    removeLast() {
       if (!this.head) {
           return;
       } else if (!this.head.next) {
           this.head = null;
           return;
       }

       let previous = this.head
       let node = this.head.next

       while (node.next) {
           previous = node;
           node = node.next;
       }
       
       previous.next = null;
    }

    insertLast(data) {
        let node = this.head;
        let last = this.getLast();

        if (!node) {
            this.insertFirst(data);
            return;
        }

        last.next = new Node(data);
    }

    getAt(i) {
        
        let count = 0;
        let node = this.head;

        while(node) {
            if (count === i) {
                return node;
            }
            count++;
            node = node.next;
        }

        return null;
        
        // if (!this.head) {
        //     return null
        // }

        // let count = 0;
        // let node = this.head;

        // if (i >= this.size()) {
        //     return null;
        // }


        // while (count < i) {
        //     node = node.next
        //     count++
        // }

        // return node;
    }

    removeAt(i) {
        let counter = 0;
        let node = this.head

        if(!node) {
            return null;
        }

        if(i === 0) {
            this.head = this.head.next;
            return;
        }

        const prev = this.getAt(i - 1)

        if(!prev || !prev.next) {
            return null;
        }

        prev.next = prev.next.next
    }

    insertAt(data, index) {
        //edge case - add node to end of list if out of bounds
        //edge cases - empty list
        //edge case 

        if(!this.head) {
            this.head = new Node(data)
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head)
            return;
        }

        const prev = this.getAt(index - 1) || this.getLast()
        prev.next = new Node(data, prev.next)

        
        
        // let prev = this.getAt(index - 1);
        // let node = this.getAt(index);
        // const newNode = new Node(data, node)

        // if(!node) {
        //     this.insertLast(data);
        // } else if(!prev) {
        //     this.insertFirst(data)
        // } else {
        //     prev.next = newNode;
        // }
        
    }

    forEach(handler) {
        let node = this.head;

        while(node) {
            handler(node)
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
