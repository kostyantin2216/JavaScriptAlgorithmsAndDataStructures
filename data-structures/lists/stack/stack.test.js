const Stack = require('./stack');

describe('stack', () => {
    it('should be able to push into the stack', () => {
        const stack = new Stack();
        expect(stack.push('hi')).toEqual(1);
        expect(stack.push('there')).toEqual(2);
        expect(stack.push('buddy')).toEqual(3);

        expect(stack.first.val).toEqual('buddy');
        expect(stack.first.next.val).toEqual('there');
        expect(stack.first.next.next.val).toEqual('hi');
        expect(stack.first.next.next.next).toBeNull();
    });

    it('should be able to pop from the stack', () => {
        const stack = new Stack();
        stack.push('hi');
        stack.push('there');
        stack.push('buddy');

        expect(stack.pop()).toEqual('buddy');
        expect(stack.pop()).toEqual('there');
        expect(stack.pop()).toEqual('hi');
        expect(stack.pop()).toBeNull();
    });
});