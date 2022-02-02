import {paint, showAllImg, closed} from '../app/index';

jest.mock('../app/utils', () => {
    return {
        __esModule: true,
        addListener: jest.fn(),
        api: jest.fn(),
        getElementAppendChild: jest.fn(() => '12'),
        createElement: jest.fn(),
        showDisplay: jest.fn(),
        querySelectorAll: jest.fn(() => [])
    }
});

describe('test all', () => {
    const data = [{url: 'tets'}]

    test('test', () => {
        expect(true).toBe(true);
    })

   describe('paint', () => {
       test('to de defined', () => {
           expect(paint).toBeDefined();
       })
       test('paint', () => {
           expect(paint(data)).toBeUndefined();
       })
   })

   describe('show All Img', () => {
       test('to de defined', () => {
           expect(showAllImg).toBeDefined();
       })
       test('showAllImg', () => {
           expect(showAllImg(data)).toBeUndefined();
       })
   })

   describe('closed', () => {
       test('to de defined', () => {
           expect(closed).toBeDefined();
       })
       test('closed', () => {
           expect(closed()).toBeUndefined();
       })
   })
})
