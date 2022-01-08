const { getQuantityPostsByAuthor } = require('../getQuantityPostsByAuthor');

describe('get quantity posts by author', () => {
    const listOfPosts2 = [
        {
            id: 1,
            post: 'some post1',
            title: 'title 1',
            author: 'Rimus',
            comments: [
                {
                    id: 1.1,
                    comment: 'some comment1',
                    title: 'title 1',
                    author: 'Rimus'
                },
                {
                    id: 1.2,
                    comment: 'some comment2',
                    title: 'title 2',
                    author: 'Uncle'
                }]
        },
        {
            id: 2,
            post: 'some post2',
            title: 'title 2',
            author: 'Ivanov',
            comments: [
                {
                    id: 1.1,
                    comment: 'some comment1',
                    title: 'title 1',
                    author: 'Rimus'
                },
                {
                    id: 1.2,
                    comment: 'some comment2',
                    title: 'title 2',
                    author: 'Uncle'
                },
                {
                    id: 1.3,
                    comment: 'some comment3',
                    title: 'title 3',
                    author: 'Rimus'
                }]
        },
        {
            id: 3,
            post: 'some post3',
            title: 'title 3',
            author: 'Rimus'
        },
        {
            id: 4,
            post: 'some post4',
            title: 'title 4',
            author: 'Uncle'
        }
    ];

    test('test', () => {
        expect(true).toBe(true);
    });

    test('no undefined, null, false, 0', () => {
        expect(getQuantityPostsByAuthor()).toBeDefined();
    });

    test('arguments 1 !== array || arguments 2 !== string', () => {
        expect(getQuantityPostsByAuthor('aaa', 'aaa')).toEqual(false)
    });

    test('arguments 1 !== array || arguments 2 !== string', () => {
        expect(getQuantityPostsByAuthor(['aaa', {}], 111)).toEqual(false)
    });

    test('get quantity posts by author', () => {
        expect(getQuantityPostsByAuthor(listOfPosts2, 'Rimus')).toEqual('posts - 2, comments - 3')
    });
})