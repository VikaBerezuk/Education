const {getElementId, addLength, getReplace, getIncludes, deleteLastElements, factorial, addListener} = require("./utils");
const {equality} = require("./utils");

function addValue(id, input) {
    const button = getElementId(id);
    const calculator = getElementId(input);

    if (calculator.textContent === '0' || calculator.textContent === null || calculator === '0'
        || calculator.textContent === '+0' || calculator.textContent === '-0'
    ) {
        calculator.textContent = button.innerText;
    } else {
        calculator.textContent = calculator.textContent + button.innerText;
    }
}

function addValueBracket(id, input) {
    const button = getElementId(id);
    let calculator = getElementId(input);

    const x = addLength(calculator, 1);
    if (x === '('  || x === ')') {
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

function pointValue() {
    const calculator = getElementId('calculatorValue');
    if (getIncludes(calculator, '.') !== '.') {
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
    if (!calculator.textContent) {
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

function percent() {
    const value = getElementId("calculatorValue");
    if(value.textContent !== '0') {
        value.textContent = parseFloat(value.textContent)/100;
    }
}

function sqrt(context) {
    const value = getElementId("calculatorValue");
    if(value.textContent === '0' || value === '0') {
        value.textContent = context;
    } else {
        value.textContent += context;
    }
}

//sqrt(-
addListener('fractional', 'click', sqrt.bind(null, '/'));
addListener('i', 'click', sqrt.bind(null, 'i'));
addListener('sqrt-', 'click', sqrt.bind(null, 'sqrt(-'));
addListener('sqrt', 'click', sqrt.bind(null, 'sqrt('));
//percent
addListener('percent', 'click', percent);
//changeButton
addListener('changeButton', 'click', changeButton);
//mod
addListener('mod', 'click', mod.bind(null,'calculatorValue'));
//getExp exp
addListener('getExp', 'click', getExp.bind(null,  'calculatorValue'));

//степень ^; 1/x; x2; x3; 10x
addListener('degree', 'click', degree.bind(null, 'degree', 'calculatorValue'));
addListener('degree1', 'click', degree.bind(null, 'degree1', 'calculatorValue'));
addListener('degree2', 'click',  degree.bind(null, 'degree2', 'calculatorValue'));
addListener('degree3', 'click', degree.bind(null, 'degree3', 'calculatorValue'));
addListener('degree10', 'click', degree.bind(null, 'degree10', 'calculatorValue'));
//module||
addListener('module', 'click', getModule.bind(null,'calculatorValue'));

addListener('factorial', 'click', fact.bind(null, 'calculatorValue'));
addListener('getE', 'click',  getE.bind(null, 'calculatorValue'));//e
addListener('pi', 'click',  pi.bind(null, 'calculatorValue'));//pi

addListener('back', 'click', back.bind(null,'calculatorValue'))//back
addListener('cleaning', 'click', cleaning); // AC

addListener('bracket-left', 'click', addValueBracket.bind(null, 'bracket-left', 'calculatorValue'));//(
addListener('bracket-right', 'click', addValueBracket.bind(null, 'bracket-right', 'calculatorValue'));//)
addListener('number0', 'click', addValue.bind(null, 'number0', 'calculatorValue'));
addListener('number1', 'click', addValue.bind(null, 'number1', 'calculatorValue'));
addListener('number2', 'click', addValue.bind(null, 'number2', 'calculatorValue'));
addListener('number3', 'click', addValue.bind(null, 'number3', 'calculatorValue'));
addListener('number4', 'click', addValue.bind(null, 'number4', 'calculatorValue'));
addListener('number5', 'click', addValue.bind(null, 'number5', 'calculatorValue'));
addListener('number6', 'click',  addValue.bind(null, 'number6', 'calculatorValue'));
addListener('number7', 'click', addValue.bind(null, 'number7', 'calculatorValue'));
addListener('number8', 'click', addValue.bind(null, 'number8', 'calculatorValue'));
addListener('number9', 'click', addValue.bind(null, 'number9', 'calculatorValue'));

addListener('point', 'click', pointValue.bind(null,'point'));// ,

addListener('change', 'click', changePositiveToNegative.bind(null, 'change'));// +/-

addListener('plus', 'click',  changeValue.bind(null, 'plus'));//+
addListener('minus', 'click', changeValue.bind(null,'minus'));//-
addListener('multiply', 'click', changeValue.bind(null, 'multiply'));//*
addListener('division', 'click', changeValue.bind(null,'division'));// /
//=
addListener('equality', 'click', equality.bind(null, 'equality'));
addListener('lg', 'click', log.bind(null, 'lg','calculatorValue'));
addListener('ln', 'click', log.bind(null, 'ln','calculatorValue'));

module.exports = { addValueBracket, addValue, changeValue, changePositiveToNegative,
    pointValue, cleaning, back, pi, getE, getExp, mod, fact, log, degree, getModule, changeButton,
    percent, sqrt}