const { findTitle } = require('../findTitle');

describe('find title', () => {
    const arr = [
        {title: 'Some title1'},
        {title: 'I like JS'},
        {user: 'This obj doesn\’t have key title js'},
        {title: 'Js - is the best!'}
    ];
    test('test', () => {
        expect(true).toBe(true);
    });

    test('waiting for data', () => {
        expect(findTitle()).toBeDefined();
    });

    test('find title', () => {
        expect(findTitle(arr, 'js')).toEqual([{ title: 'I like JS'}, { title: 'Js - is the best!' }]);
    });

    test('find title', () => {
        expect(findTitle(arr, 'best')).toEqual([ { title: 'Js - is the best!' } ]);
    });

    test('find title', () => {
        expect(findTitle(arr, 11)).toEqual(false);
    });

    test('find title', () => {
        expect(findTitle(arr, null)).toEqual(false);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
