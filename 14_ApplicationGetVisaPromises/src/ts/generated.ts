import {User} from "./interface";
import {age, balance, documentVisa, levelEnglish, namePerson} from "./constants";
import {canvas, getElementById, getValue} from "./utils";

export function generated(id:string, specifications) {
    const name = <HTMLInputElement>getElementById(id);
    const result = specifications[Math.floor(Math.random() * specifications.length)];
    getValue(name, result);
    clearCanvas();
    return result;
}

export function clearCanvas():void {
    canvas(0,0);
}

export function generatedAll(arrCandidate:User[]) {
    clearCanvas();
    if (arrCandidate.length < 5) {
        arrCandidate.push({
            name: generated('name', namePerson),
            balance: generated('balance', balance),
            age: generated('age', age),
            document: generated('myDocument', documentVisa),
            english: generated('levelEnglish', levelEnglish)
        });
        const error = <HTMLElement>getElementById('error');
        error.innerText = '';
    } else {
        const error =  <HTMLElement>getElementById('error');
        error.innerText = 'The visa center closes in 15 minutes and can only accept 5 people, come back tomorrow!';
    }
}

// export function getInnerText(id, text){
//     const node = getElementById(id);
//     node.innerText = text;
// }
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
                document: getDocument.value,
                english: english.value
            });

            const error =  <HTMLElement>document.getElementById('error');
            error.innerText = ''
        } else {
            const error =  <HTMLElement>document.getElementById('error');
            error.innerText = 'Fill out the candidate registration form.'
        }
    } else {
        const error =  <HTMLElement>document.getElementById('error');
        error.innerText = 'The visa center closes in 15 minutes and can only accept 5 people, come back tomorrow!';
    }
}