import {LList} from "../LList"

describe('tests for LList', () => {
    test('test for method contains', () => {
        const testLList = new LList([5,10,15,20])
        expect(testLList.contains(10)).toBeTruthy()
    })
    test('test for method contains', () => {
        const testLList = new LList([5,10,15,20])
        expect(testLList.contains(11)).toBeFalsy()
    })
    test('tests for method get (should return result)', () => {
        const testLList = new LList([5,10,15,20])
        expect(testLList.get(2)).toEqual(15)
    })
    test('tests for method getSize (should return result)', () => {
        const testLList = new LList([5,10,15,20])
        expect(testLList.getSize()).toEqual(4)
    })
    test('tests for method print (should be undefined)', () => {
        const testLList = new LList([5,10,15,20])
        expect(testLList.print()).toBeUndefined()
    })
    test('tests for method minIndex (should return result)', () => {
        const testLList = new LList([5,10,15,20])
        expect(testLList.minIndex()).toEqual(0)
    })
    test('tests for method maxIndex (should return result)', () => {
        const testLList = new LList([5,10,15,20])
        expect(testLList.maxIndex()).toEqual(3)
    })
    test('tests for method maxValue (should return result)', () => {
        const testLList = new LList([5,10,15,20])
        expect(testLList.maxValue()).toEqual(20)
    })
    test('tests for method minValue (should return result)', () => {
        const testLList = new LList([5,10,15,20])
        expect(testLList.minValue()).toEqual(5)
    })
    test('tests for method retainAll (should return result)', () => {
        const testLList = new LList([1,2,3,4,5])
        expect((
            () => {
                testLList.retainAll([1,2])
                return testLList.toArray()
            }
        )()).toEqual([1,2])
    })
    test('tests for method reverse (should return result)', () => {
        const testLList = new LList([1,2,3,4,5])
        expect((
            () => {
                testLList.reverse()
                return testLList.toArray()
            }
        )()).toEqual([5,4,3,2,1])
    })
    test('tests for method halfReverse (should return result)', () => {
        const testLList = new LList([1,2,3,4,5])
        expect((() => {
            testLList.halfReverse()
            return testLList.toArray()
        })()).toEqual([3,4,5,1,2])
    })
    test('tests for method toArray (should return result)', () => {
        const testLList = new LList([5,10,15,20])
        expect(testLList.toArray()).toEqual([5,10,15,20])
    })
    test('tests for method toString (should return result)', () => {
        const testLList = new LList([1,2,3])
        expect(testLList.toString()).toEqual('123')
    })
    test('tests for method sort (should return result)', () => {
        const testLList = new LList([22,11,5,1,32])
        expect((() => {
            testLList.sort()
            return testLList.toArray()
        })()).toEqual([1,5,11,22,32])
    })
    test('tests for method set (should return result)', () => {
        const testLList = new LList([22,11,5,1,32])
        expect((() => {
            testLList.set(4,0)
            return testLList.toArray()
        })()).toEqual([4,11,5,1,32])
    })
    test('tests for method set2 (should return result)', () => {
        const testLList = new LList([22,11,5,1,32])
        expect((() => {
            testLList.set(5,-1)
            return testLList.toArray()
        })()).toEqual([22,11,5,1,32])
    })
    test('tests for method removeAll (should return result)', () => {
        const testLList = new LList([22,11,5,1,32])
        expect((
            () => {
                testLList.removeAll([22,11])
                return testLList.toArray()
            }
        )()).toEqual([5,1,32])
    })
    test('tests for method removeAll (should return result2)', () => {
        const testLList = new LList([1,2])
        expect((
            () => {
                testLList.removeAll([1,2,3,4,5])
                return testLList.toArray()
            }
        )()).toEqual([])
    })
    test('tests for method removeAll (should return result3)', () => {
        const testLList = new LList([1,2])
        expect((
            () => {
                testLList.removeAll([2,3,4,5])
                return testLList.toArray()
            }
        )()).toEqual([1])
    })
    test('tests for method remove (should return result)', () => {
        const testLList = new LList([1,2,3,10])
        expect(testLList.remove(10)).toEqual(10)
    })
    test('tests for method clear (should return result)', () => {
        const testLList = new LList([1,2,3])
        expect((() => {
            testLList.clear()
            return testLList.toArray()
        })()).toEqual([])
    })
    test('revers', () => {
        const testLList = new LList([])
        expect(testLList.reverse()).toBeUndefined();
    })
    test('halfReverse', () => {
        const testLList = new LList([])
        expect(testLList.halfReverse()).toBeUndefined();
    })
    test('get', () => {
        const testLList = new LList([1])
        expect(testLList.get(-5)).toBe(-1);
    })
})
