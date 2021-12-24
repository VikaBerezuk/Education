//8
function hourglassTop() {
    let str = '';
    for(let i = 1; i < 8; i++) {
        for(let j = 1; j < 8; j++) {
            if(i === 1 || (i===j && i < 5)){
                str = str + " * ";
            } else if( i < 5 && (j + i) === 8 ) {
                str = str + " * ";
            } else {
                str = str + '   ';
            }
        }
        str = str + '\n';
    }
    return str;
}
console.log(hourglassTop());

module.exports = hourglassTop;