class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    extractMax() {
        if (this.values.length === 0) return;

        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }

        return max;
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let shouldSwap = true;
        while (shouldSwap && idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            shouldSwap = this.values[idx] > this.values[parentIdx];
            if (shouldSwap) swap(this.values, idx, parentIdx);
            idx = parentIdx;
        }
    }

    bubbleDown() {
        let parentIdx = 0;

        let keepBubbling = true;
        while (keepBubbling) {
            let childrenIdxs = this.getChildrenIndexes(parentIdx);
            const leftLarger = childrenIdxs.left < this.values.length && this.values[childrenIdxs.left] > this.values[parentIdx];
            const rightLarger = childrenIdxs.right < this.values.length && this.values[childrenIdxs.right] > this.values[parentIdx];

            if (leftLarger || rightLarger) {
                let swapIdx = childrenIdxs.left;
                if ((!leftLarger && rightLarger) || (leftLarger && rightLarger && this.values[childrenIdxs.right] > this.values[childrenIdxs.left])) {
                    swapIdx = childrenIdxs.right;
                }

                swap(this.values, parentIdx, swapIdx);
                parentIdx = swapIdx;
            } else {
                keepBubbling = false;
            }
        }
    }

    getChildrenIndexes(parentIdx) {
        const childrenLocation = 2 * parentIdx;
        return {
            left: childrenLocation + 1,
            right: childrenLocation + 2
        };
    }
}

function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

module.exports = MaxBinaryHeap;
