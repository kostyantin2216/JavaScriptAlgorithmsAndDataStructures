const Queue = require('./queue');

describe('queue', () => {
    it('should be able to enqueue', () => {
        const queue = new Queue();

        expect(queue.enqueue('hi')).toEqual(1);
        expect(queue.enqueue('there')).toEqual(2);
        expect(queue.enqueue('buddy')).toEqual(3);

        expect(queue.first.val).toEqual('hi');
        expect(queue.first.next.val).toEqual('there');
        expect(queue.first.next.next.val).toEqual('buddy');
        expect(queue.first.next.next.next).toBeNull();

        expect(queue.last.val).toEqual('buddy');
        expect(queue.last.next).toBeNull();
        expect(queue.first.next.next).toEqual(queue.last);
    });

    it('should be able to dequeue', () => {
        const queue = new Queue();
        queue.enqueue('hi');
        queue.enqueue('there');
        queue.enqueue('buddy');

        expect(queue.dequeue()).toEqual('hi');
        expect(queue.dequeue()).toEqual('there');
        expect(queue.dequeue()).toEqual('buddy');
        expect(queue.dequeue()).toBeNull();
    });
})