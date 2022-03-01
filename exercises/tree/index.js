// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data = data;
        this.children = []
    }

    add(data){
        this.children.push(new Node(data))
    }

    remove(data){
        this.children = this.children.filter(node => {
            return node.data !== data
        })
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    traverseBF(fn) {
        //make array for storing nodes
        //initialize array with root
        //while array.length > 0
            //loop through array[0] children
                //push children of array[0] to end of array
            //take value of array[0] and run through fn
            //shift array[0]

        const storeArry = [this.root];

        while (storeArry.length > 0) {
            storeArry.push(...storeArry[0].children)
            

            fn(storeArry[0])

            storeArry.shift()
        }
    }

    traverseDF(fn) {
        const storeArry = [this.root];

        while(storeArry.length) {
            let node = storeArry.shift();

            storeArry.unshift(...node.children);

            fn(node);
        };
    };
}

module.exports = { Tree, Node };
