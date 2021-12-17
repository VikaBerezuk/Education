let minNumber = 1;
let maxNumber = 5;
let randomNumber;
let valueGenerate;
let arr = [];
document.getElementById('randomizer__button-reset').style.display = 'none';

function getRandomNumber() {
    minNumber = +document.getElementById('min').value;
    maxNumber = +document.getElementById('max').value;
    if(maxNumber < minNumber) {
        document.getElementById('min').value = 1;
        alert("you entered min number greater than max number");
    }
   while (arr.length <= (maxNumber + 1 - minNumber)) {
        do {
            randomNumber = Math.round( Math.random() * (maxNumber - minNumber) + minNumber);
        } while (arr.includes(randomNumber))

        arr.push(randomNumber);
        valueGenerate = document.getElementById('randomizer-generate').textContent = `Generated number: ${randomNumber}`;
        document.getElementById('randomizer__button-reset').style.display = 'block';
        return arr;
    }
}
function generated() {
    console.log(arr, randomNumber)
    if (arr.length === (maxNumber - minNumber + 1)) {
        valueGenerate = document.getElementById('randomizer-generate').textContent = `Generated number: Elements are over`;
        document.getElementById('randomizer-form__button').className += ' disabled';
        document.getElementById('randomizer-form__button').disabled = true;
        return;
    }
    getRandomNumber();
    arr.sort();
}
function resetGame() {
    document.getElementById('randomizer__button-reset').style.display = 'none';
    let disableButton = document.getElementById('randomizer-form__button');
    disableButton.classList.remove('disabled');
    arr = [];
    valueGenerate =  document.getElementById('randomizer-generate').textContent = 'Start game';
    document.getElementById('randomizer-form__button').disabled = false;
}
