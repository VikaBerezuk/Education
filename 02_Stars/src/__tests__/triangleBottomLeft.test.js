const triangleBottomLeft = require('../js/triangleBottomLeft.js');

describe('triangle bottom left', () => {

    test('test', () => {
        expect(true).toBe(true);
    });

    test('to draw triangle bottom left', () => {
        expect(triangleBottomLeft())
            .toEqual(' *                   \n' +
                ' *  *                \n' +
                ' *     *             \n' +
                ' *        *          \n' +
                ' *           *       \n' +
                ' *              *    \n' +
                ' *  *  *  *  *  *  * \n');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
})