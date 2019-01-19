const { validAnagram, findDuplicates } = require('./frequency-counter');

describe('frequency counter patterns', () => {
    describe('anagrams', () => {
        test('an empty string should be an anagram of an empty string ', () => {
            expect(validAnagram('','')).toEqual(true);
        });

        test('cats should not be an anagram of cars', () => {
            expect(validAnagram('rat', 'car')).toEqual(false);
        });

        test('cinema should be an anagram of iceman', () => {
            expect(validAnagram('cinema', 'iceman')).toEqual(true);
        });

        test('bouncingmonkeyking should not be an anagram of moneybouncingking', () => {
            expect(validAnagram('bouncingmonkeyking', 'moneybouncingking')).toEqual(false);
        });
    });

    describe('find duplicates', () => {
        test('the array should not contain any duplicates', () => {
            expect(findDuplicates([1,2,3,4,5])).toEqual([]);
        });

        test('the array should contain 2 duplicates', () => {
            expect(findDuplicates([
                'cat', 'bird', 'cat', 'hippo', 'hippo', 'cat', 'dog', 'snake'
            ])).toEqual([
                'cat', 'hippo'
            ]);
        });

        test('an empty array should not contain any duplicates', () => {
            expect(findDuplicates([])).toEqual([]);
        });
    });
});
