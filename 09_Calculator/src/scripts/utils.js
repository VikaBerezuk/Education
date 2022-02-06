const math = require("mathjs");

function addListener(id, eventType, callback) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, callback);
    }
}

function getElementId(id) {
    const node = document.getElementById(id);
    if(node) {
        return node;
    }
    return false;
}

function addLength(id, number) {
    const node = id.textContent[id.textContent.length - number];
    return node;
}

function getReplace(id, getSumbol) {
    const node = id.textContent.toString().replace(getSumbol, '');
    return node;
}

function getIncludes(id, arg) {
    const node = id.textContent.includes(arg)
    return node;
}

function deleteLastElements(id) {
    const node = id.textContent.substring(0, id.textContent.length - 1);
    return node;
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function equality() {
    const calculator = getElementId('calculatorValue');
    calculator.textContent =  math.evaluate(calculator.textContent);
}


module.exports = {addListener, getElementId, addLength, getReplace, getIncludes, deleteLastElements, factorial, equality};
