// Одномерные массивы
// 1.	Найти минимальный элемент массива
function getMinValue(array){
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}
// 2.	Найти максимальный элемент массива
function getMaxValue(array){
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i];
    }
    return max;
}
// 3.	Найти индекс минимального элемента массива
function getMinIndexValue(array){
    let minIndex = 0;
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }
    return minIndex;
}
// 4.	Найти индекс максимального элемента массива
function getMaxIndexValue(array){
    let max = array[0];
    let maxIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            maxIndex = i;
            max = array[i];
        }
    }
    return maxIndex;
}
// 5.	Посчитать сумму элементов массива с нечетными индексами
function sumElemNotEven(arr) {
    let sum = 0;
    for(let i = 0; i <= arr.length; i ++) {
        if(i%2 === 1) {
            sum += arr[i];
        }
    }
    return sum;
}
// 6.	Сделать реверс массива (массив в обратном направлении)
function reversArr(arr) {
    let array = [];
    for (let i = arr.length - 1; i > -1; i--){
        array.push(arr[i]);
    }
    return array;
}
// 7.	Посчитать количество нечетных элементов массива
function notEvenElemArr(arr) {
    let elem = 0;
    for(let i = 0; i <= arr.length; i++) {
        if(i%2 === 1) {
            elem++;
        }
    }
    return elem;
}
// 8.	Поменять местами первую и вторую половину массива, например, для массива
// 1 2 3 4, результат 3 4 1 2
function reversHalfArr(arr) {
    let result = [...arr.slice(arr.length/2), ...arr.slice(0,arr.length/2)];
    return result;
}
// 9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
const bubbleSort = arr => {
    if(typeof arr !== 'object' ) {
        return false;
    }
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) {
            break;
        }
    }
    return arr;
};
function selectedSort(arr) {
    if(typeof arr !== 'object' ) {
        return false;
    }
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]) {
                min=j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}
function insertSort(arr) {
    if(typeof arr !== 'object' ) {
        return false;
    }
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i-1;
        while ((j > -1) && (current < arr[j])) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}
// 10.	Отсортировать массив (Quick, Merge, Shell, Heap)
function quickSort(arr) {
    if(typeof arr !== 'object' ) {
        return false;
    }
    let result = arr[Math.floor(1 + Math.random() * ((arr.length - 1) + 1 - 1))];
    const left = [];
    const right = [];
    if (arr.length < 2) {
        return arr;
    }

    arr.splice(arr.indexOf(result), 1);
    arr = [result].concat(arr);
    for (let i = 1; i < arr.length; i++) {
        if (result > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(result, quickSort(right));
}
function mergeSort(arr) {
    if(typeof arr !== 'object' ) {
        return false;
    }
    const half = arr.length / 2;
    if(arr.length < 2){
        return arr;
    }
    const left = arr.splice(0, half)
    return merge(mergeSort(left),mergeSort(arr))
}
function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [ ...arr, ...left, ...right ];
}
function shellSort(arr){
    if(typeof arr !== 'object' ) {
        return false;
    }
    for (let i = Math.floor(arr.length/2); i > 0; i = Math.floor(i/2))	{
        for (let j = i; j < arr.length; j += 1)  {
            let temp = arr[j];
            let k;
            for (k = j; k >= i && arr[k-i] > temp; k -= i)  {
                arr[k] = arr[k-i];
            }
            arr[k] = temp;
        }
    }
    return arr;
}
function heapSort(arr){
    if(typeof arr !== 'object' ) {
        return false;
    }
    const result = [...arr];
    let l = result.length;
    const round = (a, i) => {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let max = i;
        if (left < l && a[left] > a[max]) max = left;
        if (right < l && a[right] > a[max]) max = right;
        if (max !== i) {
            [a[max], a[i]] = [a[i], a[max]];
            round(a, max);
        }
    };
    for (let i = Math.floor(l / 2); i >= 0; i -= 1) round(result, i);
    for (let i = result.length - 1; i > 0; i--) {
        [result[0], result[i]] = [result[i], result[0]];
        l--;
        round(result, 0);
    }
    return result;
}
module.exports = {
    getMinValue, getMaxValue, getMinIndexValue, getMaxIndexValue, sumElemNotEven, reversArr, notEvenElemArr,
    reversHalfArr, bubbleSort, selectedSort, insertSort, quickSort, mergeSort, shellSort, heapSort
}
