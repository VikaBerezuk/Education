//1.
function square() {
    let result = '';
    for(let i = 0; i <= 6; i++){
        for(let j = 0; j <= 6; j++) {
            result = result + ' * ';
        }
        result += '\n';
    }
    return result;
}
console.log(square());

module.exports = square;