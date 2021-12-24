const square = require('../js/square.js');

describe('square', () => {

    test('test', () => {
        expect(true).toBe(true);
    })

    test('to draw square', () => {
        expect(square())
            .toEqual(' *  *  *  *  *  *  * \n' +
                ' *  *  *  *  *  *  * \n' +
                ' *  *  *  *  *  *  * \n' +
                ' *  *  *  *  *  *  * \n' +
                ' *  *  *  *  *  *  * \n' +
                ' *  *  *  *  *  *  * \n' +
                ' *  *  *  *  *  *  * \n');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
})