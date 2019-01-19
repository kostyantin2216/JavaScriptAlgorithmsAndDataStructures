const { countUnique } = require('./multiple-pointers');

describe('multiple pointers patterns', () => {
    describe('count unique', () => {
        test('the array should have 3 unique values', () => {
            expect(countUnique([1,1,1,2,2])).toEqual(2);
        });
        
        test('an empty array has no unique values', () => {
            expect(countUnique([])).toEqual(0);
        });
        
        test('the following array should have 8 unique values', () => {
            expect(countUnique([1,2,2,3,4,4,4,8,10,10,14,15,15,15])).toEqual(8);
        });
        
        test('the following array should have 4 unique values', () => {
            expect(countUnique([-3,-3,-3,-2,-2,0,1,1,1])).toEqual(4);
        });
    });
})
