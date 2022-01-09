const { checkGuess } = require('../index');
jest.mock('../utils', () => {
    return {
        __esModule: true,
        getInputId: jest.fn(() => true),
        getValueId: jest.fn(() => true),
        getStyleColor: jest.fn(() => true),
        getAddClass: jest.fn(() => true),
        resetButton: jest.fn(() => true),
        deleteClass: jest.fn(() => true),
        getInnerHtml: jest.fn(() => true),
    };
});

describe('checkGuess', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('NaN', () => {
        expect(checkGuess({minNumber: 1, maxNumber: 200, counterNumber: 15, guessCount: 1, randomNumber: 56, userGuess: NaN}))
            .toBe(false);
    })

    test('check guess', () => {
        expect(checkGuess({minNumber: 1, maxNumber: 200, counterNumber: 15, guessCount: 1, randomNumber: 56, userGuess: 222}))
            .toBe(false);
    })

    test('counterNumber: 2, guessCount: 2', () => {
        expect(checkGuess({minNumber: 1, maxNumber: 200, counterNumber: 2, guessCount: 2, randomNumber: 56, userGuess: 22}))
            .toBe(false);
    })

    test('number out of range', () => {
        expect(checkGuess({minNumber: 1, maxNumber: 200, counterNumber: 15, guessCount: 1, randomNumber: 56, userGuess: 2}))
            .toBe(true);
    })

    test('number out of range', () => {
        expect(checkGuess({minNumber: 1, maxNumber: 200, counterNumber: 15, guessCount: 1, randomNumber: 6, userGuess: 111}))
            .toBe(true);
    })

    test('check guess === randomNumber', () => {
        expect(checkGuess({minNumber: 1, maxNumber: 200, counterNumber: 15, guessCount: 1, randomNumber: 56, userGuess: 56}))
            .toBe(true);
    })
})