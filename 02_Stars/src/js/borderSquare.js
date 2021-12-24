//2.
function borderSquare() {
    let str = '';
    console.log(str);
    for(let i = 0; i < 7; i++) {
        for(let j = 0; j < 7; j++) {
            if(i === 0 || i === 6 || j === 0 || j === 6) {
                str = str + ' * '
            } else {
                str = str + '   '
            }
        }
        str = str + '\n';
    }
    return str;
}
console.log(borderSquare());

module.exports = borderSquare;