const hourglass = require('../js/hourglass.js');

describe('hourglass', () => {

    test('test', () => {
        expect(true).toBe(true);
    })

    test('to draw hourglass', () => {
        expect(hourglass())
            .toEqual(
                ' *                 * \n' +
                '    *           *    \n' +
                '       *     *       \n' +
                '          *          \n' +
                '       *     *       \n' +
                '    *           *    \n' +
                ' *                 * \n');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
})