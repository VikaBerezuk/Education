import {isCollided, resolveCollision, rotate} from "../collision";
import {Circle} from "../Circle";

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
        innerWidth: jest.fn(()=> 1)
    };
});

describe('Circle', () => {
    test('Circle', () => {
        expect(isCollided({}, {})).toBeFalsy();
    })
})

describe('rotate', () => {
    test('rotate', () => {
        expect(rotate(1,1)).toStrictEqual({"x": NaN, "y": NaN})
    })
})

describe('resolveCollision', () => {
    test('resolveCollision', () => {
        expect(resolveCollision(undefined, undefined)).toBeFalsy();
    })
})