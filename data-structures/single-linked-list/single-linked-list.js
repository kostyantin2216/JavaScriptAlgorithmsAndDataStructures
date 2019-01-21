class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return;

        let val = null;
        if (this.head.next) {
            let current = this.head;
            let pre = null;
            while (current.next) {
                pre = current;
                current = current.next;
            }
            val = pre.next.val;
            pre.next = null;
            this.tail = pre;
        } else {
            val = this.head.val;
            this.head = null;
            this.tail = null;
        }

        this.length--;

        return val;
    }

    unshift(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return;

        const head = this.head;
        this.head = head.next;

        this.length--;

        return head.val;
    }

    get(pos) {
        const node = this.findNode(pos);

        return node !== null ? node.val : null;
    }
    
    set(pos, val) {
        const node = this.findNode(pos);
        
        if (node !== null) {
            node.val = val;
            return true;
        }

        return false;
    }

    insert(pos, val) {
        if (pos < 0 || pos > this.length) return false;

        if (pos === 0) {
            this.unshift(val);
        } else if (pos === this.length) {
            this.push(val);
        } else {
            const newNode = new Node(val);
            const preNode = this.findNode(pos - 1);
            newNode.next = preNode.next;
            preNode.next = newNode;
            this.length++;
        }

        return true;
    }

    remove(pos) {
        if (pos < 0 || pos >= this.length) return;
        if (pos === 0) return this.shift();
        if (pos === this.length - 1) return this.pop();
        
        const preNode = this.findNode(pos - 1);
        const val = preNode.next.val;
        preNode.next = preNode.next.next;
        this.length--;

        return val;
    }

    reverse() {
        const oldHead = this.head;
        this.head = this.tail;
        this.tail = oldHead;

        let prevNode = null;
        let node = oldHead;
        let nextNode = null;

        while(node) {
            nextNode = node.next;
            node.next = prevNode;
            prevNode = node;
            node = nextNode;
        }

        return this;
    }

    findNode(pos) {
        if (pos < 0 || pos >= this.length) return null;

        let node = this.head;
        for (let count = 0; count < pos; count++) {
            node = node.next;
        }

        return node;
    }
}

module.exports = SingleLinkedList;
