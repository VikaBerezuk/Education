const { countCharacters } = require('../countCharacters');

describe('cont characters', () => {

    test('test', () => {
        expect(true).toBe(true);
    });

    test('waiting for data', () => {
        expect(countCharacters()).toBeDefined();
    });

    test('string with symbol', () => {
        expect(countCharacters('a 2ab !d')).toEqual({a: 2, b:1, d:1, 2:1});
    });

    test('string', () => {
        expect(countCharacters('aabcddeffge')).toEqual({a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1});
    })

    test('string', () => {
        expect(countCharacters('sparrow')).toEqual({s: 1, p: 1, a: 1, r: 2, o: 1, w: 1});
    });

    test('not string', () => {
        expect(countCharacters(['test'])).toEqual('not string');
    });

    test('not string', () => {
        expect(countCharacters(11)).toEqual('not string');
    });

    test('not string', () => {
        expect(countCharacters(null)).toEqual('not string');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});