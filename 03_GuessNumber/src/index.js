const lastResult = document.querySelector('.lastResult');
const guessErrorResult = document.querySelector('.guessErrorResult');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const guessMaxCount = document.getElementById('guessMaxCount');
const guessMinNumber = document.getElementById('guessMinNumber');
const guessMaxNumber = document.getElementById('guessMaxNumber');
const guessSubmitExit = document.querySelector('.guessSubmitExit');
let minNumber = 1;
let maxNumber = 200;
let counterNumber = 15;
let guessCount = 1;
let resetButton;
let randomNumber;

function checkRangeNumber() {
    randomNumber = Math.floor(Math.random() * (guessMaxNumber.value - guessMinNumber.value)) + Number(guessMinNumber.value);
    if (guessMinNumber.value >= 1 && guessMinNumber.value <= 200 &&
        guessMaxNumber.value >= 1 && guessMaxNumber.value <= 200 &&
        guessMaxCount.value >= 1 && guessMaxCount.value <= 15 ) {
        minNumber = document.getElementById('minNumber').innerText = String(guessMinNumber.value);
        maxNumber = document.getElementById('maxNumber').innerText = String(guessMaxNumber.value);
        counterNumber = document.getElementById('counterNumber').innerText = String(guessMaxCount.value);
        console.log(randomNumber);
        guessCount = 1;
        guessSubmit.addEventListener('click', checkGuess);
    } else {
        guessMinNumber.value = 1;
        guessMaxNumber.value = 200;
        guessMaxCount.value = 15;
        lastResult.style.color = 'red';
        lastResult.textContent ='Введите числа в диапазоне от 1 до 200 и количество попыток от 1 до  15';
    }
    console.log(guessMaxNumber.value, guessMinNumber.value, guessMaxCount.value, minNumber);
}
checkRangeNumber();
guessSubmitExit.addEventListener('click', setGameOver);

function checkGuess() {
    const userGuess = Number(guessField.value);
    //guesses.textContent += userGuess + ' ';
    if(isNaN(userGuess)) {
        lastResult.style.color = 'red';
        lastResult.textContent = `Вы указали букву, укажите число в диапазоне ${minNumber} до ${maxNumber}`;
        return userGuess;
    }
    if( userGuess < +minNumber ||  userGuess > +maxNumber) {
        lastResult.style.color = 'red';
        lastResult.textContent = `Вы не верно указали число, укажите число в диапазоне ${minNumber} до ${maxNumber}`;
        console.log(userGuess, +minNumber);
        return userGuess;
    }
    if (userGuess === randomNumber) {
        lastResult.style.color = 'green';
        lastResult.textContent = `Поздравляю! Вы угадали! За ${guessCount} попыток`;
        lastResult.style.fontWeight = '900';
        guessErrorResult.textContent = '';
        setGameOver();
    } else if (guessCount === guessMaxCount) {
        lastResult.style.color = 'red';
        lastResult.textContent = `!!!К сожалению, Вы не угадали. Игра завершина за ${guessCount} попыток!!!`;
        guessErrorResult.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Вы Не угадали!';
        lastResult.style.color = 'blue';
        if(userGuess < randomNumber) {
            guessErrorResult.textContent = `Предыдущее число было больше! Попытка ${guessCount}` ;
        } else if(userGuess > randomNumber) {
            guessErrorResult.textContent = `Предыдущее число было меньше! Попытка ${guessCount}`;
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

//guessSubmit.addEventListener('click', checkGuess);
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    guessSubmitExit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.className += 'guess-number__button'
    resetButton.textContent = 'Начать новую игру';
    document.querySelector('.resetGame').appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    // const result = document.querySelectorAll('.result p');
    // for (const resetPara of result) {
    //     resetPara.textContent = '';
    // }

    lastResult.textContent = '';
    document.querySelector('.resetGame').textContent = '';
    //resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessSubmitExit.disabled = false;
    guessField.value = '';
    guessField.focus();
    randomNumber = Math.floor(Math.random() * 200) + 1;
}