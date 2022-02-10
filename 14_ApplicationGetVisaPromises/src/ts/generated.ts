import {User} from "./interface";
import {age, balance, documentVisa, levelEnglish, namePerson} from "./constants";
import {canvas, getElementById, getInnerText, getValue, getValueContext} from "./utils";

export function generated(id:string, specifications) {
    const name = <HTMLInputElement>getElementById(id);
    const result = specifications[Math.floor(Math.random() * specifications.length)];
    getValueContext(name, result);
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

        getInnerText('error', '')
    } else {
        getInnerText('error', 'The visa center closes in 15 minutes and can only accept 5 people, come back tomorrow!')
    }
}

export function addCandidate(arrCandidate:User[], idName:string, idBalance:string, idAge:string, idDocument:string, idEnglish:string) {
    const name = <HTMLInputElement>getElementById(idName);
    const getBalance = <HTMLInputElement>getElementById(idBalance);
    const getAge = <HTMLInputElement>getElementById(idAge);
    const getDocument = <HTMLInputElement>getElementById(idDocument);
    const english = <HTMLInputElement>getElementById(idEnglish);

    if (arrCandidate.length < 5) {
        if (getValue(name) !== '' && getValue(getBalance) !== '' && getValue(getAge) !== '' && getValue(getDocument) !== '' && getValue(english) !== '') {

            arrCandidate.push({
                name: getValue(name),
                balance: getValue(getBalance),
                age: getValue(getAge),
                document: getValue(getDocument),
                english: getValue(english)
            });

            getInnerText('error', '');
        } else {
            getInnerText('error', 'Fill out the candidate registration form.');
        }
    } else {
        getInnerText('error', 'The visa center closes in 15 minutes and can only accept 5 people, come back tomorrow!');
    }
}