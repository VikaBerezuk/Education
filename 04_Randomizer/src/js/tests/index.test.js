const { generated, resetGame, getRandomNumber, init } = require('../index')
jest.mock('../utils', () => {
    return {
        __esModule: true,
         alertCall: jest.fn(),
        reStartGame: jest.fn(),
        getValue: jest.fn(() => true),
        addListener: jest.fn(() => true),
    };
});

describe('tests for generate function', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('text generate', () => {
        expect(generated({
            minNumber: 0,
            maxNumber: 5,
            arr: []})).toBe(true);
    })

    test('text generate', () => {
        expect(generated({
            arr: [1, 2, 3, 4, 5],
            maxNumber: 5,
            minNumber: 1
        })).toBe(false);
    })
})

describe('tests for reset game function', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('tests for reset game', () => {
        expect(resetGame({
            minNumber: 1,
            maxNumber: 5,
            arr: [1, 2, 3, 4, 5],
            randomNumber: 1,
            valueGenerate: 'Generated number: 1'})).toBe(true);
    })
})

describe('tests for random number function', () => {
    test('test for random number', () => {
        expect(getRandomNumber({
            minNumber: 1,
            maxNumber: 5,
            arr: []})).toBeUndefined();
    })

    test('test for random number', () => {
        expect(getRandomNumber({
            minNumber: 1,
            maxNumber: 5,
            randomNumber: 4,
            valueGenerate: 'Generated number: 4',
            arr: [1, 2, 3, 4, 5]})).toBeUndefined();
    })

    test('test for random number, max < min', () => {
        expect(getRandomNumber({
            minNumber: 5,
            maxNumber: 1,
            arr: []})).toBeUndefined();
    })
})

describe('init', () => {
    test('init', () => {
        expect(init()).toBeUndefined();
    })
})