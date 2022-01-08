const { tickets } = require('../tickets');

describe('tickets', () => {
   test('test', () => {
       expect(true).toBe(true);
   });

   test('no undefined, null, false, 0', () => {
       expect(tickets()).toBeDefined();
   });

   test('no arr', () => {
       expect(tickets('str')).toBe(false)
   })
});

describe('give change from a ticket', () => {
    test.each([[[25, 25, 50], 'YES'],
        [[25, 100], 'NO'],
        [[25, 25, 50, 100], 'YES'],
        [[25, 50, 100], 'NO'],
        [['25', '25', '50', '100'], 'YES']
        ])('arg === arr money, result ', (arg, result) => {
        expect(tickets(arg)).toBe(result);
    })
})