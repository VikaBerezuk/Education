import {BST} from './../BST';

describe('BTS', () => {
    let testTree;
    beforeEach(() => {
        testTree = new BST();
    })

    describe('init', () => {
        test('should initialize arr', () => {
            testTree.init([5, 2, 9, 3]);
            expect(testTree.toArray()).toStrictEqual([2,3,5,9]);
        })
    })
    describe('clear', () => {
        test('should clear arr', () => {
            testTree.init([5, 2, 9, 3]);
            testTree.clear();
            expect(testTree.toArray()).toStrictEqual([]);
        })
    })
    describe('height', () => {
        test('should height size', () => {
            expect(testTree.height()).toBe(0)
        })
        test('should height size', () => {
            testTree.init([5, 2, 9, 3]);
            expect(testTree.height()).toBe(3);
        })
    })
    describe('insert', () => {
        test('should insert arr', () => {
            testTree.init([5, 2, 9, 3]);
            testTree.insert(7);
            expect(testTree.toArray()).toStrictEqual([2,3,5,7,9]);
        })
        test('should insert arr', () => {
            testTree.init([5]);
            testTree.insert(5);
            expect(testTree.toArray()).toStrictEqual([5,5]);
        })
    })
    describe('leaves', () => {
        test('should leaves size', () => {
            testTree.init([5, 2, 9, 3]);
            expect(testTree.leaves()).toBe(2);
        })
    })
    describe('maxNode', () => {
        test('should maxNode', () => {
            testTree.init([5, 2, 9, 3]);
            expect(testTree.maxNode()).toBe(9);
        })
        test('should maxNode === undefined', () => {
            expect(testTree.maxNode()).toBeUndefined();
        })
    })
    describe('minNode', () => {
        test('should minNode', () => {
            testTree.init([5, 2, 9, 3]);
            expect(testTree.minNode()).toBe(2);
        })
        test('should maxNode === undefined', () => {
            expect(testTree.minNode()).toBeUndefined();
        })
    })
    describe('nodes', () => {
        test('should nodes', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.nodes()).toBe(6);
        })
    })
    describe('print', () => {
        test('should print', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.print({node: 'test'}, (node)=> {return node})).toBeUndefined();
            expect(testTree.toArray()).toStrictEqual([2,3,5,6,9,12]);
        })
        test('should print 1', () => {
            testTree.init([1, 2, 3]);
            function detour(current) {
                if (current) {
                    detour(current.left)
                    detour(current.right)
                }
            }
            const node = {"left": null, "right": 1, "value": 2};
            expect(testTree.print(node, () => detour(node))).toBeUndefined();
        })
    })
    describe('remove', () => {
        test('should remove null', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.remove(null)).toBeUndefined();
        })
        test('should remove 2not in Node', () => {
            testTree.init([]);
            expect(testTree.remove(2)).toBe(null);
        })
        test('should remove', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.remove(12)).toBe(5);
        })
        test('should remove', () => {
            testTree.init([5]);
            expect(testTree.remove(1)).toBe(5);
        })
        test('should remove [2,3,4] current.left == null', () => {
            testTree.init([2,3,4]);
            expect(testTree.remove(3)).toBe(2);
        })
        test('should remove [2,3,4] current.left == null', () => {
            testTree.init([2,3,4]);
            expect(testTree.remove(2)).toStrictEqual(3);
        })
        test('should remove, current.left == null', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.remove(9)).toBe(5);
        })
        test('should remove', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.remove(5)).toBe(5);
        })
    })
    describe('reverse', () => {
        test('should reverse left', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            testTree.reverse();
            expect(testTree.toArray()).toStrictEqual([12,9, 6,5,3,2]);
        })
        test('should reverse right', () => {
            testTree.init([5, 2]);
            testTree.reverse();
            expect(testTree.toArray()).toStrictEqual([5,2]);
        })
        test('should reverse right', () => {
            testTree.reverse();
            expect(testTree.reverse()).toBeUndefined();
        })
    })
    describe('search', () => {
        test('should search right', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.search(12)).toBe(12)
        })
        test('should search left', () => {
            testTree.init([5, 2,4,6]);
            expect(testTree.search(2)).toBe(2);
        })
        test('should search undefined', () => {
            testTree.init([5, 2]);
            expect(testTree.search(12)).toBeUndefined();
        })
        test('should reverse undefined', () => {
            expect(testTree.search(1)).toBeUndefined();
        })
    })
    describe('size', () => {
        test('should size right', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.size(12)).toBe(6)
        })
    })
    describe('width', () => {
        test('should width', () => {
            testTree.init([5, 2, 9, 3, 6, 12]);
            expect(testTree.width()).toBe(3)
        })
        test('should width arr === null', () => {
            expect(testTree.width()).toBe(0);
        })
        test('should width one element in arr', () => {
            testTree.init([5]);
            expect(testTree.width()).toBe(1);
        })
    })
})

