const { linearSearch } = require('./linear-search');

describe('linear search', () => {
    it('should be found at index 1', () => {
        expect(linearSearch([10,15,20,25,30], 15)).toEqual(1);
    });
    it('should be found at index 5', () => {
        expect(linearSearch([9,8,7,6,5,4,3,2,1,0], 4)).toEqual(5);
    });
    it('should be found at index 0', () => {
        expect(linearSearch([100], 100)).toEqual(0);
    });
    it('should be found at index 3', () => {
        expect(linearSearch(['hi', 'my', 'name', 'is', 'jest'], 'is')).toEqual(3);
    });
    it('should not be in the list and must be equal to -1', () => {
        expect(linearSearch([1,2,3,4,5], 6)).toEqual(-1);
    });
    it('should not be in the list and must be equal to -1', () => {
        expect(linearSearch([9,8,7,6,5,4,3,2,1,0], 10)).toEqual(-1);
    });
    it('should not be in the list and must be equal to -1', () => {
        expect(linearSearch([100], 200)).toEqual(-1);
    });
});