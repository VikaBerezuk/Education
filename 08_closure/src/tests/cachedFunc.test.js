const { cache } = require('./../cachedFunc');

function complexFunction(arg1, arg2) {
    return arg1 + arg2;
}

let cachedFunc = cache(complexFunction);

describe('cache function', () => {
    test('test', () => {
        expect(true).toBe(true);
    });

    test.each([
        ['foo', 'bar', 'will be fulfilled: foobar'],
        ['foo', 'baz', 'will be fulfilled: foobaz'],
        ['foo', 'baz', 'will not be executed: foobaz'],
        ['foo', 'bar', 'will not be executed: foobar'],
        ['foo', 'bar', 'will be fulfilled: foobar'],
        ['foo', 'bar', 'will not be executed: foobar'],
        ['foo', 'bar', 'will be fulfilled: foobar'],
    ])('cache function', function (arg1, arg2, result) {
        expect(cachedFunc(arg1, arg2)).toBe(result);
    });
})