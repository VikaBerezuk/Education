export interface IList{
    clear: () => void,
    add: (item) => void,
    getSize: () => number,
    set: (item, index) => void,
    get: (index) => void,
    remove: (item) => number,
    toArray: () => number[],
    toString: () => string,
    contains: (item) => boolean,
    minValue: () => number,
    maxValue: () => number,
    minIndex: () => number,
    maxIndex: () => number,
    reverse: () => void,
    halfReverse: () => void,
    retainAll: (item: number[]) => void,
    removeAll: (item: number[]) => void,
    sort: () => void,
    print: () => void,
}

export interface ITree{
    init: (array) => void;
    clear: () => void;
    size: () => number;
    insert: (value) => void;
    print: (node:{}, callback:(node:{})=>any) => void;
    toArray: () => any[];
    search: (value) => any;
    width: () => number;
    height: () => number;
    nodes: () => number;
    leaves: () => number;
    reverse: () => void;
    minNode: () => any;
    maxNode: () => any;
    remove: (value) => any;
}