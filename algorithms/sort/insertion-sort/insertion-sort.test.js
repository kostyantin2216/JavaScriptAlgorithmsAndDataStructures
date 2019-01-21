const { insertionSort } = require('./insertion-sort');

describe('selection sort', () => {
    it('should be [4,7,9,10,12,20]', () => {
        expect(insertionSort([4,20,12,10,7,9])).toEqual([4,7,9,10,12,20]);
    });
    it('should be [-10,0,4,7]', () => {
        expect(insertionSort([0,-10,7,4])).toEqual([-10,0,4,7]);
    });
    it('should be [1,2,3]', () => {
        expect(insertionSort([1,2,3])).toEqual([1,2,3]);
    });
    it('should be []', () => {
        expect(insertionSort([])).toEqual([]);
    });
    it('should be sorted by name', () => {
        const kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
        const result  = ['Blue', 'Garfield', 'Grumpy', 'Heathcliff', 'LilBub'];
        const strComp = (a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        }
        expect(insertionSort(kitties, strComp)).toEqual(result)
    });
    it('should be sorted by oldest to youngest', () => {
        const data = [
            { name: 'LilBub', age: 7 },
            { name: 'Garfield', age: 40 },
            { name: 'Heathcliff', age: 45 },
            { name: 'Blue', age: 1 },
            { name: 'Grumpy', age: 6 }
        ];
        const result = [
            { name: 'Heathcliff', age: 45 },
            { name: 'Garfield', age: 40 },
            { name: 'LilBub', age: 7 },
            { name: 'Grumpy', age: 6 },
            { name: 'Blue', age: 1 }
        ];
        const ageComp = (a, b) => b.age - a.age;
        expect(insertionSort(data, ageComp)).toEqual(result);
    });
});