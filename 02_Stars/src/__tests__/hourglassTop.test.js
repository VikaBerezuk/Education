const hourglassTop = require('../js/hourglassTop.js');

describe('hourglass top', () => {

    test('test', () => {
        expect(true).toBe(true);
    });

    test('to draw hourglass top', () => {
        expect(hourglassTop())
            .toEqual(' *  *  *  *  *  *  * \n' +
                '    *           *    \n' +
                '       *     *       \n' +
                '          *          \n' +
                '                     \n' +
                '                     \n' +
                '                     \n');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
})