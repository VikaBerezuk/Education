import {ageCheck, balanceCheck, clear, documentCheck, langCheck, showCandidate, start} from "../ts";

jest.mock('../ts/utils', () => {
    return {
        __esModule: true,
        addListener: jest.fn(),
        getElementById: jest.fn(() => 1),
        getValueContext: jest.fn(),
        canvas: jest.fn(),
        getInnerText: jest.fn(),
        getValue: jest.fn(() => '1')
            .mockImplementationOnce(() => ''),
        getPromise: jest.fn(() => new Promise<void>(res => res())),
        disabledButton: jest.fn(),
        getCreateElTextAppendChild: jest.fn(),
        getContextCanvas:jest.fn(() => 1),
        getNameCanvas: jest.fn(),
    }
});

describe('show candidate', () => {
    test('show candidate', () => {
        expect(showCandidate([])).toBeUndefined();
    })
    test('show candidate', () => {
        const test = {name: 'Anna', balance: '2200', age: '22', document: 'passport', english: 'A2'}
        expect(showCandidate([test,test,test,test])).toBeUndefined();
    })
})

describe('start game', () => {
    test('start game', () => {
        const test = {name: 'Anna', balance: '2200', age: '22', document: '', english: 'A2'}
        expect(start([test])).toBeUndefined();
    })
})

describe('balance check', () => {
    test('balance check < 2000', () => {
        expect(balanceCheck(1880)).toBeFalsy();
    })
    test('balance check > 2000', () => {
        expect(balanceCheck(2880)).toBeTruthy();
    })
})

describe('age check', () => {
    test('age check < 18', () => {
        expect(ageCheck(15)).toBeFalsy();
    })
    test('balance check > 18 && < 60', () => {
        expect(ageCheck(25)).toBeTruthy();
    })
})

describe('document check', () => {
    test('document check !== \'password, insurance, photo\'', () => {
        expect(documentCheck('password, insurance')).toBeFalsy();
    })
    test('document check === \'password, insurance, photo\'', () => {
        expect(documentCheck('password, insurance, photo')).toBeTruthy();
    })
})

describe('lang check', () => {
    test('lang check', () => {
        expect(langCheck('A1')).toBeFalsy();
    })
    test('document check', () => {
        expect(langCheck('B2')).toBeTruthy();
    })
})
//clear
describe('clear', () => {
    test('clear', () => {
        expect(clear()).toBeUndefined();
    })
})