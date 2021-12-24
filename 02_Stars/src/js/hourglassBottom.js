//9
function hourglassBottom() {
    let str = '';
    for(let i = 1; i < 8; i++) {
        for(let j = 1; j < 8; j++) {
            if(i === 7 || (i===j && i > 3)){
                str = str + " * ";
            } else if( i > 3 && (j + i) === 8 ) {
                str = str + " * ";
            } else {
                str = str + '   ';
            }
        }
        str = str + '\n';
    }
    return str;
}
console.log(hourglassBottom());

module.exports = hourglassBottom;