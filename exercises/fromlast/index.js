// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// assign 2 variables (first, last) to first node;
// move "first" n nodes into the list
// iterate through the list while first.next != null
    //move first and last one node forward in list

// return last 

function fromLast(list, n) {
    let endCheck = list.head
    let valueCheck = list.head;

    for (let i = 0; i < n; i++) {
        endCheck = endCheck.next
        console.log('endcheck', endCheck)
    }

    
    while (endCheck.next) {
        endCheck = endCheck.next;
        valueCheck = valueCheck.next;
    }

    return valueCheck;
}

module.exports = fromLast;
