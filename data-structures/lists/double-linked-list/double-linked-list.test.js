const DoubleLinkedList = require('./double-linked-list');

describe('double linked list', () => {
    test('Can push into list', () => {
        const list = new DoubleLinkedList();
        list.push('hi');
        list.push('there');
        list.push('buddy');
        expect(list.length).toEqual(3);
        expect(list.head.val).toEqual('hi');
        expect(list.head.prev).toBeNull();
        expect(list.head.next.val).toEqual('there');
        expect(list.head.next.prev.val).toEqual('hi');
        expect(list.head.next.next.val).toEqual('buddy');
        expect(list.tail.val).toEqual('buddy');
        expect(list.tail.prev.val).toEqual('there');
        expect(list.tail.next).toBeNull();
    });

    test('Can pop from list', () => {
        const list = new DoubleLinkedList();

        list.push('hi');

        expect(list.pop()).toEqual('hi');
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.pop()).toBeUndefined();
        expect(list.length).toEqual(0);

        list.push('hi');
        list.push('there');
        list.push('buddy');
        
        expect(list.length).toEqual(3);
        expect(list.pop()).toEqual('buddy');
        expect(list.length).toEqual(2);
        expect(list.head.val).toEqual('hi');
        expect(list.head.next.val).toEqual('there');
        expect(list.head.next.next).toBeNull();
        expect(list.head.next.prev.val).toEqual('hi');
        expect(list.head.prev).toBeNull();
        expect(list.head.next).toEqual(list.tail);
        expect(list.tail.val).toEqual('there');
        expect(list.tail.prev.val).toEqual('hi');
        expect(list.tail.next).toBeNull();
    });

    test('Can unshift into list', () => {
        const list = new DoubleLinkedList();
        list.unshift('buddy');
        list.unshift('there');
        list.unshift('hi');
        expect(list.length).toEqual(3);
        expect(list.head.val).toEqual('hi');
        expect(list.head.next.val).toEqual('there');
        expect(list.head.next.next.val).toEqual('buddy');
        expect(list.head.next.prev.val).toEqual('hi');
        expect(list.head.prev).toBeNull();
        expect(list.tail.val).toEqual('buddy');
        expect(list.tail.prev.val).toEqual('there');
        expect(list.tail.next).toBeNull();
    });

    test('Can shift from list', () => {
        const list = new DoubleLinkedList();

        list.push('hi');
        expect(list.shift()).toEqual('hi');
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.shift()).toBeUndefined();
        expect(list.length).toEqual(0);

        list.push('hi');
        list.push('there');
        list.push('buddy');
        
        expect(list.length).toEqual(3);
        expect(list.shift()).toEqual('hi');
        expect(list.head.prev).toBeNull();
        expect(list.length).toEqual(2);
        expect(list.head.val).toEqual('there');
        expect(list.head.next.val).toEqual('buddy');
        expect(list.head.next.next).toBeNull();
        expect(list.head.next.prev.val).toEqual('there')
        expect(list.head.next).toEqual(list.tail);
    });

    test('Can get value at index', () => {
        const list = new DoubleLinkedList();
        list.push('hi');
        list.push('there');
        list.push('buddy');
        list.push('!!!');

        expect(list.length).toEqual(4);
        expect(list.get(-1)).toBeNull();
        expect(list.get(0)).toEqual('hi');
        expect(list.get(1)).toEqual('there');
        expect(list.get(2)).toEqual('buddy');
        expect(list.get(3)).toEqual('!!!');
        expect(list.get(4)).toBeNull();
    });

    test('Can set value at index', () => {
        const list = new DoubleLinkedList();
        list.push('hi');
        list.push('there');
        list.push('buddy');

        expect(list.set(-1, 'stammmmm')).toEqual(false);
        expect(list.set(0, 'shalom')).toEqual(true);
        expect(list.set(1, 'ya')).toEqual(true);
        expect(list.set(2, 'haver')).toEqual(true);
        expect(list.set(3, 'stammmmmm')).toEqual(false);

        expect(list.length).toEqual(3);
        expect(list.get(-1)).toBeNull();
        expect(list.get(0)).toEqual('shalom');
        expect(list.get(1)).toEqual('ya');
        expect(list.get(2)).toEqual('haver');
        expect(list.get(3)).toBeNull();
    });
    
    test('Can insert value at index', () => {
        const list = new DoubleLinkedList();

        expect(list.insert(-1, 'stammmmmm')).toEqual(false);
        expect(list.insert(0, 'buddy')).toEqual(true);
        expect(list.insert(0, 'hi')).toEqual(true);
        expect(list.insert(1, 'there')).toEqual(true);
        expect(list.insert(3, '!!!')).toEqual(true);
        expect(list.insert(5, 'stammmmmm')).toEqual(false);

        expect(list.length).toEqual(4);

        expect(list.get(0)).toEqual('hi');
        expect(list.get(1)).toEqual('there')
        expect(list.get(2)).toEqual('buddy')
        expect(list.get(3)).toEqual('!!!');

        const node = list.findNode(2);
        expect(node.val).toEqual('buddy');
        expect(node.prev.val).toEqual('there');
        expect(node.next.val).toEqual('!!!');
        expect(node.prev.next.val).toEqual('buddy');
        expect(node.next.prev.val).toEqual('buddy');
    });

    test('Can remove at index', () => {
        const list = new DoubleLinkedList();
        list.push('hi');
        list.push('there');
        list.push('buddy');
        list.push('!!!');

        expect(list.remove(-1)).toBeUndefined()

        expect(list.remove(1)).toEqual('there');

        const node = list.findNode(1);
        expect(node.val).toEqual('buddy');
        expect(node.prev.val).toEqual('hi');
        expect(node.next.val).toEqual('!!!');
        expect(list.length).toEqual(3);
        
        expect(list.remove(0)).toEqual('hi');
        expect(list.get(0)).toEqual('buddy');
        expect(list.length).toEqual(2);

        expect(list.remove(1)).toEqual('!!!');
        expect(list.get(1)).toBeNull()
        expect(list.length).toEqual(1);

        expect(list.remove(1)).toBeUndefined();
    });
    
    test('Can reverse list contents', () => {
        const list = new DoubleLinkedList();
        list.push('a');
        list.push('b');
        list.push('c');
        list.push('d');
        list.push('e');

        list.reverse();

        expect(list.head.val).toEqual('e');
        expect(list.head.next.val).toEqual('d');
        expect(list.tail.val).toEqual('a');
        expect(list.tail.next).toBeNull();

        expect(list.pop()).toEqual('a');
        expect(list.pop()).toEqual('b');
        expect(list.pop()).toEqual('c');
        expect(list.pop()).toEqual('d');
        expect(list.pop()).toEqual('e');
    });
});