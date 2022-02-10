import {User} from "./interface";
import {Circle} from "./Circle";

export function addListener(id:string, eventType:string, callback:() => void) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, callback);
        return true;
    }
    return false;
}

export function getElementById(id) {
    const node = document.getElementById(id);
    if(node) {
        return node;
    }
}

export function getValueContext(id, text) {
    return  id.value = text;
}

export function getValue(context) {
    return  context.value;
}

export function canvas(x,y) {
    const canvas = <HTMLCanvasElement>getElementById('canvas')
    const context = <CanvasRenderingContext2D>canvas.getContext('2d');
    context.clearRect(x, y, canvas.width, canvas.height);
}

export function getContextCanvas() {
    const node = <HTMLCanvasElement>getElementById('canvas');
    return node.getContext('2d');
}

export function getNameCanvas(el, i) {
    const ctx = <CanvasRenderingContext2D>getContextCanvas();
    ctx.font = '18px';
    ctx.fillStyle = 'black'
    ctx.textAlign = 'center';
    ctx.fillText(el.name.toUpperCase(), (i+1)*70, 20);
}

export function getInnerText(id, text){
    const node = <HTMLElement>getElementById(id);
    node.innerText = text;
}

export function disabledButton(id:string, boolean):boolean {
    const node = <HTMLButtonElement>getElementById(id);
    node.disabled = boolean;
    return true;
}

export function getCreateElTextAppendChild(id, el, text) {
    const node = <HTMLElement>getElementById(id);
    const item = document.createElement(el);
    item.innerText = text;
    node.appendChild(item);
}

export function randomTime(min,max) {
    return (Math.floor(Math.random()*(max-min +1))+min)*1000;
}

export function getPromise(people: number, arr: User[], minTime: number, maxTime: number, cb: Function, checkValue: string, textValue: string, circleCounter: number, ctx, canvas) {
    return new Promise<void>(resolve => {
        const circle = new Circle(people, arr.length, circleCounter, textValue, ctx, canvas);
        circle.draw();

        setTimeout(() => {
            if (cb(checkValue)) {
                circle.request();
                resolve();
            } else {
                return circle.rejected();
            }
        }, randomTime(minTime, maxTime))
    })
}