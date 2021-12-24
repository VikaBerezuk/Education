const { getNumber } = require('../getNumber');

describe('get number', () => {
    const arr1 = [1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17];
    const arr2 = [0, 2, 8, -4, 0, -122, 13, -4, 28, 12];

    test('test', () => {
       expect(true).toEqual(true);
    });

    test('waiting for data', () => {
        expect(getNumber()).toBeDefined();
    });

    test('get number even', () => {
        expect(getNumber(arr1)).toEqual(4);
    });

    test('get number odd', () => {
        expect(getNumber(arr2)).toEqual(13);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});

describe('test get number is not object', () => {
    test.each([
        [11, false],
        [null, false],
        ['1', false],
        ['null', false],
    ])('testing argument %s with expected result %s', function (arg, result) {
        expect(getNumber(arg)).toBe(result);
    });
})
