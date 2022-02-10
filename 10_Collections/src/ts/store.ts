type options<T> = {initialState: T};
type Fn = () => void;
type Store<T> = {
    state: T,
    setState: (newState: T) => void,
    getState: () => T,
    listeners: Set<() => void>,
    subscribe: (cb: Fn) => () => boolean
}

export function createStore<T>(opts: options<T>): Store<T> {
    const { initialState } = opts;

    const store = {
        state: initialState,
        setState(newState) {
            store.state = newState;
            console.log('start')
            store.listeners.forEach((listener) => listener())
        },
        getState() {
            return store.state;
        },
        listeners: new Set<() => void>(),
        subscribe(cb) {
            store.listeners.add(cb);
            return () => store.listeners.delete(cb);
        }
    }

    return store;
}

const store = createStore({initialState: {}});
const unsubScript = store.subscribe(() => {});