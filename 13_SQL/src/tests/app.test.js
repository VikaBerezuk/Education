const {getAllPerson, getAge, getNotHome, getLastNameCounter, getFindInLastName, getLastNameList,
    getYoungPeopleInStreet, streetListCounter, getStreetNameMoreSixLetters, getStreetsPeopleLessThree
} = require('../app');

describe('getAllPerson', () => {
    test('getAllPerson', () => {
        expect(getAllPerson).toBeDefined();
    })
    test('getAllPerson', () => {
        expect(getAllPerson()).toBeUndefined();
    })
})
//getAge
describe('getAge', () => {
    test('getAge', () => {
        expect(getAge).toBeDefined();
    })
    test('getAge', () => {
        expect(getAge()).toBeUndefined();
    })
})
//getLastNameList
describe('getLastNameList', () => {
    test('getLastNameList', () => {
        expect(getLastNameList).toBeDefined();
    })
    test('getLastNameList', () => {
        expect(getLastNameList()).toBeUndefined();
    })
})
//getLastNameCounter
describe('getLastNameCounter', () => {
    test('getLastNameCounter', () => {
        expect(getLastNameCounter).toBeDefined();
    })
    test('getNotHome', () => {
        expect(getLastNameCounter()).toBeUndefined();
    })
})
//getFindInLastName
describe('getFindInLastName', () => {
    test('getFindInLastName', () => {
        expect(getFindInLastName).toBeDefined();
    })
    test('getNotHome', () => {
        expect(getFindInLastName()).toBeUndefined();
    })
})
//getNotHome
describe('getNotHome', () => {
    test('getNotHome', () => {
        expect(getNotHome).toBeDefined();
    })
    test('getNotHome', () => {
        expect(getNotHome()).toBeUndefined();
    })
})
//getYoungPeopleInStreet
describe('getYoungPeopleInStreet', () => {
    test('getYoungPeopleInStreet', () => {
        expect(getYoungPeopleInStreet).toBeDefined();
    })
    test('getNotHome', () => {
        expect(getYoungPeopleInStreet()).toBeUndefined();
    })
})
//streetListCounter
describe('streetListCounter', () => {
    test('streetListCounter', () => {
        expect(streetListCounter).toBeDefined();
    })
    test('streetListCounter', () => {
        expect(streetListCounter()).toBeUndefined();
    })
})
//getStreetNameMoreSixLetters
describe('getStreetNameMoreSixLetters', () => {
    test('getStreetNameMoreSixLetters', () => {
        expect(getStreetNameMoreSixLetters).toBeDefined();
    })
    test('getStreetNameMoreSixLetters', () => {
        expect(getStreetNameMoreSixLetters()).toBeUndefined();
    })
})
//getStreetsPeopleLessThree
describe('getStreetsPeopleLessThree', () => {
    test('getStreetsPeopleLessThree', () => {
        expect(getStreetsPeopleLessThree).toBeDefined();
    })
    test('getStreetsPeopleLessThree', () => {
        expect(getStreetsPeopleLessThree()).toBeUndefined();
    })
})