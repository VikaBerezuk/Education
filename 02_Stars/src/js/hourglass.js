//7
function hourglass() {
    let str = '';
    for(let i = 1; i < 8; i++) {
        for(let j = 1; j < 8; j++) {
            if(i===j || 8 === (j + i)){
                str = str + " * ";
            } else {
                str = str + '   ';
            }
        }
        str = str + '\n';
    }
    return str;
}
console.log(hourglass());

module.exports = hourglass;