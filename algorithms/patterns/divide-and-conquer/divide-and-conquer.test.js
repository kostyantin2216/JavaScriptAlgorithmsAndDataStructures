const { search } = require('./divide-and-conquer');

describe('divide and conquer patterns', () => {
    describe('search', () => {
        test('the index of 4 in the array should be 3', () => {
            expect(search([1,2,3,4,5,6], 4)).toEqual(3);
        })

        test('the index of 6 in the array should be 5', () => {
            expect(search([1,2,3,4,5,6], 6)).toEqual(5);
        });

        test('the index of 11 in the array should equal -1', () => {
            expect(search([1,2,3,4,5,6], 11)).toEqual(-1);
        });
    });
});