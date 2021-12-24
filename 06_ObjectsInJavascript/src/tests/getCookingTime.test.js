const {getCookingTime} = require('../getCookingTime');

describe('get cooking eggs time test', () => {
    test('test', () => {
        expect(true).toBe(true);
    });

    test('waiting for data', () => {
        expect(getCookingTime()).toBeDefined();
    });

    test('time test, eggs > 0', () => {
        expect(getCookingTime(22)).toBe('returns 25')
    });

    test('time test, eggs > 0', () => {
        expect(getCookingTime(5)).toBe('returns 5')
    });

    test('time test, eggs === 0', () => {
        expect(getCookingTime(0)).toBe('returns 0')
    });

    test('time test , eggs < 0', () => {
        expect(getCookingTime(-5)).toBe(false)
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});

describe('not number', () => {
    test.each(
        [[null, false],
        ['1', false],
        [[1], false]])('arg === eggs, result ', (arg, result) => {
        expect(getCookingTime(arg)).toBe(result);
    })
})