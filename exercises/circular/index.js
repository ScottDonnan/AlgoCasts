// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true


// initiate a slow and fast variable
// move through list stopping when fast = slow or fast = null
    // if at any point fast === slow
        // return true list is circular
    // if at any point fast === null
        // return false we found end of list
function circular(list) {
    let fast = list.head;
    let slow = list.head;

    do {
        fast = fast.next.next;
        slow = slow.next;
    } while (fast.next && fast.next.next && fast !== slow)

    return fast === slow;
}

module.exports = circular;

// let fast = list.head;
//     let slow = list.head;

//     while (fast.next && fast.next.next) {
//         fast = fast.next.next;
//         slow = slow.next;

//         if (slow === fast) {
//             return true;
//         }
//     };

//     return false;