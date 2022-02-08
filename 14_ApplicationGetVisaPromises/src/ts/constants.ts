import {User} from "./interface";

export const namePerson: string[] = ['Anton', 'Artem', 'Anna', 'Alex', 'Darina', 'Veronika', 'Maria', 'Natalia', 'Vladimir', 'Svetlana'];
export const balance: string[] = ['1000', '1500', '1700', '1900', '2001', '2100', '2200', '2300', '2400', '2500']; //2000 60%
export const age: string[] = ['15', '17', '18', '21', '24', '30', '35', '47', '55', '65'];//18-60 70%
export const documentVisa: string[][] = [
    ['password', 'photo'],
    ['password', 'insurance', 'photo'],
    ['password', 'insurance', 'photo'],
    ['password', 'insurance', 'photo'],
    ['password', 'insurance', 'photo'],
    ['password', 'insurance', 'photo'],
    ['password', 'insurance', 'photo'],
    ['password', 'insurance', 'photo'],
    ['password', 'insurance', 'photo'],
    ['password', 'insurance']
]; //80 %
export const levelEnglish: string[] = ['B1', 'B2', 'C1', 'A1', 'A2', 'A1', 'A2', 'A1', 'A2']//30%
export const canvasSize: { x: number, y: number }[] = [
    {x: 40, y: 50},
    {x: 120, y: 50},
    {x: 200, y: 50},
    {x: 280, y: 50},
    {x: 360, y: 50}
]

export const arrCandidate: User[] = [];