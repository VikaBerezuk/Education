const { checkGuess } = require('../index');
jest.mock('../utils', () => {
    return {
        __esModule: true,
        getStyleColor: jest.fn(() => true),
        getAddClass: jest.fn(() => true),
        resetButton: jest.fn(() => true),
        deleteClass: jest.fn(() => true),
        getInnerHtml: jest.fn(() => true),
        getInputId:  jest.fn(() => "1")
            .mockImplementationOnce(() => 'a')
            .mockImplementationOnce(() => '222')
            .mockImplementationOnce(() => '22')
            .mockImplementationOnce(() => '2')
            .mockImplementationOnce(() => '111')
            .mockImplementationOnce(() => '56')
    };
});

const state = {
    minNumber: 1,
    maxNumber: 200,
    counterNumber: 15,
    guessCount: 1,
    randomNumber: 56,
    userGuess: 56
}

describe('checkGuess', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('NaN', () => {
        state.userGuess = 'a';
        expect(checkGuess(state))
            .toBe("NaN");
    })

    test('check guess', () => {
        state.userGuess = 222;
        expect(checkGuess(state)).toBe(false);
    })

    test('counterNumber: 2, guessCount: 2', () => {
        state.userGuess = 22;
        state.counterNumber= 2;
        state.guessCount= 2;
        expect(checkGuess(state)).toBe(false);
    })

    test('number out of range', () => {
        state.userGuess = 2;
        expect(checkGuess(state)).toBe(true);
    })

    test('number out of range', () => {
        state.userGuess = 111;
        expect(checkGuess(state)).toBe(true);
    })

    test('check guess === randomNumber', () => {
        state.userGuess = 56;
        expect(checkGuess(state)).toBe(true);
    })
})