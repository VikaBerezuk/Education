const {getValue, addListener, callAlert, reStartGame} = require('./utils');

function init() {
    const state = {
        minNumber: 1,
        maxNumber: 5,
        arr: []
    };
    addListener('generated', 'click', generated.bind(null, state));
    addListener('reset', 'click', resetGame.bind(null, state));
}

document.addEventListener('DOMContentLoaded', function(){
    init();
})

function getRandomNumber(state) {
    const minValue = getValue('min');
    const maxValue = getValue('max');
    state.minNumber = +minValue.value;
    state.maxNumber = +maxValue.value;
    if(state.maxNumber <  state.minNumber) {
        getValue.value = 1;
        callAlert("you entered min number greater than max number");
    }
   while ( state.arr.length <= ( state.maxNumber + 1 -  state.minNumber)) {
        do {
            state.randomNumber = Math.round( Math.random() * (state.maxNumber -  state.minNumber) +  state.minNumber);
        } while ( state.arr.includes( state.randomNumber))

       state.arr.push( state.randomNumber);
       state.valueGenerate = getValue('randomizerText').innerHTML = `Generated number: ${ state.randomNumber}`;
       getValue('reset').style.display = 'block';
       return state.arr;
    }
    return true;
}
function generated(state) {
    //console.log(state.arr, state.randomNumber)
    if (state.arr.length === (state.maxNumber - state.minNumber + 1)) {
        const generate = getValue('generated');
        const randomizerText =  getValue('randomizerText')
        state.valueGenerate = randomizerText.textContent = `Generated number: Elements are over`;
        generate.className += ' disabled';
        generate.disabled = true;
        return false;
    }
    getRandomNumber(state);
    state.arr.sort();
    return true;
}
function resetGame(state) {
   // console.log(state)
    reStartGame();
    state.arr = [];
    return true;
}

module.exports = { generated , resetGame, getRandomNumber, init };