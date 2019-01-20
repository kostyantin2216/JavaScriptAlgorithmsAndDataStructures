const { factorial, fib, power, productOfArray, recursiveRange } = require('./simple-recursion');

describe('simple recursion', () => {
    describe('the power of', () => {
        it('should be 1', () => {
            expect(power(2, 0)).toEqual(1);
        });
        it('should be 4', () => {
            expect(power(2, 2)).toEqual(4);
        });
        it('should be 16', () => {
            expect(power(2, 4)).toEqual(16);
        });
        it('should be 16', () => {
            expect(power(7, 8)).toEqual(5764801);
        });
    });

    describe('factorial', () => {
        it('should be 1', () => {
            expect(factorial(1)).toEqual(1);
        });
        it('should be 2', () => {
            expect(factorial(2)).toEqual(2);
        });
        it('should be 24', () => {
            expect(factorial(4)).toEqual(24);
        });
        it('should be 5040', () => {
            expect(factorial(7)).toEqual(5040);
        });        
    });

    describe('product of array', () => {
        it('should be 6', () => {
            expect(productOfArray([1,2,3])).toEqual(6);
        });
        it('should be 60', () => {
            expect(productOfArray([1,2,3,10])).toEqual(60);
        });
    });

    describe('recursive range', () => {
        it('should be 21', () => {
            expect(recursiveRange(6)).toEqual(21);
        });
        it('should be 55', () => {
            expect(recursiveRange(10)).toEqual(55);
        });
    });

    describe('fibonacci sequence', () => {
        it('should be 3', () => {
            expect(fib(4)).toEqual(3);
        });
        it('should be 55', () => {
            expect(fib(10)).toEqual(55);
        });
        it('should be 317811', () => {
            expect(fib(28)).toEqual(317811);
        });
        it('should be 9227465', () => {
            expect(fib(35)).toEqual(9227465);
        });
    });
});