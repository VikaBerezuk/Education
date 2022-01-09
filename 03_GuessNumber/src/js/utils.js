function getValueId(id) {
    const value = document.getElementById(id);
    if (value){
        return true;
    }
    return '';
}

function getInputId(id) {
    let node = document.getElementById(id);
    if (node){
        node = +node.value;
        return node;
    }
    return '';
}

function getStyleColor(id, color, text) {
    let node = document.getElementById(id);
    if (node){
        node.style.color = color;
        node.textContent = text;
        return true;
    }
    return '';
}

function getAddClass(id, myClass) {
    let node = document.getElementById(id);
    if (node){
        node.classList.add(myClass);
        return true;
    }
    return '';
}

function deleteClass(id, myClass) {
    let node = document.getElementById(id);
    if (node){
        node.classList.remove(myClass);
        return true;
    }
    return '';
}

function resetButton(id) {
    let node = document.getElementById(id);
    if(node) {
        const resetButton = document.createElement('button');
        resetButton.id += 'resetGameButton'
        resetButton.textContent = 'Начать новую игру';
        node.appendChild(resetButton);
        return true;
    }
    return '';
}

function getInnerHtml(id, value) {
    const node = document.getElementById(id);
    if(node) {
        node.innerHTML = value;
        return value;
    }
    return '';
}
function addListener (id, eventType, callback){
    const node = document.getElementById(id);
    if (node){
        node.addEventListener(eventType, callback);
    }
}

module.exports = { getValueId, addListener, getInputId, getStyleColor, getAddClass, resetButton, deleteClass, getInnerHtml }