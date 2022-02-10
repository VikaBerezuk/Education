import {generated, generatedAll, clearCanvas, addCandidate} from "../ts/generated";

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
    }
});

describe('generated', () => {
    test('', () => {
        expect(true).toBeTruthy();
    })
    test('generated', () => {
        expect(generated('id', [])).toBeUndefined();
    })
    test('generated All', () => {
        expect(generatedAll([])).toBeUndefined();
    })
    test('generated All', () => {
        const test = {name: 'Anna', balance: '2200', age: '22', document: 'passport', english: 'A2'}
        expect(generatedAll([test, test, test, test, test, test])).toBeUndefined();
    })
})

describe('canvas', () => {
    test('', () => {
        expect(true).toBeTruthy();
    })
    test('Canvas', () => {
        expect(clearCanvas()).toBeUndefined();
    })
})
//addCandidate
describe('add Candidate', () => {
    test('', () => {
        expect(true).toBeTruthy();
    })
    test('add Candidate not information', () => {
        expect(addCandidate([], '', '', '', '', '')).toBeUndefined();
    })
    test('1 add Candidate', () => {
        expect(addCandidate([], 'Anna', '2200', '22', 'passport', 'A2')).toBeUndefined();
    })
    test('6 add Candidate', () => {
        const test = {name: 'Anna', balance: '2200', age: '22', document: 'passport', english: 'A2'}
        expect(addCandidate([test, test, test, test, test], 'Anna', '2200', '22', 'passport', 'A2')).toBeUndefined();
    })
})