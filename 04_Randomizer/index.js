let minNumber = 1;
let maxNumber = 5;
let randomNumber;
let valueGenerate;
let arr = [];

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
        valueGenerate = document.getElementById('valueGenerate').textContent = `Generated number: ${randomNumber}`;
        return arr;
    }
}
function generated() {
    if (arr.length === (maxNumber - minNumber + 1)) {
        valueGenerate = document.getElementById('valueGenerate').textContent = `Generated number: Elements are over`;
        document.getElementById('generatedButton').disabled = true;
        return;
    }
    getRandomNumber();
    arr.sort();
}
function resetGame() {
    arr = [];
    valueGenerate =  document.getElementById('valueGenerate').textContent = 'Start game';
    document.getElementById('generatedButton').disabled = false;
}
