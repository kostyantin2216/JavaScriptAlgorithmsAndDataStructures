const BinarySearchTree = require('./binary-search-tree');

describe('binary search tree', () => {
    it('should be able to insert', () => {
        const bst = new BinarySearchTree();

        bst.insert(10);
        bst.insert(15),
        bst.insert(5);
        bst.insert(20);
        bst.insert(1);
        bst.insert(13);
        bst.insert(10);

        expect(bst.root.val).toEqual(10);
        expect(bst.root.right.val).toEqual(15);
        expect(bst.root.left.val).toEqual(5);
        expect(bst.root.right.right.val).toEqual(20);
        expect(bst.root.left.left.val).toEqual(1);
        expect(bst.root.right.left.val).toEqual(13);
    });

    it('should be able to find a node', () => {
        const bst = new BinarySearchTree();

        bst.insert(10);
        bst.insert(15),
        bst.insert(5);
        bst.insert(20);
        bst.insert(1);
        bst.insert(13);
        bst.insert(10);

        expect(bst.findNode(10)).toEqual(bst.root);
        expect(bst.findNode(15)).toEqual(bst.root.right);
        expect(bst.findNode(5)).toEqual(bst.root.left);
        expect(bst.findNode(20)).toEqual(bst.root.right.right);
        expect(bst.findNode(1)).toEqual(bst.root.left.left);
        expect(bst.findNode(13)).toEqual(bst.root.right.left);
        expect(bst.findNode(100)).toBeNull();
    });

    it('should be able to traverse breadth first', () => {
        const bst = new BinarySearchTree();

        bst.insert(10);
        bst.insert(15),
        bst.insert(5);
        bst.insert(20);
        bst.insert(1);
        bst.insert(13);
        bst.insert(7);

        expect(bst.BFS()).toEqual([10, 5, 15, 1, 7, 13, 20]);
    });

    it('should be able to traverse depth first pre order', () => {
        const bst = new BinarySearchTree();

        bst.insert(10);
        bst.insert(15),
        bst.insert(5);
        bst.insert(20);
        bst.insert(1);
        bst.insert(13);
        bst.insert(7);

        expect(bst.DFSPreOrder()).toEqual([10, 5, 1, 7, 15,13, 20]);
    });

    it('should be able to traverse depth first post order', () => {
        const bst = new BinarySearchTree();

        bst.insert(10);
        bst.insert(15),
        bst.insert(5);
        bst.insert(20);
        bst.insert(1);
        bst.insert(13);
        bst.insert(7);

        expect(bst.DFSPostOrder()).toEqual([1, 7, 5, 13, 20, 15, 10]);
    });

    it('should be able to traverse depth first in order', () => {
        const bst = new BinarySearchTree();

        bst.insert(10);
        bst.insert(15),
        bst.insert(5);
        bst.insert(20);
        bst.insert(1);
        bst.insert(13);
        bst.insert(7);

        expect(bst.DFSInOrder()).toEqual([1,5,7,10,13,15,20]);
    });
});
