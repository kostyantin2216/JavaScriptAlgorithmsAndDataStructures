const { maxSubarraySum } = require('./sliding-window');

describe('sliding window pattern', () => {
    describe('max subarray sum', () => {
        test('the max sum should be null when n is higher then the array length', () => {
            expect(maxSubarraySum([1,2,5,2], 5)).toBeNull();
        });
        
        test('the max sum of the array should be 10', () => {
            expect(maxSubarraySum([1,2,5,2,8,1,5], 2)).toEqual(10);
        });

        test('the max sum of the array should be 17', () => {
            expect(maxSubarraySum([1,2,5,2,8,1,5], 4)).toEqual(17);
        });

        test('the max sum of the array should be 6', () => {
            expect(maxSubarraySum([4,2,1,6], 1)).toEqual(6);
        });

        test('the max sum of the array should be 13', () => {
            expect(maxSubarraySum([4,2,1,6,2], 4)).toEqual(13);
        });

        test('the max sum of an empty array should be null', () => {
            expect(maxSubarraySum([],4)).toBeNull();
        });
    });
});