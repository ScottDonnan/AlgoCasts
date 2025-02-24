// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
   
    //initialize new queue to be weaved

    //loop through longest source 1 or 2 weave
        // if sourceOne.peek
            // pop value from sourceOne, shift it to weave queue
        // if sourcetwo.peek
            // pop value from source2, shift it to weave queue

    //return new queue with weaved data from 2 sources

    const weaved = new Queue()

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            weaved.add(sourceOne.remove())
        }
        if (sourceTwo.peek()) {
            weaved.add(sourceTwo.remove())
        }
    }

    return weaved


}

module.exports = weave;
