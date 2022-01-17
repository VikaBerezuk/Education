const { every, num } = require('../every');

describe('every', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test.each([
        [[8, 2, 4], num, true],
        [[1, 5, 7], num, false],
        ['5', num, false],
        [[1, 5, 7], 'num', false],
    ])('every', function (arr, func, result) {
        expect(every(arr, func)).toBe(result);
    });
})