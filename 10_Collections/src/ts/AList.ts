import {IList} from "./types";

//AList - динамический массив, хранит данные типа Number
export class AList implements IList {
    private array: number[]
    private size: number;

    constructor() {
        this.array = [];
        this.size = 0;
    }

    add(item: number): void {
        this.array[this.size] = item;
        this.size++;
    }

    clear(): void {
        this.array.length = 0;
        this.size = 0;
    }

    contains(item): boolean {
        for (let i = 0; i < this.size; i++) {
            const element = this.array[i];
            if (element === item) {
                return true;
            }
        }
        return false;
    }

    get(index: number): number {
        return this.array[index];
    }

    getSize(): number {
        return this.size;
    }

    halfReverse(): number[] {
        const firstPartLen = Math.floor(this.array.length / 2);
        const secondPartLen = this.array.length - firstPartLen;
        const newArr = [];
        for (let i = 0; i < secondPartLen; i++) {
            newArr[i] = this.array[i + firstPartLen];
        }
        for (let i = 0; i < firstPartLen; i++) {
            newArr[i + secondPartLen] = this.array[i];
        }
        return newArr;
    }

    maxIndex(): number {
        let max;
        for (let i = 0; i < this.size; i++) {
            if (i === 0) {
                max = i;
            }
            if (max < this.array[i]) {
                max = i;
            }
        }
        return max;
    }

    maxValue(): number {
        let max;
        for (let i = 0; i < this.size; i++) {
            if (i === 0) {
                max = this.array[i];
            }
            if (max < this.array[i]) {
                max = this.array[i];
            }
        }
        return max;
    }

    minIndex(): number {
        let min;
        for (let i = 0; i < this.size; i++) {
            if (i === 0) {
                min = i;
            }
            if (min > this.array[i]) {
                min = i;
            }
        }
        return min;
    }

    minValue(): number {
        let min;
        for (let i = 0; i < this.size; i++) {
            if (i === 0) {
                min = this.array[i];
            }
            if (min > this.array[i]) {
                min = i;
            }
        }
        return min;
    }

    print(): number[] {
        for (let i = 0; i < this.size; i++) {
            console.log(this.array[i]);
        }
        return this.array
    }

    remove(item): number {
        const oldArray = this.array;
        this.array = [];
        this.size = 0;
        let returnValue;

        for (let i = 0; i < oldArray.length; i++) {
            if (oldArray[i] !== item) {
                this.add(oldArray[i]);
            } else {
                returnValue = oldArray[i];
            }
        }
        return returnValue;
    }

    removeAll(items: number[]): number[] {
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < items.length; j++) {
                if (this.array[i] === items[j]) {
                    this.array[i] = undefined;
                    this.size--;
                }
            }
        }
        return this.array;
    }

    retainAll(items: number[]): number[] {
        for (let i = 0; i < this.array.length; i++) {
            let  content = false;
            for (let j = 0; j < items.length; j++) {
                if(this.array[i] === items[j]) {
                   content = true;
                   break;
                }
            }
            if (!content) {
                this.array[i] = undefined;
                this.size--;
            }
        }
        return this.array;
    }

    reverse(): number[] {
        let newArray = [];
        for (let i = 0; i < this.array.length; i++){
            newArray[i] = this.array[this.array.length - i - 1]
        }
        this.array = newArray;
        return this.array;
    }

    set(item, index: number): number[] {
        const oldArray = this.array;
        this.array = [];
        this.size = 0;

        if(index < 0) {
            console.log(false);
        }
        for (let i = 0; i < oldArray.length; i++) {
            const element = oldArray[i];
            if (i === index) {
                this.add(item);
            } else {
                this.add(element);
            }
        }
        return this.array;
    }

    toString(): string {
        let result = '';
        for (let i = 0; i < this.size; i++) {
            result += this.array;
        }
        return result;
    }

    sort(): number[] {
        let arr: number[] = doSort(this.array)
        function doSort (arr): number[] {

            if (arr.length <= 1) {
                return arr
            }

            let pivot = arr[0];
            let left = [];
            let right = [];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < pivot) {
                    left[left.length] = arr[i]
                } else {
                    right[right.length] = arr[i]
                }
            }
            return doSort(left).concat(pivot, doSort(right));
        }
        this.array = arr;
        return this.array;
    }

    toArray(): number[] {
        return this.array;
    }
}
