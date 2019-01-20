const { findLogestSubstring, maxSubarraySum, minSubArrayLen } = require('./sliding-window');

describe('sliding window pattern', () => {
    describe('max subarray sum', () => {
        it('should be null when n is higher then the array length', () => {
            expect(maxSubarraySum([1,2,5,2], 5)).toBeNull();
        });
        
        it('should be 10', () => {
            expect(maxSubarraySum([1,2,5,2,8,1,5], 2)).toEqual(10);
        });

        it('should be 17', () => {
            expect(maxSubarraySum([1,2,5,2,8,1,5], 4)).toEqual(17);
        });

        it('should be 6', () => {
            expect(maxSubarraySum([4,2,1,6], 1)).toEqual(6);
        });

        it('should be 13', () => {
            expect(maxSubarraySum([4,2,1,6,2], 4)).toEqual(13);
        });

        it('should be null', () => {
            expect(maxSubarraySum([],4)).toBeNull();
        });
    });

    describe('min subarray length', () => {
        it('shoulb be 2', () => {
            expect(minSubArrayLen([2,3,1,2,4,3], 7)).toEqual(2);
        });
        
        it('should be 2', () => {
            expect(minSubArrayLen([2,1,6,5,4], 9)).toEqual(2);
        });
        
        it('shoulb be 1', () => {
            expect(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)).toEqual(1);
        });
        
        it('shoulb be 3', () => {
            expect(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)).toEqual(3);
        });
        
        it('shoulb be 0', () => {
            expect(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)).toEqual(0);
        });        
    });

    describe('the longest substring', () => {
        it('shoulb be 0', () => {
            expect(findLogestSubstring('')).toEqual(0);
        });
        
        it('shoulb be 7', () => {
            expect(findLogestSubstring('rithmschool')).toEqual(7);
        });
        
        it('shoulb be 6', () => {
            expect(findLogestSubstring('thisisawesome')).toEqual(6);
        });
        
        it('shoulb be 7', () => {
            expect(findLogestSubstring('thecatinthehat')).toEqual(7);
        });
        
        it('shoulb be 1', () => {
            expect(findLogestSubstring('bbbbbbb')).toEqual(1);
        });
        
        it('shoulb be 8', () => {
            expect(findLogestSubstring('longestsubstring')).toEqual(8);
        });
        
        it('shoulb be 6', () => {
            expect(findLogestSubstring('thisishowwedoit')).toEqual(6);
        });
    });
});