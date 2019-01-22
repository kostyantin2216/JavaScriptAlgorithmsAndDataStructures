class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.size = 0;
    }

    push(val) {
        const node = new Node(val);

        if (this.first === null) {
            this.first = node;
        } else {
            node.next = this.first;
            this.first = node;
        }

        this.size++;
        return this.size;
    }

    pop() {
        if (this.size === 0) return null;
        
        const val = this.first.val;
        this.first = this.first.next;
        this.size--;
        
        return val;
    }
}

module.exports = Stack;
