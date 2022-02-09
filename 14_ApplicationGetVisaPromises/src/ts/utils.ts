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

export function getValue(id, result) {
    return  id.value = result;
}

export function canvas(x,y) {
    const canvas = <HTMLCanvasElement>getElementById('canvas')
    const context = <CanvasRenderingContext2D>canvas.getContext('2d');
    context.clearRect(x, y, canvas.width, canvas.height);
}