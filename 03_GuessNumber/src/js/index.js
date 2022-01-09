const {
    addListener,
    getInputId,
    getStyleColor,
    getAddClass,
    resetButton,
    deleteClass,
    getInnerHtml
} = require('./utils');

function init() {
    const state = {
        minNumber: 1,
        maxNumber: 200,
        counterNumber: 15,
        guessCount: 1,
        randomNumber: 56,
    };

    addListener('checkRangeNumber', 'click', checkRangeNumber.bind(null, state));
    addListener('guessSubmitExit', 'click', setGameOver);
    addListener('guessSubmit', 'click', checkGuess.bind(null, state));
}

document.addEventListener('DOMContentLoaded', function () {
    init();
})

function checkRangeNumber(state) {
    const guessMinNumber = getInputId('guessMinNumber');
    const guessMaxNumber = getInputId('guessMaxNumber');
    const guessMaxCount = getInputId('guessMaxCount');

    resetGame.bind(null, state);
    state.randomNumber = Math.floor(Math.random() * (guessMaxNumber - guessMinNumber)) + Number(guessMinNumber);

    if (guessMinNumber >= 1 && guessMinNumber <= 200 && guessMaxNumber >= 1 && guessMaxNumber <= 200 && guessMaxCount >= 1 && guessMaxCount <= 15) {
        state.minNumber = document.getElementById('minNumber').innerText = String(guessMinNumber);
        state.maxNumber = document.getElementById('maxNumber').innerText = String(guessMaxNumber);
        state.counterNumber = document.getElementById('counterNumber').innerText = String(guessMaxCount);
        state.guessCount = 1;
    } else {
        guessMinNumber.value = 1;
        guessMaxNumber.value = 200;
        guessMaxCount.value = 15;
        getStyleColor('lastResult', 'red', 'Введите числа в диапазоне от 1 до 200 и количество попыток от 1 до  15');
    }
  //  console.log(guessMaxNumber.value, guessMinNumber.value, guessMaxCount.value, state.minNumber);
}

function checkGuess(state) {
    state.userGuess = getInputId('guessField');
    state.guessMaxCount = getInputId('guessMaxCount');

    if (isNaN(state.userGuess)) {
        getStyleColor('lastResult', 'red', `Вы указали букву, укажите число в диапазоне ${state.minNumber} до ${state.maxNumber}`);
        console.log(state)
        return false;
    }
    if (state.userGuess < state.minNumber || state.userGuess > state.maxNumber) {
        getStyleColor('lastResult', 'red', `Вы не верно указали число, укажите число в диапазоне ${state.minNumber} до ${state.maxNumber}`)
        console.log(state)
        return false;
    }
    if (state.userGuess === state.randomNumber) {
        getStyleColor('lastResult', 'green', `Поздравляю! Вы угадали! За ${state.guessCount} попыток`)
        getStyleColor('guessErrorResult', '', '');
        setGameOver(state);
        return true;
    }
    if (state.guessCount === state.guessMaxCount) {
        console.log(state)
        getStyleColor('lastResult', 'red', `!!!К сожалению, Вы не угадали. Игра завершина за ${state.guessCount} попыток!!!`);
        getStyleColor('guessErrorResult', '', '');
        setGameOver();
        return false;
    }

    if (state.guessCount <= state.guessMaxCount) {
        getStyleColor('lastResult', 'blue', 'Вы Не угадали!')

        if (state.userGuess < state.randomNumber) {
            getStyleColor('guessErrorResult', 'blue', `Предыдущее число было больше! Попытка ${state.guessCount}`);
            state.guessCount++;
            return true;
        } else if (state.userGuess > state.randomNumber) {
            getStyleColor('guessErrorResult', 'blue', `Предыдущее число было меньше! Попытка ${state.guessCount}`);
            state.guessCount++;
            return true;
        }
    }

    state.guessCount++;
}

function setGameOver(state) {
    getAddClass('guessField', 'disabled');
    getAddClass('guessSubmit', 'disabled');
    getAddClass('guessSubmitExit', 'disabled');
    getAddClass('checkRangeNumber', 'disabled');

    resetButton('resetGames');

    addListener('resetGameButton', 'click', resetGame.bind(null, state));
}

function resetGame(state) {
    getInnerHtml('guessErrorResult', '');
    getInnerHtml('lastResult', '');
    getInnerHtml('resetGames', '');
    getInnerHtml('guessField', '');
    getInnerHtml('guess', '');

    deleteClass('checkRangeNumber', 'disabled');
    deleteClass('guessField', 'disabled');
    deleteClass('guessSubmit', 'disabled');
    deleteClass('guessSubmitExit', 'disabled');

    state.guessCount = 1;
    state.randomNumber = Math.floor(Math.random() * 200) + 1;
}

module.exports = { checkGuess }