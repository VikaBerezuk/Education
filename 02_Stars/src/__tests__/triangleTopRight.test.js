const triangleTopRight = require('../js/triangleTopRight.js');

describe('triangle top right', () => {

    test('test', () => {
        expect(true).toBe(true);
    })

    test('to draw triangle top right', () => {
        expect(triangleTopRight())
            .toEqual(' *  *  *  *  *  *  * \n' +
                '    *              * \n' +
                '       *           * \n' +
                '          *        * \n' +
                '             *     * \n' +
                '                *  * \n' +
                '                   * \n');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
})