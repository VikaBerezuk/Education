const { getNextPalindrome } = require('../getNextPalindrome');

describe('get next palindrome', () => {

   test('test', () => {
       expect(true).toEqual(true);
   });

    test('waiting for data', () => {
        expect(getNextPalindrome()).toBeDefined();
    });

   afterEach(() => {
       jest.clearAllMocks();
   })
});

describe('not number',  () => {
   test.each([['string', false],
       [null, false],
   [[11], false]])('test NaN', (arg, result) => {
       expect(getNextPalindrome(arg)).toBe(result);
   });
});

describe('get next number',  () => {
    test.each([[7, 11],
        [99, 101],
        [132, 141],
        [888, 898],
        [999, 1001]])('test next number', (arg, result) => {
        expect(getNextPalindrome(arg)).toBe(result);
    });
});
