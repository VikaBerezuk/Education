//5
function triangleBottomRight() {
    let str = '';
    for(let i = 1; i <= 7; i++) {
        for(let j = 0; j < 7; j++) {
            if( 7 === (j + i) || j === 6) {
                str = str + ' * ';
            } else if( i === 7) {
                str = str + ' * ';
            } else {
                str = str + '   ';
            }
        }
        str = str + '\n';
    }
    return str;
}
console.log(triangleBottomRight());

module.exports = triangleBottomRight;