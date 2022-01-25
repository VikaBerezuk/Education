const {getElementId, addLength, getReplace, getIncludes, deleteLastElements, factorial, addListener} = require("./utils");

function addValue(id, input) {
    const button = getElementId(id);
    const calculator = getElementId(input);

    const x = addLength(calculator, 1);
    const y = addLength(calculator, 2);
    if (x === '(' || x === ')') {
        if (y === '+' || y === '-' || y === '/' || y === '*') {
                calculator.textContent = calculator.textContent + button.innerText;
        } else {
            let result = getReplace(calculator, /[\(\)\s]/g)
            calculator.textContent = result + button.innerText;
        }
    } else {
        if (calculator.textContent === '0' || calculator.textContent === null || x === '0'
            || calculator.textContent === '+0' || calculator.textContent === '-0'
        ) {
            calculator.textContent = button.innerText;
        } else {
            calculator.textContent = calculator.textContent + button.innerText;
        }
    }
}

function addValueBracket(id, input) {
    const button = getElementId(id);
    let calculator = getElementId(input);

    const x = addLength(calculator, 1);
    if (x === '(' || x === ')') {
        const result = getReplace(calculator, `${x}`);
        calculator.textContent = result + button.innerText;
    } else {
        calculator.textContent += button.innerText;
    }
}

function changeValue(id) {
    const button = getElementId(id);
    const calculator = getElementId('calculatorValue');

    const x = addLength(calculator, 1);

    if (x === '-' || x === '+' || x === '*' || x === '/') {
        const result = getReplace(calculator, `${x}`);
        calculator.textContent = result + button.value;
    } else {
        calculator.textContent += button.value;
    }
}

function changePositiveToNegative(id) {
    const button = getElementId(id);
    const calculator = getElementId('calculatorValue');

    const x = addLength(calculator, 1);
    if (x === '-' || x === '+' || x === '*' || x === '/') {
        const result = getReplace(calculator, `${x}`);
        if ('+/-' === button.innerText && calculator.textContent >= '0' || '+/-' === button) {
            calculator.textContent = '-' + result;
        } else {
            calculator.textContent = getReplace(calculator, '-');
        }
    }

    if ('+/-' === button.innerText && calculator.textContent >= '0' || '+/-' === button) {
        calculator.textContent = '-' + calculator.textContent;
    } else {
        calculator.textContent = getReplace(calculator, '-');
    }
}

function equality() {
    const calculator = getElementId('calculatorValue');
    calculator.textContent = eval(calculator.textContent);
}

function pointValue() {
    const calculator = getElementId('calculatorValue');
    if (!getIncludes(calculator, '.')) {
        calculator.textContent = calculator.textContent + '.';
    }
}

function cleaning() {
    const calculator = getElementId('calculatorValue');
    calculator.textContent = '0';
}

function back(input) {
    let calculator = getElementId(input);

    calculator.textContent =  deleteLastElements(calculator);
    if (calculator.textContent === 0 || deleteLastElements(calculator)) {
        calculator.textContent = "0";
    }
}

function pi(id) {
    const calculator = getElementId(id);
    calculator.textContent = Math.PI;
}

function getE(id) {
    const calculator = getElementId(id);
    calculator.textContent = Math.E;
}

function getExp(id) {
    const calculator = getElementId(id);
    calculator.textContent = Math.exp(calculator.textContent);
}

function mod(id) {
    const calculator = getElementId(id);
    calculator.textContent = calculator.textContent + "%";
}

//Факториал числа
function fact(input) {
    const calculator = getElementId(input);
    calculator.textContent = factorial(+eval(calculator.textContent));
}
//Логарифмы
function log(name, input) {
    const button = getElementId(name);
    const calculator = getElementId(input);

    if (button.textContent === 'log2' || button === 'log2') {
        calculator.textContent = Math.log2(eval(calculator.textContent)).toFixed(5); //log2
    } else if(button.textContent == 'log10' || button === 'log10') {
        calculator.textContent = Math.log10(eval(calculator.textContent)).toFixed(5); //log10
    } else if (button.textContent == 'ln' || button === 'ln') {
        calculator.textContent = Math.log(eval(calculator.textContent)).toFixed(5);//ln
    } else if(button.textContent = 'log1p' || button === 'log1p') {
        calculator.textContent = Math.log1p(eval(calculator.textContent)).toFixed(5);//log1p
    }
}

