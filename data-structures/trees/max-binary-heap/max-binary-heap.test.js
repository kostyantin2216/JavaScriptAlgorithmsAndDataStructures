const MaxBinaryHeap = require('./max-binary-heap');

describe('max binary heap', () => {
    it('should be able to insert', () => {
        const mbh = new MaxBinaryHeap();

        mbh.insert(41);
        mbh.insert(39);
        mbh.insert(33);
        mbh.insert(18);
        mbh.insert(27);
        mbh.insert(12);
        mbh.insert(55);

        expect(mbh.values).toEqual([55,39,41,18,27,12,33]);
    });

    it('should be able to extract max', () => {
        const mbh = new MaxBinaryHeap();

        mbh.insert(41);
        mbh.insert(39);
        mbh.insert(33);
        mbh.insert(18);
        mbh.insert(27);
        mbh.insert(12);
        mbh.insert(55);
        expect(mbh.values).toEqual([55,39,41,18,27,12,33]);
        expect(mbh.extractMax()).toEqual(55);
        expect(mbh.values).toEqual([41,39,33,18,27,12]);
        expect(mbh.extractMax()).toEqual(41);
        expect(mbh.values).toEqual([39,27,33,18,12]);
        expect(mbh.extractMax()).toEqual(39);
        expect(mbh.values).toEqual([33,27,12,18]);
        expect(mbh.extractMax()).toEqual(33);
        expect(mbh.values).toEqual([27,18,12]);
        expect(mbh.extractMax()).toEqual(27);
        expect(mbh.values).toEqual([18,12]);
        expect(mbh.extractMax()).toEqual(18);
        expect(mbh.values).toEqual([12]);
        expect(mbh.extractMax()).toEqual(12);
        expect(mbh.values).toEqual([]);
        expect(mbh.extractMax()).toBeUndefined();
    });
});

/* [55,39,41,18,27,12,33]
// extract max = 55;
[33,39,41,18,27,12,55]
[33,39,41,18,27,12]
[41,39,33,18,27,12]
// extract max = 41
[12,39,33,18,27,41]
[12,39,33,18,27]
[39,12,33,18,27]
[39,27,33,18,12]
// extract max = 39
[12,27,33,18,39]
[12,27,33,18]
[33,27,12,18]
// extract max = 33
[18,27,12,33]
[18,27,12]
[27,18,12]
// extract max = 27
[12,18,27]
[12,18]
[18,12]
// extract max = 18
[12,18]
[12]
// extract max = 12
[12]
[]
 */