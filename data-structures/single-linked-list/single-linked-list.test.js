const SingleLinkedList = require('./single-linked-list');

describe('single linked list', () => {
    it('should push into list', () => {
        const list = new SingleLinkedList();
        list.push('hi');
        list.push('there');
        list.push('buddy');
        expect(list.length).toEqual(3);
        expect(list.head.val).toEqual('hi');
        expect(list.head.next.val).toEqual('there');
        expect(list.head.next.next.val).toEqual('buddy');
        expect(list.tail.val).toEqual('buddy');
        expect(list.tail.next).toBeNull();
    });

    it('should pop from list', () => {
        const list = new SingleLinkedList();

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
        expect(list.head.next).toEqual(list.tail);
    });

    it('should unshift into list', () => {
        const list = new SingleLinkedList();
        list.unshift('buddy');
        list.unshift('there');
        list.unshift('hi');
        expect(list.length).toEqual(3);
        expect(list.head.val).toEqual('hi');
        expect(list.head.next.val).toEqual('there');
        expect(list.head.next.next.val).toEqual('buddy');
        expect(list.tail.val).toEqual('buddy');
        expect(list.tail.next).toBeNull();
    });

    it('should shift from list', () => {
        const list = new SingleLinkedList();

        list.push('hi');
        expect(list.shift()).toEqual('hi');
        expect(list.shift()).toBeUndefined();
        expect(list.length).toEqual(0);

        list.push('hi');
        list.push('there');
        list.push('buddy');
        
        expect(list.length).toEqual(3);
        expect(list.shift()).toEqual('hi');
        expect(list.length).toEqual(2);
        expect(list.head.val).toEqual('there');
        expect(list.head.next.val).toEqual('buddy');
        expect(list.head.next.next).toBeNull();
        expect(list.head.next).toEqual(list.tail);
    });

    it('should get value at index', () => {
        const list = new SingleLinkedList();
        list.push('hi');
        list.push('there');
        list.push('buddy');

        expect(list.length).toEqual(3);
        expect(list.get(-1)).toBeNull();
        expect(list.get(0)).toEqual('hi');
        expect(list.get(1)).toEqual('there');
        expect(list.get(2)).toEqual('buddy');
        expect(list.get(3)).toBeNull();
    });

    it('should set value at index', () => {
        const list = new SingleLinkedList();
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

    it('should insert value at index', () => {
        const list = new SingleLinkedList();

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
    });

    it('should remove at index', () => {
        const list = new SingleLinkedList();
        list.push('hi');
        list.push('there');
        list.push('buddy');
        list.push('!!!');

        expect(list.remove(-1)).toBeUndefined()

        expect(list.remove(1)).toEqual('there');
        expect(list.get(1)).toEqual('buddy');
        expect(list.length).toEqual(3);
        
        expect(list.remove(0)).toEqual('hi');
        expect(list.get(0)).toEqual('buddy');
        expect(list.length).toEqual(2);

        expect(list.remove(1)).toEqual('!!!');
        expect(list.get(1)).toBeNull()
        expect(list.length).toEqual(1);

        expect(list.remove(1)).toBeUndefined();
    });

    it('should reverse list contents', () => {
        const list = new SingleLinkedList();
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