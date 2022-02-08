import {User} from "./interface";
import {age, balance, documentVisa, levelEnglish, namePerson} from "./constants";

export function generated(id:string, specifications) {
    const name = document.getElementById(id) as HTMLInputElement;
    const result = specifications[Math.floor(Math.random() * specifications.length)];
    name.value = result;
    console.log(result)
    return result;
}

export function generatedAll(arrCandidate:User[]) {
    if (arrCandidate.length < 5) {
        arrCandidate.push({
            name: generated('name', namePerson),
            balance: generated('balance', balance),
            age: generated('age', age),
            document: generated('myDocument', documentVisa),
            english: generated('levelEnglish', levelEnglish)
        });
        const error = <HTMLElement>document.getElementById('error');
        error.innerText = '';
    } else {
        const error =  <HTMLElement>document.getElementById('error');
        error.innerText = 'Визовый центр закрывается через 15 минут и может принять только 5 кандидатов, приходите завтра!';
    }
}

export function addCandidate(arrCandidate:User[], idName:string, idBalance:string, idAge:string, idDocument:string, idEnglish:string) {
    const name = <HTMLInputElement>document.getElementById(idName);
    const getBalance = <HTMLInputElement>document.getElementById(idBalance);
    const getAge = <HTMLInputElement>document.getElementById(idAge);
    const getDocument = <HTMLInputElement>document.getElementById(idDocument);
    const english = <HTMLInputElement>document.getElementById(idEnglish);

    if (arrCandidate.length < 5) {
        if (name.value !== '' && getBalance.value !== '' && getAge.value !== '' && getDocument.value !== '' && english.value !== '') {

            arrCandidate.push({
                name: name.value,
                balance: getBalance.value,
                age: getAge.value,
                document: [getDocument.value],
                english: english.value
            });

            const error =  <HTMLElement>document.getElementById('error');
            error.innerText = ''
        } else {
            const error =  <HTMLElement>document.getElementById('error');
            error.innerText = 'Заполните форму для регистрации кандидата'
        }
    } else {
        const error =  <HTMLElement>document.getElementById('error');
        error.innerText = 'Визовый центр закрывается через 15 минут и может принять только 5 кандидатов, приходите завтра!';
    }
}