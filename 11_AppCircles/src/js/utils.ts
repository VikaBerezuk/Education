import {CANVAS, CTX} from "./constants";

export function getElementId(id) {
    const node = document.getElementById(id);
    if(node) {
        return node;
    }
    return false;
}

export function windowWH(id) {
    const CANVAS = <HTMLCanvasElement>getElementId(id);
    CANVAS.height = window.innerHeight;
    CANVAS.width = window.innerWidth;
}

export function getContext(id) {
    const CANVAS = <HTMLCanvasElement>getElementId("canvas");
    return CANVAS.getContext(id);
}

export function addListener(id, eventType, callback) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, callback);
    }
}

export function animation(init) {
    requestAnimationFrame(init);
    CTX.clearRect(0, 0, innerWidth, innerHeight);
    CTX.font = "bold 28pt Arial";
    CTX.strokeText("APPLICATION CIRCLES", CANVAS.width/3, CANVAS.height/2);
}
