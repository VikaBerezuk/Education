//1.Если а – четное посчитать а*б, иначе а+б
//function oddOrEven(a, b) {
//    if(typeof a === 'string' || typeof b === 'string') {
//        return  false;
//    } else if((a%2) === 0) {
//        return a*b;
//   } else {
//        return a+b;
//    }
//}
function oddOrEven(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return false;
    }
    return (a % 2 === 0) ? a * b : a + b;
}
//2.Определить какой четверти принадлежит точка с координатами (х,у)
function coordinates(x, y) {
    if(typeof x === 'string' || typeof y === 'string'){
        return false;
    }
    if(x === 0 && y === 0) {
        return 'Центр координат';
    } else if( x > 0 && y > 0 ){
        return '1 чверть';
    } else if ( x < 0 && y > 0 ){
        return '2 чверть';
    }  else if( x < 0 && y < 0){
        return '3 чверть';
    } else if( x > 0 && y < 0 ){
        return '4 чверть';
    }
}
//3.Найти суммы только положительных из трех чисел
function sum(a,b,c) {
    if(typeof a === 'string' ||typeof b === 'string' || typeof c === 'string' ) {
        return false;
    } else if(a < 0 && b < 0 && c < 0) {
        return 0;
    } else if( a > 0 && b > 0 && c > 0) {
        return a + b + c;
    } else if ( a > 0 && b > 0 && c < 0) {
        return a + b;
    } else if ( a > 0 && b < 0 && c > 0) {
        return a + c;
    } else if ( a < 0 && b > 0 && c > 0) {
        return b + c;
    }
}
//4.	Посчитать выражение (макс(а*б*с, а+б+с))+3
function max(a, b, c) {
    if(typeof a === 'string' || typeof b === 'string' || typeof c === 'string') {
        return false;
    }
    let x = a * b * c;
    let y = a + b + c;
    return (x > y) ? (x + 3) : (y + 3);
}
// 5.	Написать программу определения оценки студента по его рейтингу, на основе следующих правил
// Рейтинг 	Оценка  // 0-19	F // 20-39	E  // 40-59	D  // 60-74	C  // 75-89	B  // 90-100	A
function grade(a) {
    if(a < 0 || a > 100 || typeof a === 'string') {
        return false;
    } else if (a >= 0 && a < 20 ) {
        return "F";
    } else if (a >= 20 && a <= 39) {
        return "E";
    } else if (a >= 40 && a <= 59) {
        return "D";
    } else if (a >= 60 && a <= 74) {
        return "C";
    } else if (a >= 75 && a <= 89) {
        return "B";
    } else if (a >= 90 && a <= 100) {
        return "A";
    }
}
module.exports = {oddOrEven, coordinates, sum, max, grade}