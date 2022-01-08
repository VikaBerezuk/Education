function getValue(id) {
    const input = document.getElementById(id);
    if (input){
        return input;
    }
    return '';
}

function callAlert(text) {
    alert(text);
}

function addListener (id, eventType, callback){
    const node = document.getElementById(id);
    if (node){
        node.addEventListener(eventType, callback);
    }
}

function reStartGame() {
    const text =  getValue('randomizerText');
    const disableButton = getValue('generated');
    const reset = getValue('reset');
    disableButton.classList.remove('disabled');
    disableButton.disabled = false;
    disableButton.style.cursor = 'pointer';
    reset.style.display = 'none';
    text.textContent = 'Start game';
}

module.exports = { getValue, callAlert, addListener, reStartGame };