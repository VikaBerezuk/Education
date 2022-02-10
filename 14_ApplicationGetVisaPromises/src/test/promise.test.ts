import {promiseRace, startRace} from "../ts/promise";

jest.mock('../ts/utils', () => {
    return {
        __esModule: true,
        addListener: jest.fn(),
        getElementById: jest.fn(),
        getValueContext: jest.fn(),
        canvas: jest.fn(),
        getInnerText: jest.fn(),
        getValue: jest.fn(() => '1')
            .mockImplementationOnce(() => ''),
        getPromise: jest.fn(),
        disabledButtonTrue: jest.fn()
    }
});

describe('get promise', () => {
    test('test', () => {
        expect(true).toBeTruthy();
    })
    test('startRace', () => {
        expect(startRace([],  1,1)).toBeUndefined();
    })
    test('promiseRace', ()=> {
        expect(promiseRace([],[])).toBeUndefined();
    })
})