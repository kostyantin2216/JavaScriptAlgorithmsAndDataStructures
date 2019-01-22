const Queue = require('../../lists/queue/queue');

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const node = new Node(val);

        if (this.root === null) {
            this.root = node;
        } else {
            let currentNode = this.root;
            let inserted = false;
            while (!inserted) {
                if (val === currentNode.val) {
                    inserted = true;
                } else {
                    const side = val < currentNode.val ? 'left' : 'right';
                    if (currentNode[side] === null) {
                        currentNode[side] = node;
                        inserted = true;
                    } else {
                        currentNode = currentNode[side];
                    }
                }
            }
        }

        return this;
    }

    findNode(val) {
        let currentNode = this.root;
        while (currentNode && currentNode.val !== val) {
            currentNode = val < currentNode.val ? currentNode.left : currentNode.right;
        }

        return currentNode;
    }
    
    BFS() {
        const result =[];
        const queue = new Queue();
        queue.enqueue(this.root);
        
        while (queue.size) {
            const node = queue.dequeue();
            result.push(node.val);
            if (node.left) queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right);
        }

        return result;
    }

    DFSPreOrder() {
        const result = [];

        if (this.root !== null) {
            (function traverse(node) {
                result.push(node.val);
                if (node.left) traverse(node.left);
                if (node.right) traverse(node.right);
            })(this.root);
        }

        return result;
    }

    DFSPostOrder() {
        const result = [];

        if (this.root !== null) {
            (function traverse(node) {
                if (node.left) traverse(node.left);
                if (node.right) traverse(node.right);
                result.push(node.val);
            })(this.root);
        }

        return result;
    }

    DFSInOrder() {
        const result = [];

        if (this.root !== null) {
            (function traverse(node) {
                if (node.left) traverse(node.left);
                result.push(node.val);
                if (node.right) traverse(node.right);
            })(this.root);
        }

        return result;
    }

}

module.exports = BinarySearchTree;
