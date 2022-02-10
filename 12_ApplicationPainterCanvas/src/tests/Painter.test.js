const {Painter} = require('./../Painter');

describe('Painter', () => {
    const painter = new Painter({strokeStyle:'#000000', beginPath(){}, moveTo(){}, lineTo(){}, stroke(){}});
    test('Painter start', () => {
        expect(painter.start()).toBeUndefined();
    })
    test('Painter start', () => {
        expect(painter.stop()).toBeUndefined();
    })
    test('Painter line', () => {
        expect(painter.line()).toBeUndefined();
    })
})