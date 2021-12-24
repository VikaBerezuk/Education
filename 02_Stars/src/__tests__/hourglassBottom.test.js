const hourglassBottom = require('../js/hourglassBottom.js');

describe('hourglass bottom', () => {

    test('test', () => {
        expect(true).toBe(true);
    });

    test('to draw hourglass bottom', () => {
        expect(hourglassBottom())
            .toEqual('                     \n' +
                '                     \n' +
                '                     \n' +
                '          *          \n' +
                '       *     *       \n' +
                '    *           *    \n' +
                ' *  *  *  *  *  *  * \n');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
})