//степень
function degree(name, input) {
    const button = getElementId(name);
    const calculator = getElementId(input);

    if(button.textContent === 'xy' && name === 'degree' ||
        button === 'xy' && name === 'degree') {
        calculator.textContent = calculator.textContent + '**';
    } else if(button.textContent === 'ex' && name === 'degree' ||
        button === 'ex' && name === 'degree'){
        calculator.textContent = Math.exp(calculator.textContent);
    }

    if(name === 'degree1') {
        calculator.textContent =  1 / calculator.textContent;
    }

    if(name === 'degree2') {
        calculator.textContent = Math.pow(calculator.textContent, 2);
    }

    if(name === 'degree3') {
        calculator.textContent = Math.pow(calculator.textContent, 3);
    }

    if(button.textContent === '10x' || button === '10x') {
        calculator.textContent =  Math.pow(10, calculator.textContent);
    } else if(button.textContent === '2x' || button === '2x') {
        calculator.textContent =  Math.pow(2, calculator.textContent);
    }
}

function getModule(input) {
    const calculator = getElementId(input);
    calculator.textContent = Math.abs(calculator.textContent);
}

function changeButton() {
    const degree = getElementId('degree');//y/x  === ex
    const degree10 = getElementId('degree10');//10x === 2x
    const lg = getElementId('lg');//log === log2 10
    const ln = getElementId('ln');//ln === log1p

    if( ln.textContent === 'ln') {
        degree.innerHTML = 'e<sup>x</sup>';
        degree10.innerHTML = '2<sup>x</sup>';
        lg.innerHTML = 'log<sup>2</sup>';
        ln.innerHTML = 'log<sup>1p</sup>';
    } else {
        degree.innerHTML = 'x<sup>y</sup>';
        degree10.innerHTML = `10<sup>x</sup>`;
        lg.innerHTML = 'log<sup>10</sup>';
        ln.innerHTML = 'ln';
    }
}

//changeButton
addListener('changeButton', 'click', changeButton);
//mod
addListener('mod', 'click', () => mod('calculatorValue'));
//getExp exp
addListener('getExp', 'click', () => getExp( 'calculatorValue'));

//степень ^; 1/x; x2; x3; 10x
addListener('degree', 'click', () => degree('degree', 'calculatorValue'));
addListener('degree1', 'click', () => degree('degree1', 'calculatorValue'));
addListener('degree2', 'click', () => degree('degree2', 'calculatorValue'));
addListener('degree3', 'click', () => degree('degree3', 'calculatorValue'));
addListener('degree10', 'click', () => degree('degree10', 'calculatorValue'));
//module||
addListener('module', 'click', () => getModule('calculatorValue'));

addListener('factorial', 'click', () => fact('calculatorValue'));
addListener('getE', 'click', () => getE('calculatorValue'));//e
addListener('pi', 'click', () => pi('calculatorValue'));//pi

addListener('back', 'click', () => back('calculatorValue'))//back
addListener('cleaning', 'click', cleaning); // AC

addListener('bracket-left', 'click', () => addValueBracket('bracket-left', 'calculatorValue'));//(
addListener('bracket-right', 'click', () => addValueBracket('bracket-right', 'calculatorValue'));//)
addListener('number0', 'click', () => addValue('number0', 'calculatorValue'));
addListener('number1', 'click', () => addValue('number1', 'calculatorValue'));
addListener('number2', 'click', () => addValue('number2', 'calculatorValue'));
addListener('number3', 'click', () => addValue('number3', 'calculatorValue'));
addListener('number4', 'click', () => addValue('number4', 'calculatorValue'));
addListener('number5', 'click', () => addValue('number5', 'calculatorValue'));
addListener('number6', 'click', () => addValue('number6', 'calculatorValue'));
addListener('number7', 'click', () => addValue('number7', 'calculatorValue'));
addListener('number8', 'click', () => addValue('number8', 'calculatorValue'));
addListener('number9', 'click', () => addValue('number9', 'calculatorValue'));

addListener('point', 'click', () => pointValue('point'));// ,

addListener('change', 'click', () => changePositiveToNegative('change'));// +/-

addListener('plus', 'click', () => changeValue('plus'));//+
addListener('minus', 'click', () => changeValue('minus'));//-
addListener('multiply', 'click', () => changeValue('multiply'));//*
addListener('division', 'click', () => changeValue('division'));// /
//=
addListener('equality', 'click', () => equality('equality'));
addListener('lg', 'click', () => log('lg','calculatorValue'));
addListener('ln', 'click', () => log('ln','calculatorValue'));

module.exports = { addValueBracket, addValue, changeValue, changePositiveToNegative, equality,
    pointValue, cleaning, back, pi, getE, getExp, mod, fact, log, degree, getModule, changeButton }