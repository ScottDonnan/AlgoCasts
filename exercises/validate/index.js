// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    //compare left and right nodes to data value
    //if node.left.data < node.data and node.left
        //node.left.validate(node.left, max = node.data)
    // else if (node.left exists)
        //return false

    //if node.right.data ? node.data and node.right
        //node.right.valide(node.right, min = node.data)
    // else if no node.right
        //return false

    
    // if (node.left.data < node.data && node.left) {
    //     node.left.validate(node.left, max = node.data)
    // } else if (node.left) {
    //     return false
    // }

    // if (node.right.data > node.data && node.right) {
    //     node.right.validate(node.right, min = node.data)
    // } else if (node.right) {
    //     return false;
    // }

    if(max !== null && node.data > max) {
        return false;
    }

    if(min !== null && node.data < min) {
        return false;
    }

    if(node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if(node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}


module.exports = validate;
