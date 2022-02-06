import {AList} from "./../AList";

describe("AList", () => {
    const testAList = new AList;
    testAList.add(7);
    testAList.add(1);
    testAList.add(99);

    test('test', () => {
        expect(true).toBe(true);
    })
    test('add element to array', () => {
        expect(testAList.add(1)).toBeUndefined();
    })
    test('contains array', () => {
        expect(testAList.contains(7)).toEqual(true)
    })
    test('contains array', () => {
        expect(testAList.contains(22)).toEqual(false)
    })
    test('get array', () => {
        expect(testAList.get(2)).toEqual(99);
    })
    test('get array', () => {
        expect(testAList.get(55)).toEqual(undefined);
    })
    test('get size array', () => {
        expect(testAList.getSize()).toEqual(4)
    })

    test('max index', () => {
        expect(testAList.maxIndex()).toEqual(2)
    })
    test('max value', () => {
        expect(testAList.maxValue()).toEqual(99)
    })
    test('min index', () => {
        expect(testAList.minIndex()).toEqual(0)
    })
    test('min value', () => {
        expect(testAList.minValue()).toEqual(1)
    })
    test('print', () => {
        expect(testAList.print()).toStrictEqual([7, 1, 99, 1]);
    })
    test('reverse', () => {
        expect(testAList.reverse()).toStrictEqual([1, 99, 1, 7]);
    })
    test('to Array', () => {
        expect(testAList.toArray()).toEqual([1,99,1,7]);
    })
    test('half Reverse', () => {
        expect(testAList.halfReverse()).toEqual([1, 7, 1, 99 ]);
    })
    test('set', () => {
        expect(testAList.set(55, 1)).toEqual([1,55,1,7])
    })
    test('set', () => {
        expect(testAList.set(55, 5)).toEqual([1,55,1,7])
    })
    test('set', () => {
        expect(testAList.set(55, -1)).toEqual([1,55,1,7])
    })
    test('remove All', () => {
        expect(testAList.removeAll([1])).toStrictEqual( [undefined, 55, undefined, 7]);
    })
    test('retainAll', () => {
        expect(testAList.retainAll([7])).toStrictEqual([undefined, undefined, undefined, 7]);
    })
    test('remove', () => {
        expect(testAList.remove([2])).toStrictEqual(undefined);
    })
    test('removeAll', () => {
        expect(testAList.removeAll([2])).toStrictEqual([undefined, undefined, undefined, 7]);
    })
    test('toString', () => {
        expect(testAList.toString()).toStrictEqual( ",,,7,,,7,,,7,,,7");
    })
    test('sort', () => {
        testAList.add(5);
        testAList.add(4);
        testAList.add(3);
        expect(testAList.sort()).toStrictEqual( [undefined,undefined, undefined,3,4,5,7]);
    })
    test('clear array', () => {
        expect(testAList.clear()).toBeUndefined();
    })
})