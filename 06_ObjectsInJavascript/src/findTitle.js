// 3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями.
// Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов,
// которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).

function findTitle(array, string) {

    if(typeof string !== 'string') {
        return false;
    }

    let result = array.filter(el => {

        if(Object.keys(el).join('') === 'title' &&
            Object.values(el).toString().toLowerCase().includes(string.toLowerCase()) ) {
            return { title: Object.values(el).join('') }
        }
    })
   return result;
}

let arr = [{
    title: 'Some title1'
}, {
    title: 'I like JS'
}, {
    user: 'This obj doesn\’t have key title js'
}, {
    title: 'Js - is the best!'
}];

console.log(findTitle(arr, 'best')); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]

module.exports = { findTitle };