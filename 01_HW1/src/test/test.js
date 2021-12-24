const assert = require('assert');
const path = require('path');
const operations = require(path.join(__dirname, './../operator.js'));
const loop = require(path.join(__dirname, './../loop.js'));
const array = require(path.join(__dirname, './../array.js'));
const func = require(path.join(__dirname, './../function.js'));

describe('test operator.js', function () {
    describe('oddOrEven', function () {
        it('Если а – четное посчитать а*б', function () {
            assert.equal(operations.oddOrEven(2, 3), 6);
        });
        it("а - не четное, значит а+б", function () {
            assert.equal(operations.oddOrEven(1, 4), 5);
        });
        it("а или b - строка, значит false", function () {
            assert.equal(operations.oddOrEven('3', 3), false);
        });
        it("а или b - строка, значит false", function () {
            assert.equal(operations.oddOrEven(1, '1'), false);
        });
    });
    describe('coordinates', function () {
        it('Координаты (0,0) - Центр координат', function () {
            assert.equal(operations.coordinates(0, 0), 'Центр координат')
        });
        it("Координаты (1,1) - 1 чверть) ", function () {
            assert.equal(operations.coordinates(1, 1), '1 чверть');
        });
        it("Координаты (-1,1) - 2 чверть)", function () {
            assert.equal(operations.coordinates(-1, 1), '2 чверть');
        });
        it("Координаты (-1,-1) - 3 чверть)", function () {
            assert.equal(operations.coordinates(-1, -1), '3 чверть');
        });
        it("Координаты (1,-1) - 4 чверть) ", function () {
            assert.equal(operations.coordinates(1, -1), '4 чверть');
        });
        it("а или b - строка, значит false", function () {
            assert.equal(operations.coordinates(1, '1'), false);
        });
    });
    describe('sum', function () {
        it("a, b, c все числа положительные, c+b", function () {
            assert.equal(operations.sum(1, 1, 1), 3);
        });
        it("a - отрицательное, c+b", function () {
            assert.equal(operations.sum(-1, 1, 1), 2);
        });
        it("b - отрицательное, a+c", function () {
            assert.equal(operations.sum(1, -1, 1), 2);
        });
        it("c - отрицательное, a+b", function () {
            assert.equal(operations.sum(2, 2, -1), 4);
        });
        it("a,b,c - отрицательное, 0", function () {
            assert.equal(operations.sum(-1, -1, -1), 0);
        });
        it("а или b или c - строка, значит false", function () {
            assert.equal(operations.sum('1', 1, 1), false);
        });
        it("а или b или c - строка, значит false", function () {
            assert.equal(operations.sum(1, '1', 1), false);
        });
        it("а или b или c - строка, значит false", function () {
            assert.equal(operations.sum(1, 1, '1'), false);
        });
    });
    describe('max', function () {
        it('Посчитать выражение (max(а*б*с))+3', function () {
            assert.equal(operations.max(4, 5, 6), 123);
        });
        it("Посчитать выражение (max(а+б+с))+3", function () {
            assert.equal(operations.max(4, 5, 1), 23);
        });
        it("Все 1, (1+1+1)+3=6", function () {
            assert.equal(operations.max(1, 1, 1), 6);
        });
        it("а, или b или c - строка, значит false", function () {
            assert.equal(operations.max('1', 3, 3), false);
        });
        it("а, или b или c - строка, значит false", function () {
            assert.equal(operations.max(1, '2', 1), false);
        });
        it("а, или b или c - строка, значит false", function () {
            assert.equal(operations.max(1, 2, '1'), false);
        });
    });
    describe('grade', function () {
        it("Оценка 0-19 - F", function () {
            assert.equal(operations.grade(15), 'F');
        });
        it("Оценка 20-39 - E", function () {
            assert.equal(operations.grade(35), 'E');
        });
        it("Оценка 40-59 - D", function () {
            assert.equal(operations.grade(45), 'D');
        });
        it("Оценка 60-74 - C", function () {
            assert.equal(operations.grade(65), 'C');
        });
        it("Оценка 75-89 - B", function () {
            assert.equal(operations.grade(78), 'B');
        });
        it("Оценка 90-100 - A", function () {
            assert.equal(operations.grade(95), 'A');
        });
        it("Оценка меньше 0 или больше 100 или ввели не число - false", function () {
            assert.equal(operations.grade(-1), false);
        });
        it("Оценка меньше 0 или больше 100 или ввели не число - false", function () {
            assert.equal(operations.grade(101), false);
        });
        it("Оценка меньше 0 или больше 100 или ввели не число - false", function () {
            assert.equal(operations.grade('aa'), false);
        });
    });
});
describe('test loop.js', function () {
    describe('sumEvenNumbers', function () {
        it("сумму четных чисел и их количество в диапазоне от 1 до 99", function () {
            assert.equal(loop.sumEvenNumbers(), 2550)
        });
    });
    describe('isPrimeNumber', function () {
        it('простое число', function () {
            assert.equal(loop.isPrimeNumber(1), true);
        });
        it('простое число', function () {
            assert.equal(loop.isPrimeNumber(11), true);
        });
        it('простое число', function () {
            assert.equal(loop.isPrimeNumber(101), true);
        });
        it("не простое число", function () {
            assert.equal(loop.isPrimeNumber(111), false);
        });
        it("не простое число", function () {
            assert.equal(loop.isPrimeNumber(-1), false);
        });
        it("не простое число", function () {
            assert.equal(loop.isPrimeNumber(6), false);
        });
        it("аа - вы ввели не число", function () {
            assert.equal(loop.isPrimeNumber('аа'), false);
        });
    });
    describe('sqrtNumber', function () {
        it('корень натурального числа с точностью до целого', function () {
            assert.equal(loop.sqrtNumber(19), 5);
        });
        it('корень натурального числа с точностью до целого', function () {
            assert.equal(loop.sqrtNumber(16), 4);
        });
        it('корень натурального числа с точностью до целого', function () {
            assert.equal(loop.sqrtNumber(121), 11);
        });
        it("отрицательное число = false", function () {
            assert.equal(loop.sqrtNumber(-1), false);
        });
        it("отрицательное число = false", function () {
            assert.equal(loop.sqrtNumber(-51), false);
        });
        it("аа вы ввели не число = false", function () {
            assert.equal(loop.sqrtNumber('аа'), false);
        });
    });
    describe('sqrtNumberBinary', function () {
        it('корень натурального числа с точностью до целого', function () {
            assert.equal(loop.sqrtNumberBinary(19), 4);
        });
        it('корень натурального числа с точностью до целого', function () {
            assert.equal(loop.sqrtNumberBinary(11), 3);
        });
        it('корень натурального числа с точностью до целого', function () {
            assert.equal(loop.sqrtNumberBinary(16), 4);
        });
        it('корень натурального числа с точностью до целого', function () {
            assert.equal(loop.sqrtNumberBinary(121), 11);
        });
        it("отрицательное число = false", function () {
            assert.equal(loop.sqrtNumberBinary(-1), false);
        });
        it("отрицательное число = false", function () {
            assert.equal(loop.sqrtNumberBinary(-51), false);
        });
        it("аа вы ввели не число = false", function () {
            assert.equal(loop.sqrtNumberBinary('аа'), false);
        });
    });
    describe("factorial", function () {
        it("1! или 0! = 1", function () {
            assert.equal(loop.factorial(0), 1);
        });
        it("1! или 0! = 1", function () {
            assert.equal(loop.factorial(1), 1);
        });
        it("5! = 120", function () {
            assert.equal(loop.factorial(5), 120);
        });
        it("11! = 39916800", function () {
            assert.equal(loop.factorial(12), 479001600);
        });
        it("Отрицательное число  = false", function () {
            assert.equal(loop.factorial(-11), false);
        });
        it("Отрицательное число  = false", function () {
            assert.equal(loop.factorial(-40), false);
        });
        it("аа вы ввели не число =  false", function () {
            assert.equal(loop.factorial('aa'), false);
        });
    });
    describe("getSumNumber", function () {
        it("Сумма цифр заданного числа: 6+6+6+6=24", function () {
            assert.equal(loop.getSumNumber(6666), 24)
        });
        it("Сумма цифр заданного числа: 1+1=2", function () {
            assert.equal(loop.getSumNumber(11), 2);
        });
        it("Сумма цифр заданного числа: 5+0+0=3", function () {
            assert.equal(loop.getSumNumber(500), 5);
        });
        it("Сумма цифр заданного числа: -22 2+2=4", function () {
            assert.equal(loop.getSumNumber(-22), -4);
        });
        it("аа вы ввели не число = false", function () {
            assert.equal(loop.getSumNumber('аа'), false);
        });
    });
    describe("mirrorNumber", function () {
        it("Дзеркальное отображения числа 12345 - 54321", function () {
            assert.equal(loop.mirrorNumber(12345), 54321);
        });
        it("Дзеркальное отображения числа 300 - 3", function () {
            assert.equal(loop.mirrorNumber(300), 3);
        });
        it("Отрицательное число -12345 - false", function () {
            assert.equal(loop.mirrorNumber(-12345), false);
        });
        it("aa вы ввели не число = false", function () {
            assert.equal(loop.mirrorNumber('aa'), false);
        });
    });
});
describe('test array.js', function () {
    describe('getMinValue', function () {
        it('минимальный элемент массива [33,44,222,22,1,11,-11,111,11] = -11', function () {
            assert.equal(array.getMinValue([33, 44, 222, 22, 1, 11, -11, 111, 11]), -11);
        });
    });
    describe('getMaxValue', function () {
        it('максимальный элемент массива [33,44,222,22,1,11,-11,111,11] = 222', function () {
            assert.equal(array.getMaxValue([33, 44, 222, 22, 1, 11, -11, 111, 11]), 222);
        });
    });
    describe('getMinIndexValue', function () {
        it('индекс минимального элемента массива [33,44,222,22,1,11,-11,111,11] = -11', function () {
            assert.equal(array.getMinIndexValue([33, 44, 222, 22, 1, 11, -11, 111, 11]), 6);
        });
    });
    describe('getMaxIndexValue', function () {
        it('индекс максимального элемента массива [33,44,222,22,1,11,-11,111,11] = 222', function () {
            assert.equal(array.getMaxIndexValue([33, 44, 222, 22, 1, 11, -11, 111, 11]), 2);
        });
    });
    describe('sumElemNotEven', function () {
        it('сумму элементов массива с нечетными индексами [1,3,4,5] = 8', function () {
            assert.equal(array.sumElemNotEven([1, 3, 4, 5]), 8);
        });
    });
    describe('reversArr', function () {
        it('реверс массива', function () {
            assert.deepEqual(array.reversArr([1, 2, 3, 4, 5, 6, 7]), [7, 6, 5, 4, 3, 2, 1]);
        });
        it('реверс массива', function () {
            assert.deepEqual(array.reversArr([1, 22, 3, 44, 5, 66, 7]), [7, 66, 5, 44, 3, 22, 1]);
        });
    });
    describe('notEvenElemArr', function () {
        it('количество нечетных элементов массива [1,2,3,4,5,6,7] = 5', function () {
            assert.equal(array.notEvenElemArr([1, 2, 3, 4, 5, 6, 7]), 4);
        });
        it('количество нечетных элементов массива [1,2,3,4,5,6,7] = 5', function () {
            assert.equal(array.notEvenElemArr([1, 2, 3, 4, 5, 6]), 3);
        });
    });
    describe('reversHalfArr', function () {
        it('Поменять местами первую и вторую половину массива: [1,2,3,4] = [3,4,1,2]', function () {
            assert.deepEqual(array.reversHalfArr([1, 2, 3, 4]), [3, 4, 1, 2]);
        });
        it('Поменять местами первую и вторую половину массива: [1,2,3,4] = [3,4,1,2]', function () {
            assert.deepEqual(array.reversHalfArr([1, 2, 3, 4, 5, 6]), [4, 5, 6, 1, 2, 3]);
        });
    });
    describe('bubbleSort', function () {
        it('Отсортировать массив методом пузырька Bubble', function () {
            assert.deepEqual(array.bubbleSort([1, 13, 501, 1, 4, 61, 8, -11, 3, 7, 0, 432]), [-11, 0, 1, 1, 3, 4, 7, 8, 13, 61, 432, 501]);
        });
        it('Пустой массив', function () {
            assert.deepEqual(array.bubbleSort([]), []);
        });
        it('Не массив = false', function () {
            assert.deepEqual(array.bubbleSort('aa'), false);
        });
        it('Не массив = false', function () {
            assert.deepEqual(array.bubbleSort(11), false);
        });
    });
    describe('selectedSort', function () {
        it('Отсортировать массив методом Select', function () {
            assert.deepEqual(array.selectedSort([1, 13, 501, 1, 4, 61, 8, -11, 3, 7, 0, 432]), [-11, 0, 1, 1, 3, 4, 7, 8, 13, 61, 432, 501]);
        });
        it('Пустой массив', function () {
            assert.deepEqual(array.selectedSort([]), []);
        });
        it('Не массив = false', function () {
            assert.deepEqual(array.selectedSort('aa'), false);
        });
        it('Не массив = false', function () {
            assert.deepEqual(array.selectedSort(11), false);
        });
    });
    describe('insertSort', function () {
        it('Отсортировать массив вставками Insert', function () {
            assert.deepEqual(array.insertSort([1, 13, 501, 1, 4, 61, 8, -11, 3, 7, 0, 432]), [-11, 0, 1, 1, 3, 4, 7, 8, 13, 61, 432, 501]);
        });
        it('Пустой массив', function () {
            assert.deepEqual(array.insertSort([]), []);
        });
        it('Не массив = false', function () {
            assert.deepEqual(array.insertSort('aa'), false);
        });
        it('Не массив = false', function () {
            assert.deepEqual(array.insertSort(11), false);
        });
    });
    describe('quickSort', function () {
        it('Отсортировать массив quick', function () {
            assert.deepEqual(array.quickSort([1, 13, 501, 1, 4, 61, 8, -11, 3, 7, 0, 432]), [-11, 0, 1, 1, 3, 4, 7, 8, 13, 61, 432, 501]);
        });
        it('Пустой массив', function () {
            assert.deepEqual(array.quickSort([]), []);
        });
        it('Не массив = false', function () {
            assert.deepEqual(array.quickSort('aa'), false);
        });
        it('Не массив = false', function () {
            assert.deepEqual(array.quickSort(11), false);
        });
    });
    describe('mergeSort', function () {
        it('Отсортировать массив merge', function () {
            assert.deepEqual(array.mergeSort([1, 13, 501, 1, 4, 61, 8, -11, 3, 7, 0, 432]), [-11, 0, 1, 1, 3, 4, 7, 8, 13, 61, 432, 501]);
        });
        it('Пустой массив', function () {
            assert.deepEqual(array.mergeSort([]), []);
        });
        it('Не массив = false', function () {
            assert.deepEqual(array.mergeSort('aa'), false);
        });
        it('Не массив = false', function () {
            assert.deepEqual(array.mergeSort(11), false);
        });
    });
    describe('shellSort', function () {
        it('Отсортировать массив shell', function () {
            assert.deepEqual(array.shellSort([1, 13, 501, 1, 4, 61, 8, -11, 3, 7, 0, 432]), [-11, 0, 1, 1, 3, 4, 7, 8, 13, 61, 432, 501]);
        });
        it('Пустой массив', function () {
            assert.deepEqual(array.shellSort([]), []);
        });
        it('Не массив = false', function () {
            assert.deepEqual(array.shellSort('aa'), false);
        });
        it('Не массив = false', function () {
            assert.deepEqual(array.shellSort(11), false);
        });
    });
    describe('heapSort', function () {
        it('Отсортировать массив heap', function () {
            assert.deepEqual(array.heapSort([1, 13, 501, 1, 4, 61, 8, -11, 3, 7, 0, 432]), [-11, 0, 1, 1, 3, 4, 7, 8, 13, 61, 432, 501]);
        });
        it('Пустой массив', function () {
            assert.deepEqual(array.heapSort([]), []);
        });
        it('Не массив = false', function () {
            assert.deepEqual(array.heapSort('aa'), false);
        });
        it('Не массив = false', function () {
            assert.deepEqual(array.heapSort(11), false);
        });
    });
});
describe('test function.js', function () {
    describe('getWeekDay', function () {
        it('Получить строковое название дня недели по номеру дня', function () {
            assert.equal(func.getWeekDay(1), 'Понедельник');
        });
        it('Получить строковое название дня недели по номеру дня', function () {
            assert.equal(func.getWeekDay(4), 'Четверг');
        });
        it('Получить строковое название дня недели по номеру дня', function () {
            assert.equal(func.getWeekDay(6), 'Суббота');
        });
        it('Вы ввели не число = false', function () {
            assert.equal(func.getWeekDay('ff'), false);
        });
        it('Вы ввели не число = false', function () {
            assert.equal(func.getWeekDay([1]), false);
        });
    });
    describe('getDistance', function () {
        it("расстояние между двумя точками в двухмерном декартовом пространстве", function () {
            assert.equal(func.getDistance(10, 0, 0, 0), 10);
        });
        it("расстояние между двумя точками в двухмерном декартовом пространстве", function () {
            assert.equal(func.getDistance(1, 1, 1, 1), 0);
        });
        it("расстояние между двумя точками в двухмерном декартовом пространстве", function () {
            assert.equal(func.getDistance(0, 0, 0, 0), 0);
        });
        it('вы ввели не число', function () {
            assert.equal(func.getDistance('0', 0, 0, 0), false);
        });
        it('вы ввели не число', function () {
            assert.equal(func.getDistance(0, [], 0, 0), false);
        })
    });
    describe('writingNumberString', function () {
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(0), 'ноль');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(10), 'десять');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(30), 'тридцать');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(87), 'восьмьдесят семь');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(200), 'двести');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(208), 'двести восемь');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(218), 'двести восемнадцать');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(250), 'двести пятьдесят');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(258), 'двести пятьдесят восемь');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(548), 'пятьсот сорок восемь');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(999), 'девятсот девяносто девять');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(2000), 'два тисяч ');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(2008), 'два тисяч восемь');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(2018), 'два тисяч восемнадцать');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(2050), 'два тисяч пятьдесят ');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(2058), 'два тисяч пятьдесят восемь');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(10746), 'десять тисяч семьсот сорок шесть');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(15619), 'пятнадцать тисяч шестьсот девятнадцать');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(45931), 'сорок пять тисяч девятсот тридцать один');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(30519), 'тридцать тисяч пятьсот девятнадцать');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(55509), 'пятьдесят пять тисяч пятьсот девять');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(88000), 'восьмьдесят восемь тисяч ');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(112746), 'сто двенадцать тисяч семьсот сорок шесть');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(115619), 'сто пятнадцать тисяч шестьсот девятнадцать');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(435931), 'четыриста тридцать пять тисяч девятсот тридцать один');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(505519), 'пятьсот пять тисяч пятьсот девятнадцать');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(505509), 'пятьсот пять тисяч пятьсот девять');
        });
        it('Вводим число(0-999 милиардов), получаем строку с прописью числа.', function () {
            assert.equal(func.writingNumberString(888000), 'восемьсот восьмьдесят восемь тисяч ');
        });
        it('вы ввели не число', function () {
            assert.equal(func.writingNumberString('77h'), false);
        });
        it('вы ввели не число', function () {
            assert.equal(func.writingNumberString([]), false);
        });
    });
    describe('writingNumber', function () {
        it('Вводим строку, которая содержит число', function () {
                assert.equal(func.writingNumber('ноль'), 0);
            });
        it('Вводим строку, которая содержит число', function () {
                assert.equal(func.writingNumber('десять'), 10);
            });
        it('Вводим строку, которая содержит число', function () {
                assert.equal(func.writingNumber('восемьдесят семь'), 87);
            });
        it('Вводим строку, которая содержит число', function () {
                assert.equal(func.writingNumber('двести пятьдесят восемь'), 258);
            });
        it('Вводим строку, которая содержит число', function () {
                assert.equal(func.writingNumber('пятьсот сорок восемь'), 548);
            });
        it('Вводим строку, которая содержит число', function () {
                assert.equal(func.writingNumber('девятсот девяносто девять'), 999);
            });
        it('вы ввели не число', function () {
            assert.equal(func.writingNumber(11), false);
        });
        it('вы ввели не число', function () {
            assert.equal(func.writingNumber([]), false);
        });
    });
    describe('getNumberString', function () {
        it('Введите число прописью на английском, например: one, sixty, one hundred, two million', function () {
            assert.equal(func.getNumberString('one'), 1);
        });
        it('Введите число прописью на английском, например: one, sixty, one hundred, two million', function () {
            assert.equal(func.getNumberString('eleven'), 11);
        });
        it('Введите число прописью на английском, например: one, sixty, one hundred, two million', function () {
            assert.equal(func.getNumberString('sixty'), 60);
        });
        it('Введите число прописью на английском, например: one, sixty, one hundred, two million', function () {
            assert.equal(func.getNumberString('one hundred'), 100);
        });
        it('Введите число прописью на английском, например: one, sixty, one hundred, two million', function () {
            assert.equal(func.getNumberString('one billion'), 1000000000);
        });
        it('Введите число прописью на английском, например: one, sixty, one hundred, two million', function () {
            assert.equal(func.getNumberString('one million'), 1000000);
        });
        it('Вы не написали прописью число', function () {
            assert.equal(func.getNumberString(11), false);
        });
        it('Вы не написали прописью число', function () {
            assert.equal(func.getNumberString(['one']), false);
        })
    });
});
