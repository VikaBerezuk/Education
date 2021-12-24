const triangleTopLeft = require('../js/triangleTopLeft.js');

describe('triangle top left', () => {

    test('test', () => {
        expect(true).toBe(true);
    })

    test('to draw triangle top left', () => {
        expect(triangleTopLeft())
            .toEqual(' *  *  *  *  *  *  * \n' +
                ' *              *    \n' +
                ' *           *       \n' +
                ' *        *          \n' +
                ' *     *             \n' +
                ' *  *                \n' +
                ' *                   \n');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
});