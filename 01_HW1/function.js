// 1.	Получить строковое название дня недели по номеру дня.
function getWeekDay(date) {
    if(typeof date !== "number") {
        return false;
    }
    let days = ['', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    // return days[date.getDay()]; // day now
    return days[date];
}
// 2.	Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function getDistance(x1, x2, y1, y2) {
    if( typeof x1 !== 'number' || typeof x2 !== 'number' ||
        typeof y1 !== 'number' || typeof y2 !== 'number'){
        return false;
    }
    return Math.hypot((x1 - x2), (y1 - y2));
}
// 3.	Вводим число(0-999), получаем строку с прописью числа.
function writingNumberString(n) {
    const units = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const tenths = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четирнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    const dozens = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восьмьдесят', 'девяносто'];
    const hundreds = ['сто', 'двести', 'триста', 'четыриста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятсот'];
    const thousands = ['тисяч', 'миллион', 'миллиард'];
    let result = '';
    const number = n.toString().split('');
    if (n < 0 || n !== parseInt(n)) {
        return false;
    } else if (n < 10) {
        return units[n];
    } else if (n >= 10 && n < 20) {
        return tenths[n - 10];
    } else if (n >= 20 && n < 100) {
        if (n % 10 === 0) {
            return dozens[n / 10 - 2];
        } else {
            return `${dozens[(n - n % 10) / 10 - 2]} ${units[n % 10]}`;
        }
    } else if (n >= 100 && n <= 999) {
        if(n % 100 === 0) {
            return hundreds[n / 100 - 1];
        } else if(number[1] == 0) {
            return `${hundreds[(n - n % 100)/ 100 - 1]} ${units[n % 100]}`;
        } else if(number[1] == 1) {
            return `${hundreds[(n - n % 100)/ 100 - 1]} ${tenths[n % 10]}`;
        } else {
            if(n % 10 === 0) {
                return `${hundreds[(n - n % 100)/ 100 - 1]} ${dozens[(n % 100)/ 10 - 2]}`;
            } else {
                return `${hundreds[(n - n % 100)/ 100 - 1]} ${dozens[((n % 100) - ((n % 100) % 10))/ 10 - 2]} ${units[(n % 100) % 10]}`;
            }
        }
    } else if (n >= 1000 && n <= 999000) {
        if(n / 1000 > 0 && n / 1000 < 10) {
            if(number[2] === '1' ) {
                result = `${units[(number[0])]} ${thousands[0]} ${hundreds[(number[1]) - 1]} ${tenths[(number[3])]}`;
            } else {
                result = `${units[(number[0])]} ${thousands[0]} ${hundreds[(number[1]) - 1]} ${dozens[(number[2]) - 2]} ${units[(number[3])]}`;
            }
        } else if(n / 1000 >= 10 && n / 1000 < 20) {
            if(number[3] === '1') {
                result = `${tenths[(number[1])]} ${thousands[0]} ${hundreds[(number[2]) - 1]} ${tenths[(number[4])]}`;
            } else {
                result = `${tenths[(number[1])]} ${thousands[0]} ${hundreds[(number[2]) - 1]} ${dozens[(number[3]) - 2]} ${units[(number[4])]}`;
            }
        } else if(n / 1000 >= 20 && n / 1000 <= 99) {
            if(number[3] === '1') {
                result = `${dozens[(number[0]) -2]} ${thousands[0]} ${hundreds[(number[2]) - 1]} ${tenths[(number[4])]}`;
            } else {
                result = `${dozens[(number[0]) -2]} ${units[(number[1])]} ${thousands[0]} ${hundreds[(number[2]) - 1]} ${dozens[(number[3]) - 2]} ${units[(number[4])]}`;
            }
        } else {
            if(number[1] === '1') {
                if(number[4] === '1') {
                    result = `${hundreds[(number[0])- 1]} ${tenths[(number[2])]} ${thousands[0]} ${hundreds[(number[3]) - 1]} ${tenths[(number[5])]}`;
                } else {
                    result = `${hundreds[(number[0])- 1]} ${tenths[(number[2])]} ${thousands[0]} ${hundreds[(number[3]) - 1]} ${dozens[(number[4]) - 2]} ${units[(number[5])]}`;
                }
            } else {
                if(number[4] === '1') {
                    result = `${hundreds[(number[0])- 1]} ${dozens[(number[1]) -2]} ${units[(number[2])]} ${thousands[0]} ${hundreds[(number[3]) - 1]} ${tenths[(number[5])]}`;
                } else {
                    result = `${hundreds[(number[0])- 1]} ${dozens[(number[1]) -2]} ${units[(number[2])]} ${thousands[0]} ${hundreds[(number[3]) - 1]} ${dozens[(number[4]) - 2]} ${units[(number[5])]}`;
                }
            }
        }
    }
    //милион и милиард
    let arr = result.replace(/undefined |ноль/g,"");
    return arr;
}
// 4.	Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
function writingNumber(n) {
    if(typeof n !== 'string') {
        return false;
    }
    const value = {
        "ноль": 0,
        "один": 1,
        "одна": 1,
        "два": 2,
        "две": 2,
        "три": 3,
        "четыре": 4,
        "пять": 5,
        "шесть": 6,
        "семь": 7,
        "восемь": 8,
        "девять": 9,
        "десять": 10,
        "одиннадцать": 11,
        "двенадцать": 12,
        "тринадцать": 13,
        "четырнадцать": 14,
        "пятнадцать": 15,
        "шестнадцать": 16,
        "семнадцать": 17,
        "восемнадцать": 18,
        "девятнадцать": 19,
        "двадцать": 20,
        "тридцать": 30,
        "сорок": 40,
        "пятьдесят": 50,
        "шестьдесят": 60,
        "семьдесят": 70,
        "восемьдесят": 80,
        "девяносто": 90,
        "сто": 100,
        "двести": 200,
        "триста": 300,
        "четыреста": 400,
        "пятьсот": 500,
        "шестьсот": 600,
        "семьсот": 700,
        "восемьсот": 800,
        "девятсот": 900,
    };
    const array = n.toLowerCase().split(" ");
    let result = "";
    if (array.length === 1) {
        result = value[array[0]];
    } else if (array.length === 2) {
        result = value[array[0]] + value[array[1]];
    } else if (array.length === 3) {
        result = value[array[0]] + value[array[1]] + value[array[2]];
    }
    return result;
}
// 6.	Для задания 3 расширить диапазон до 999 миллиардов
function getNumberString (n) {
    if(typeof n !== 'string') {
        return false;
    }
    const units = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const dozens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const thousands = {'thousand': 1000, 'million': 1000000, 'billion': 1000000000};

    n = n.replaceAll('-', ' ');
    let arr = n.split(' ');
    let result = 0;
    let value = 0;

    for (let i = 0; i < arr.length; i++) {
        if (units.includes(arr[i])){
            value = value + units.indexOf(arr[i]);
        } else if (arr[i] === 'hundred') {
            value = value * 100;
        } else if (dozens.includes(arr[i])) {
            value = value + dozens.indexOf(arr[i]) * 10;
        } else if (thousands.hasOwnProperty(arr[i])) {
            value = value * thousands[arr[i]];
            result = result + value;
            value = 0;
        }
    }
    if (value !== 0) {
        result = result + value;
    }
    return result;
}

module.exports = { getWeekDay, getDistance, writingNumberString, writingNumber, getNumberString }