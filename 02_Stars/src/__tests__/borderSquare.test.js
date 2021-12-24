const borderSquare = require('../js/borderSquare.js');

describe('border square', () => {

    test('test', () => {
        expect(true).toBe(true);
    });

    test('to draw border square', () => {
        expect(borderSquare())
            .toEqual(' *  *  *  *  *  *  * \n' +
                ' *                 * \n' +
                ' *                 * \n' +
                ' *                 * \n' +
                ' *                 * \n' +
                ' *                 * \n' +
                ' *  *  *  *  *  *  * \n');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
})