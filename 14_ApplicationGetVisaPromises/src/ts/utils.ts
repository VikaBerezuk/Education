export function addListener(id:string, eventType:string, callback:() => void) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, callback);
        return true;
    }
    return false;
}