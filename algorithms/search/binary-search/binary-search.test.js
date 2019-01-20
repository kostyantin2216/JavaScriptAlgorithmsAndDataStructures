const { binarySearch } = require('./binary-search');

describe('binary search', () => {
    const arr1 = [1,2,3,4,5];
    it('should be found at index 1', () => {
        expect(binarySearch(arr1, 2)).toEqual(1);
    });
    it('should be found at index 2', () => {
        expect(binarySearch(arr1, 3)).toEqual(2);
    });
    it('should be found at index 4', () => {
        expect(binarySearch(arr1, 5)).toEqual(4);
    });
    it('should not be in the list and must be equal to -1', () => {
        expect(binarySearch(arr1, 6)).toEqual(-1);
    });
    const arr2 = [5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99];
    it('should be found at index 2', () => {
        expect(binarySearch(arr2, 10)).toEqual(2);
    });
    it('should be found at index 16', () => {
        expect(binarySearch(arr2, 95)).toEqual(16);
    });
    it('should not be in the list and must be equal to -1', () => {
        expect(binarySearch(arr2, 100)).toEqual(-1);
    });
});
