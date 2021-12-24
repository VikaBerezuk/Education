// 4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке
function countCharacters(string) {

    if(typeof string !== 'string') {
        return 'not string';
    }

    let result = string.split('');
    const obj = {};
    result.forEach(function(item) {

        if( item == ' ' || item === '!' || item === '*'){
            return;
        }

        if(obj[item]) {
            obj[item] += 1;
        } else {
            obj[item] = 1;
        }
    });

    return obj;
}

module.exports = { countCharacters };