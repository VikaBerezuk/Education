const { checkGuess, resetGame, setGameOver, checkRangeNumber, init } = require('../index');
jest.mock('../utils', () => {
    return {
        __esModule: true,
        getStyleColor: jest.fn(() => true),
        getAddClass: jest.fn(() => true),
        resetButton: jest.fn(() => true),
        deleteClass: jest.fn(() => true),
        getInnerHtml: jest.fn(() => true),
        addListener: jest.fn(() => true),
        getInputId: jest.fn(() => 1)
            .mockImplementationOnce(() => 'a')
            .mockImplementationOnce(() => 222)
            .mockImplementationOnce(() => 22)
            .mockImplementationOnce(() => 2)
            .mockImplementationOnce(() => 111)
            .mockImplementationOnce(() => 56)
            .mockImplementationOnce(() => 106)
            .mockImplementationOnce(() => -11)
            .mockImplementationOnce(() => 106)

    };
});

const state = {
    minNumber: 1,
    maxNumber: 200,
    counterNumber: 15,
    guessCount: 1,
    randomNumber: 56
}

describe('checkGuess', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('NaN', () => {
        expect(checkGuess(state))
            .toBe("NaN");
    })

    test('check guess', () => {
        expect(checkGuess(state)).toBe(false);
    })

    test('counterNumber: 2, guessCount: 2', () => {
        state.counterNumber= 2;
        state.guessMaxCount= 2;
        expect(checkGuess(state)).toBe(true);
    })

    test('number out of range', () => {
        expect(checkGuess(state)).toBe(false);
    })

    test('number out of range', () => {
        expect(checkGuess(state)).toBe(false);
    })

    test('check guess === randomNumber', () => {
        expect(checkGuess(state)).toBe(true);
    })

    // test('check guess > randomNumber', () => {
    //     expect(checkGuess(state)).toBe(true);
    // })
})

describe('reset game', () => {
    test('', () => {
        expect(resetGame(state)).toBeUndefined();
    })
})

describe('set game over', () => {
    test('', () => {
        expect(setGameOver(state)).toBeUndefined();
    })
})

describe('check range number', () => {
    test('', () => {
        expect(checkRangeNumber(state)).toBeUndefined();
    })

    test('', () => {
        state.minNumber = 11;
        expect(checkRangeNumber(state)).toBeUndefined();
    })

    test('', () => {
        state.minNumber = -1;
        expect(checkRangeNumber(state)).toBeUndefined();
    })
})

describe('init', () => {
    test('init', () => {
        expect(init(state)).toBeUndefined();
    })
})