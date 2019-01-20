const { averagePair, countUnique, isSubsequence } = require('./multiple-pointers');

describe('multiple pointers patterns', () => {
    describe('count unique', () => {
        it('should have 3 unique values', () => {
            expect(countUnique([1,1,1,2,2])).toEqual(2);
        });
        
        it('should not have any unique values', () => {
            expect(countUnique([])).toEqual(0);
        });
        
        it('should have 8 unique values', () => {
            expect(countUnique([1,2,2,3,4,4,4,8,10,10,14,15,15,15])).toEqual(8);
        });
        
        it('should have 4 unique values', () => {
            expect(countUnique([-3,-3,-3,-2,-2,0,1,1,1])).toEqual(4);
        });
    });

    describe('average pairs', () => {
        it('should have an average pair equal to 2.5', () => {
            expect(averagePair([1,2,3], 2.5)).toEqual(true);
        });

        it('should have an average pair equal to 8', () => {
            expect(averagePair([1,3,3,5,6,7,10,12,19], 8)).toEqual(true);
        });

        it('should not have an average pair equal to 4.1', () => {
            expect(averagePair([-1,0,3,4,5,6], 4.1)).toEqual(false);
        });

        it('should not have an average pair equal to 4', () => {
            expect(averagePair([], 4)).toEqual(false);
        });
    });

    describe('is subsequence', () => {
        it("should be a subsequence of 'hello'", () => {
            expect(isSubsequence('hello', 'hello world')).toEqual(true);
        });

        it("should be a subsequence of 'sing'", () => {
            expect(isSubsequence('sing', 'sting')).toEqual(true);
        });

        it("should be a subsequence of 'abc'", () => {
            expect(isSubsequence('abc', 'abracadabra')).toEqual(true);
        });

        it("should not be a subsequence of 'abc'", () => {
            expect(isSubsequence('abc', 'acb')).toEqual(false);
        });
    });
})
