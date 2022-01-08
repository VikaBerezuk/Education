const { getSum } = require('../getSum');

describe('get sum', () => {
    test('test', () => {
        expect(true).toBe(true);
    });

    test('no undefined, null, false, 0', () => {
        expect(getSum()).toBeDefined();
    });

    test('no string', () => {
        expect(getSum(1111,111)).toBe(false)
    })

    test('get sum', () => {
        expect(getSum('123', '324')).toBe('447');
    });

    test('get sum', () => {
        expect(getSum('11111111111111111111111111111111111111111111111111',
            '23333333333333333333333333333333333333333333333333'))
            .toBe('34444444444444444444444444444444444444444444444444');
    });
})