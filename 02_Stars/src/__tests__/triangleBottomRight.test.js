const triangleBottomRight = require('../js/triangleBottomRight.js');

describe('triangle Bottom Right', () => {

    test('test', () => {
        expect(true).toBe(true);
    })

    test('to draw triangle bottom right', () => {
        expect(triangleBottomRight())
            .toEqual('                   * \n' +
                '                *  * \n' +
                '             *     * \n' +
                '          *        * \n' +
                '       *           * \n' +
                '    *              * \n' +
                ' *  *  *  *  *  *  * \n');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
});