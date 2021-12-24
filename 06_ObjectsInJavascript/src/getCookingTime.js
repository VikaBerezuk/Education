// 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
// Правила: -Яйца варить 5 минут -Вместительность емкости не более 5 яиц одновременно
function getCookingTime(eggsAmount) {
    let result;

    if (typeof eggsAmount !== 'number' || eggsAmount < 0) {
        return false;
    }

    if (eggsAmount === 0) {
        return 'returns 0';
    } else {
        result = 'returns ' + Math.ceil(eggsAmount / 5) * 5;
    }

    return result;
}

module.exports = {getCookingTime};




