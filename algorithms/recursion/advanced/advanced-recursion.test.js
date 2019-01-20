const { 
    capitalizeFirst, 
    capitalizeWords, 
    collectStrings, 
    flatten, 
    isPalindrome, 
    nestedEvenSum, 
    reverse, 
    someRecursive, 
    stringifyNumbers 
} = require('./advanced-recursion');

describe('advanced recursion', () => {
    describe('reverse string', () => {
        it('should be emosewa', () => {
            expect(reverse('awesome')).toEqual('emosewa');
        });
        it('should be loohcsmhtir', () => {
            expect(reverse('rithmschool')).toEqual('loohcsmhtir');
        });
    });

    describe('palindrome', () => {
        it('should not be palindrome', () => {
            expect(isPalindrome('awesome')).toEqual(false);
        });
        it('should not be palindrome', () => {
            expect(isPalindrome('foobar')).toEqual(false);
        });
        it('should be palindrome', () => {
            expect(isPalindrome('tacocat')).toEqual(true);
        });
        it('should be palindrome', () => {
            expect(isPalindrome('amanaplanacanalpanama')).toEqual(true);
        });
        it('should not be palindrome', () => {
            expect(isPalindrome('amanaplanacanalpandemonium')).toEqual(false);
        });
    });

    describe('some recursive', () => {
        const isOdd = val => val % 2 !== 0;
        const gt10 = val => val > 10;

        it('should be odd', () => {
            expect(someRecursive([1,2,3,4], isOdd)).toEqual(true);
        });
        it('should be odd', () => {
            expect(someRecursive([4,6,8,9], isOdd)).toEqual(true);
        });
        it('should not be odd', () => {
            expect(someRecursive([4,6,8], isOdd)).toEqual(false);
        });
        it('should not be greater then 10', () => {
            expect(someRecursive([4,6,8], gt10)).toEqual(false);
        });
    });

    describe('flatten', () => { 
        it('should be [1, 2, 3, 4, 5]', () => {
            expect(flatten([1, 2, 3, [4, 5] ])).toEqual([1, 2, 3, 4, 5]);
        });
        it('should be [1, 2, 3, 4, 5]', () => {
            expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
        });
        it('should be [1, 2, 3]', () => {
            expect(flatten([[1],[2],[3]])).toEqual([1, 2, 3]);
        });
        it('should be [1, 2, 3, 4, 5]', () => {
            expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1, 2, 3]);
        });
    });

    describe('capitalize first', () => {
        it('should make the first letter of each string in the array a capital letter', () => {
            expect(capitalizeFirst(['car','taco','banana'])).toEqual(['Car','Taco','Banana']);
        });
    });

    describe('nested even sum', () => {
        const obj1 = {
            outer: 2,
            obj: {
                inner: 2,
                otherObj: {
                    superInner: 2,
                    notANumber: true,
                    alsoNotANumber: "yup"
                }
            }
        }
        
        const obj2 = {
            a: 2,
            b: {
                b: 2,
                bb: {
                    b: 3,
                    bb: {
                        b: 2
                    }
                }
            },
            c: {
                c: {
                    c: 2
                },
                cc: 'ball',
                ccc: 5
            },
            d: 1,
            e: {
                e: {
                    e: 2
                },
                ee: 'car'
            }
        };

        const obj3 = {
            a: 'a',
            b: {
                bb: null,
                bb1: '23'
            },
            c: true,
            d: false,
            e: {
                ee: {
                    eee: '333',
                    eee1: 'hello'
                }
            },
            f: undefined
        };
        
        it('should have a total of 6', () => {
            expect(nestedEvenSum(obj1)).toEqual(6);
        });
        it('should have a total of 10', () => {
            expect(nestedEvenSum(obj2)).toEqual(10);
        });
        it('should have a total of 0', () => {
            expect(nestedEvenSum(obj3)).toEqual(0);
        })
    });

    describe('capitalize words', () => {
        it("should be ['I', 'AM', 'LEARNING', 'RECURSION']", () => {
            expect(capitalizeWords(['i', 'am', 'learning', 'recursion'])).toEqual(['I', 'AM', 'LEARNING', 'RECURSION']);
        })
    });

    describe('stringify numbers', () => {
        const obj = {
            num: 1,
            test: [],
            data: {
                val: 4,
                info: {
                    isRight: true,
                    random: 66,
                    unavailble: null
                }
            }
        };
        
        const resultObj = {
            num: "1",
            test: [],
            data: {
                val: "4",
                info: {
                    isRight: true,
                    random: "66",
                    unavailble: null
                }
            }
        };
        
        it('should equal resultObj', () => {
            expect(stringifyNumbers(obj)).toEqual(resultObj);
        });
    });

    describe('collect strings', () => {
        const obj = {
            stuff: "foo",
            data: {
                val: {
                    thing: {
                        info: "bar",
                        moreInfo: {
                            evenMoreInfo: {
                                weMadeIt: "baz"
                            }
                        }
                    }
                }
            }
        };
        
        it('should have 3 strings', () => {
            expect(collectStrings(obj)).toEqual(["foo", "bar", "baz"]);
        });
    });
});
