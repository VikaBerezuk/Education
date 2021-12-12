//1.
function square(n) {
    let result = '';
    for(let i = 0; i <= n; i++){
        for(let j = 0; j <= n; j++) {
            result = result + ' * ';
        }
        result += '\n';
    }
    return result;
}
console.log(square(6));
// 2.
function emptinessSquare() {
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
console.log(emptinessSquare());
//3
function triangleTopLeft() {
    let str = '';
    for(let i = 0; i < 7; i++) {
        for(let j = 0; j < 7; j++) {
            if( 6 === (j + i) || j === 0) {
                str = str + ' * ';
            } else if( i === 0) {
                str = str + ' * ';
            } else {
                str = str + '   ';
            }
        }
        str = str + '\n';
    }
    return str;
}
console.log(triangleTopLeft(7));
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
//6
function triangleTopRight() {
    let str = '';
    for(let i = 0; i < 7; i++) {
        for(let j = 0; j < 7; j++) {
            if( i === j || j === 6) {
                str = str + ' * ';
            } else if( i === 0) {
                str = str + ' * ';
            } else {
                str = str + '   ';
            }
        }
        str = str + '\n';
    }
    return str;
}
console.log(triangleTopRight());
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
