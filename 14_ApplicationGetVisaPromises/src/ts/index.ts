import '../index.scss';
import {age, arrCandidate, balance, documentVisa, levelEnglish, namePerson} from "./constants";
import {User} from "./interface";
import {addCandidate, generated, generatedAll} from "./generated";
import {addListener, canvas} from "./utils";
import {startRace} from "./promise";

function showCandidate(arrCandidate: User[]):void {
    const person = <HTMLElement>document.getElementById('generated-person');
    person.innerText = '';

    if (arrCandidate.length > 0) {
        arrCandidate.forEach(el => {
            const personList = document.createElement('div');
            personList.innerText = `Name: ${el.name}; balance: ${el.balance}; age: ${el.age}; document: ${el.document}; level English: ${el.english}`;
            person.appendChild(personList);
        })
    } else {
        const error = <HTMLElement>document.getElementById('error');
        error.innerText = 'Выведите данные для кандидата!';
    }
}

function disabledButtonTrue(id:string):boolean {
    const node = <HTMLButtonElement>document.getElementById(id);
    node.disabled = true;
    return true;
}

export function disabledButtonFalse(id:string):boolean {
    const node = <HTMLButtonElement>document.getElementById(id);
    node.disabled = false;
    return true;
}

function start(arrCandidate: User[]):void {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    startRace(arrCandidate, ctx, canvas);

    disabledButtonTrue('all-generated');
    disabledButtonTrue('add-candidate');
    disabledButtonTrue('start');
    disabledButtonTrue('clear');
}

export function balanceCheck(balance):boolean{
    return balance > 2000;
}

export function ageCheck(age):boolean{
    return age > 18 && age < 60;
}

export function documentCheck(document) {
    return document === 'password, insurance, photo';
}

export function langCheck(eng):boolean {
    return eng === 'B1' || eng === 'B2' || eng === 'C1';
}

export function randomTime(min,max) {
    return (Math.floor(Math.random()*(max-min +1))+min)*1000;
}

function innerText(id, text) {
    const node = <HTMLElement>document.getElementById(id);
    node.innerText = text;
}

export function clear():void {
    arrCandidate.length = 0;
    innerText('error', 'Get the data for the candidate!');
    innerText('generated-person', '');
    canvas(0,0);
}

(function init():void {
    addListener('name-generated', 'click', generated.bind(null, 'name', namePerson));
    addListener('balance-generated', 'click', generated.bind(null, 'balance', balance));
    addListener('age-generated', 'click', generated.bind(null, 'age', age));
    addListener('document-generated', 'click', generated.bind(null, 'myDocument', documentVisa));
    addListener('levelEnglish-generated', 'click', generated.bind(null, 'levelEnglish', levelEnglish));
    addListener('all-generated', 'click', generatedAll.bind(null, arrCandidate));
    addListener('add-candidate', 'click', addCandidate.bind(null, arrCandidate, 'name', 'balance', 'age', 'myDocument', 'levelEnglish'));
    addListener('show-candidate', 'click', showCandidate.bind(null, arrCandidate));

    addListener('start', 'click', () => {
        start(arrCandidate);
    });
})();

addListener('clear', 'click', clear.bind(null));
