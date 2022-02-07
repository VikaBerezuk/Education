import {init} from "../index";
import {getRandomArbitrary, getRandomInt} from "../getRandom";

jest.mock('../Circle', () => {
    return {
        __esModule: true,
        Circle: jest.fn()
    }
})
jest.mock('../utils', () => {
    return {
        __esModule: true,
        addListener: jest.fn(),
        getElementId: jest.fn(),
        windowWH: jest.fn(),
        getContext: jest.fn(),
        animation: jest.fn(),
    };
});

describe('init', () => {
    test('test', () => {
        expect(true).toBeTruthy();
    })

    test('init', () => {
        expect(init()).toBeUndefined();
    })
})

describe('get random', () => {
    test('getRandomInt', () => {
        expect(getRandomInt(1,1)).toBe(1);
    })
    test('getRandomArbitrary', () => {
        expect(getRandomArbitrary(1,1)).toBe(1);
    })
})