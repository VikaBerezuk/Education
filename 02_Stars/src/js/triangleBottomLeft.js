//4.
function triangleBottomLeft() {
    let str = '';
    for(let i = 1; i <= 7; i++) {
        for(let j = 0; j < i; j++) {
            if(i === 7) {
                str = str + ' * ';
            } else if(j === 0 || j === i -1) {
                str = str + ' * ';
            } else {
                str = str + '   ';
            }
        }
        str = str + '\n';
    }
    return str;
}
console.log(triangleBottomLeft());

module.exports = triangleBottomLeft;