const { Number } = require("../number");


describe('number', () => {
    const x = 55;
    const y = 2;

    test('test', () => {
        expect(true).toBe(true);
    })

    test('Number is odd', ()  => {
        expect(y.isOdd()).toBe(false);
    });

    test('Number is odd', ()  => {
        expect(x.isOdd()).toBe(true);
    });
})