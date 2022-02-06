import {ITree} from "./types";
//BST - двоичное дерево поиска, хранит данные в виде объекта Node (value,
// right, left) (recursive). AVL-tree + RB-tree (optional)
class Node {
    value: number | string;
    right: null | Node;
    left: null | Node;

    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

}

export class BST implements ITree {
    root: null | Node;

    constructor() {
        this.root = null;
    }

    clear(): void {
        this.root = null;
    }

    height(): number {
        if (this.root === null) {
            return 0
        }

        function counterH(value, height): number {
            if (value.right === null && value.left === null) {
                return height;
            }
            if (value.right && value.left) {
                return Math.max(counterH(value.right, height + 1), counterH(value.left, height + 1));
            } else if (value.right === null) {
                return counterH(value.left, height + 1);
            } else {
                return counterH(value.right, height + 1);
            }
        }

        return counterH(this.root, 1)
    }

    init(array): void {
        for (let i = 0; i < array.length; i++) {
            this.insert(array[i])
        }
    }

    insert(value): void {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            let current = this.root;

            while (current) {
                if (current.value === value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return;
                    } else {
                        current = current.right;
                    }
                }
                if (current.value < value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return;
                    } else {
                        current = current.right;
                    }
                }
                if (current.value > value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        return;
                    } else {
                        current = current.left;
                    }
                }
            }
        }
    }

    leaves(): number {//возвращает количество листьев в дереве
        function counter(value): number {
            if (value === null) {
                return 0;
            }
            if (value.right === null && value.left === null) {
                return 1;
            }
            return counter(value.right) + counter(value.left);
        }

        return counter(this.root);

    }

    maxNode(): any { // возвращает узел с максимальным числом
        let value = this.root;

        if (value === null) {
            return undefined;
        }

        while (value) {
            if (value.right === null) {
                return value.value;
            }
            value = value.right;
        }
    }

    minNode(): any { // возвращает узел с минимальным числом
        let value = this.root;

        if (value === null) {
            return undefined;
        }

        while (value) {
            if (value.left === null) {
                return value.value;
            }
            value = value.left;
        }
    }

    nodes(): number {//возвращает количество узлов в дереве
        const arr = this.toArray();
        return arr.length;
    }

    print(node: any, callback: (arg0: Node) => void): void {//обход в глубину дерева - тремя способами
        callback(this.root);
    }

    remove(value): any {//удаление узла согласно переданному числу
        if (value === null) {
            return undefined;
        }

        this.root = removeNode(this.root, value);

        function removeNode(current, value): any {
            if (current === null) {
                return null;
            }
            if (value < current.value) {
                current.left = removeNode(current.left, value);
            } else if (value > current.value) {
                current.right = removeNode(current.right, value);
            } else {
                if (current.left == null && current.right == null) {
                    current = null;
                    return current;
                } else if (current.left == null) {
                    current = current.right;
                    return current;
                } else if (current.right == null) {
                    current = current.left;
                    return current;
                } else {
                    current.right = removeNode(currentValue(current.right).right, currentValue(current.right).value);
                    return current;
                }
            }
            return current;
        }

        function currentValue(value) {
            while (value && value.left) {
                value = value.left
            }
            return value;
        }
        if(this.root !== null) {
            return this.root.value ;
        } else {
            return null;
        }
    }

    reverse(): void {
        let value = this.root

        changeArr(value);

        function changeArr(current) {
            if (current === null) {
                return null;
            }
            if (current.left && current.right) {
                let right = current.right;
                current.right = current.left;
                current.left = right;
                changeArr(current.right);
                changeArr(current.left);
            } else if (current.left === null) {
                current.left = current.right;
                current.right = null;
                changeArr(current.left);
            } else if (current.right === null){
                current.right = current.left;
                current.left = null;
                changeArr(current.right);
            }
        }
    }

    search(value): any {
        let current = this.root;

        if (current === null) {
            return undefined;
        }

        while(current) {
            if (current.value === value) {
                return current.value;
            }
            if (current.value > value) {
                current = current.left;
            }
            if (current.value < value) {
                current = current.right;
            }
        }

        return undefined;
    }

    size(): number {
        const arr = this.toArray()
        return arr.length;
    }

    toArray(): any[] {
        let result = [];
        pushArray(this.root, result);

        function pushArray(current, result): void{
            if (current) {
                pushArray(current.left, result);
                result.push(current.value);
                pushArray(current.right, result);
            }
        }
        return result;
    }

    width(): number {
        let value = 0;
        let maxValue = 0;

        if (this.root === null) {
            return 0;
        }

        if (this.root.right === null && this.root.left === null) {
            return 1;
        }

        for (let i = 1; i <= this.height(); i++) {
            value = counterWidth(this.root, i)

            if (value > maxValue) {
                maxValue = value;
            }
        }

        function counterWidth(current, level) {
            if (current === null) {
                return 0;
            }

            if (level === 1) {
                return 1;
            }

            return counterWidth(current.right, level - 1) + counterWidth(current.left, level - 1);
        }
        return maxValue;
    }
}