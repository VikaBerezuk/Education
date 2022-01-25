const { addValueBracket, addValue, changeValue, changePositiveToNegative, equality,
    pointValue, cleaning, back, pi, getE, getExp, mod, fact, log, degree, getModule, changeButton
} = require('../index');

jest.mock('../utils', () => {
    return {
        __esModule: true,
        addListener: jest.fn(),
        getElementId: jest.fn(() => '12'),
        addLength: jest.fn( () => '2'),
        getReplace: jest.fn(() => '2'),
        getIncludes: jest.fn(() => '.'),
        deleteLastElements: jest.fn(() => '0'),
        factorial: jest.fn(() => '2')
    };
});

const {getElementId, addLength, getIncludes, deleteLastElements} = require("../utils");

describe('add value', () => {
    test('test', () => {
        expect(true).toBe(true)
    })
    test('should be function', () => {
        expect(addValue).toBeDefined();
    })
    test('should be function, with parameters === 0', () => {
        addLength
            .mockImplementationOnce(() => '0');
        expect(addValue('0', '0')).toBeUndefined();
    })
    test('should be function, with parameters === "(" and "+"' , () => {
        addLength
            .mockImplementationOnce(() => '(')
            .mockImplementationOnce(() => '+');

        expect(addValue('123(', '(')).toBeUndefined();
    })
    test('should be function, with parameters === "("', () => {
        addLength
            .mockImplementationOnce(() => '(');
        expect(addValue('(', '0')).toBeUndefined();
    })
    test('should be function, with parameters === numbers', () => {
        expect(addValue('2', '0')).toBeUndefined();
    })
})

describe('add Value Bracket', () => {
    test('should be function', () => {
        expect(addValueBracket).toBeDefined()
    })
    test('should be function,  with parameters === (', () => {
        addLength
            .mockImplementationOnce(() => '(');
        expect(addValueBracket('bracket-left', 'calculatorValue')).toBeUndefined();
    })
    test('should be function', () => {
        expect(addValueBracket('bracket-left', 'calculatorValue')).toBeUndefined();
    })
})

describe('change Value', () => {
    test('should be function', () => {
        expect(changeValue).toBeDefined()
    })
    test('should be function,  with parameters === +', () => {
        addLength
            .mockImplementationOnce(() => '+');
        expect(changeValue('bracket-left', 'calculatorValue')).toBeUndefined();
    })
    test('should be function, not parameters signs', () => {
        expect(changeValue('plus')).toBeUndefined();
    })
})

describe('change Positive To Negative', () => {
    test('should be function', () => {
        expect(changePositiveToNegative).toBeDefined()
    })
    test('should be function,  with parameters === +/-', () => {
        getElementId
            .mockImplementationOnce(() => '+/-');
        expect(changePositiveToNegative('change')).toBeUndefined();
    })
    test('should be function,  with parameters === +/-', () => {
        getElementId
            .mockImplementationOnce(() => '+/-');
        addLength
            .mockImplementationOnce(() => '-');
        expect(changePositiveToNegative('change')).toBeUndefined();
    })
    test('should be function,  with parameters === +', () => {
        addLength
            .mockImplementationOnce(() => '-');
        expect(changePositiveToNegative('change')).toBeUndefined();
    })
    test('should be function, change signs', () => {
        expect(changePositiveToNegative('change')).toBeUndefined();
    })
})

describe('equality', () => {
    test('should be function', () => {
        expect(equality).toBeDefined()
    })
    test('should be function, equality', () => {
        expect(equality()).toBeUndefined();
    })
})

describe('point Value', () => {
    test('should be function ', () => {
        expect(pointValue).toBeDefined();
    })
    test('should be function,  with parameters === "12.1"', () => {
        getElementId.mockImplementationOnce(() => '12.1');
        getIncludes.mockImplementationOnce(() => true);
        expect(pointValue()).toBeUndefined();
    })
    test('should be function, point Value', () => {
        expect(pointValue()).toBeUndefined();
    })
})

describe('cleaning', () => {
    test('should be function', () => {
        expect(cleaning).toBeDefined()
    })
    test('should be function, cleaning', () => {
        expect(cleaning()).toBeUndefined();
    })
})

describe('back', () => {
    test('should be function', () => {
        expect(back).toBeDefined()
    })
    test('should be function, back', () => {
        deleteLastElements.mockImplementationOnce(() => '0');
        expect(back('1')).toBeUndefined();
    })
})

describe('pi', () => {
    test('should be function', () => {
        expect(pi).toBeDefined()
    })
    test('should be function, pi', () => {
        expect(pi('1')).toBeUndefined();
    })
})

describe('get E', () => {
    test('should be function', () => {
        expect(getE).toBeDefined()
    })
    test('should be function, get E', () => {
        expect(getE('1')).toBeUndefined();
    })
})

describe('get Exp', () => {
    test('should be function', () => {
        expect(getExp).toBeDefined()
    })
    test('should be function, get Exp', () => {
        expect(getExp('1')).toBeUndefined();
    })
})

describe('module', () => {
    test('should be function', () => {
        expect(mod).toBeDefined()
    })
    test('should be function, get module', () => {
        expect(mod('-1')).toBeUndefined();
    })
})

describe('factorial', () => {
    test('should be function', () => {
        expect(fact).toBeDefined()
    })
    test('should be function, get factorial', () => {
        expect(fact('1')).toBeUndefined();
    })
})

describe('log', () => {
    test('should be function', () => {
        expect(log).toBeDefined()
    })
    test('should be function, log2', () => {
        getElementId.mockImplementationOnce(() => 'log2');
        expect(log('log2', '1')).toBeUndefined();
    })
    test('should be function, log10', () => {
        getElementId.mockImplementationOnce(() => 'log10');
        expect(log('log10', '1')).toBeUndefined();
    })
    test('should be function, ln', () => {
        getElementId.mockImplementationOnce(() => 'ln');
        expect(log('ln', '1')).toBeUndefined();
    })
    test('should be function, log1p', () => {
        getElementId.mockImplementationOnce(() => 'log1p');
        expect(log('log1p', '1')).toBeUndefined();
    })
})
//degree
describe('degree', () => {
    test('should be function, ', () => {
        expect(degree).toBeDefined()
    })
    test('should be function, 10x', () => {
        getElementId.mockImplementationOnce(() => '10x');
        expect(degree('10x', '1')).toBeUndefined();
    })
    test('should be function, 2x', () => {
        getElementId.mockImplementationOnce(() => '2x');
        expect(degree('2x', '1')).toBeUndefined();
    })
    test('should be function, xy', () => {
        getElementId.mockImplementationOnce(() => 'xy');
        expect(degree('degree', '1')).toBeUndefined();
    })
    test('should be function, ex', () => {
        getElementId.mockImplementationOnce(() => 'ex');
        expect(degree('degree', '1')).toBeUndefined();
    })
    test('should be function, degree', () => {
        expect(degree('degree', '1')).toBeUndefined();
    })
    test('should be function, degree 1', () => {
        expect(degree('degree1', '1')).toBeUndefined();
    })
    test('should be function, degree 2', () => {
        expect(degree('degree2', '1')).toBeUndefined();
    })
    test('should be function, degree 3', () => {
        expect(degree('degree3', '1')).toBeUndefined();
    })
})

describe('module', () => {
    test('add', () => {
        expect(getModule).toBeDefined()
    })
    test('module', () => {
        expect(getModule('-1')).toBeUndefined();
    })
})

describe('change Button', () => {
    test('add', () => {
        expect(changeButton).toBeDefined()
    })
    test('change Button', () => {
        expect(changeButton('-1')).toBeUndefined();
    })
})