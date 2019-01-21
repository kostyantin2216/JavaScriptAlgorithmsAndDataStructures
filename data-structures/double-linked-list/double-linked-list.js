class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }

    pop() {
        let val;
        if (this.length) {
            if (this.length === 1) {
                val = this.head.val;
                this.head = null;
                this.tail = null;
            } else {
                val = this.tail.val;
                const newTail = this.tail.prev;
                this.tail.prev = null;
                this.tail = newTail;
                newTail.next = null;
            }
            this.length--;
        }
        return val;
    }

    unshift(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
    }

    shift() {
        let val;
        if (this.length) {
            if (this.length === 1) {
                val = this.head.val;
                this.head = null;
                this.tail = null;
            } else {
                val = this.head.val;
                const newHead = this.head.next;
                this.head.next = null;
                this.head = newHead;
                newHead.prev = null;
            }
            this.length--;
        }
        return val;
    }

    get(pos) {
        const node = this.findNode(pos);
        if (node === null) {
            return null;
        }
        return node.val;
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
            const prevNode = this.findNode(pos - 1);
            const nextNode = prevNode.next;

            newNode.prev = prevNode;
            newNode.next = nextNode;

            prevNode.next = newNode;
            nextNode.prev = newNode;

            this.length++;
        }
        return true;
    }

    remove(pos) {
        if (pos < 0 || pos >= this.length) return;

        let val;
        if (pos === 0) {
            val = this.shift();
        } else if (pos === this.length - 1) {
            val = this.pop();
        } else {
            const node = this.findNode(pos);

            node.next.prev = node.prev;
            node.prev.next = node.next;

            node.next = null;
            node.prev = null;

            val = node.val;

            this.length--;
        }
        return val;
    }

    reverse() {
        let prevNode = null;
        let node = this.head; 
        let nextNode = null;

        while (node !== null) {
            prevNode = node.prev; 
            nextNode = node.next; 

            node.next = prevNode;
            node.prev = nextNode;

            node = nextNode;
        }

        const oldTail = this.tail;
        this.tail = this.head;
        this.head = oldTail;

        return this;
    }

    findNode(pos) {
        if (pos < 0 || pos >= this.length) return null;

        let node;
        if (pos < (this.length / 2)) {
            node = this.head;
            for (let counter = 0; counter < pos; counter++) {
                node = node.next;
            }
        } else {
            node = this.tail;
            for (let counter = this.length - 1; counter > pos; counter--) {
                node = node.prev;
            }
        }

        return node;
    }
}

module.exports = DoubleLinkedList;
