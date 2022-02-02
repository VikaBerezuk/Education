//Даны две таблицы:
// ● Список улиц - Street (Id, Name)
// ● Cписок жильцов - Person (Id, FirstName, LastName, Age, Id_Street)
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "userdatabase",
    password: "root"
});

connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

// 1. Вывести общее число жителей
function getAllPerson() {
    const query = "SELECT COUNT(1) AS count FROM person";
    connection.query(query, (err,  res) => {
        if(err) {
            console.log(err);
        }
    });
}
//getAllPerson();

// 2. Вывести средний возраст жителей
function getAge() {
    const query = "SELECT AVG(Age) AS averageAge FROM person";
    connection.query(query, (err, res) => {
        if(err) {
            console.log(err);
        }
    })
}
//getAge();

// 3. Вывести отсортированный по алфавиту список фамилий без повторений
function getLastNameList() {
    const query = "SELECT DISTINCT LastName FROM person ORDER BY LastName";
    connection.query(query, (err, res) => {
        if(err) {
            console.log(err);
        }
    })
}
//getLastNameList()

// 4. Вывести список фамилий, с указанием количества повторений этих фамилий в общем списке
function getLastNameCounter() {
    const query = "SELECT LastName, COUNT(*) AS repeatCounter FROM person GROUP BY LastName"
    connection.query(query, (err, res) => {
        if(err) {
            console.log(err);
        }
    })
}
//getLastNameCounter();

//5. Вывести фамилии, которые содержат в середине букву «б»
function getFindInLastName() {
    const query = "SELECT LastName FROM person WHERE LastName LIKE '%б%'"
    connection.query(query, (err, res) => {
        if(err) {
            console.log(err);
        }
    })
}
//getFindInLastName()

// 6. Вывести список «бомжей»
function getNotHome() {
    const query = "SELECT * FROM person WHERE Id_Street is NULL";
    connection.query(query, (err, res) =>  {
        if(err) {
            console.log(err);
        }
    })
}
//getNotHome()

// 7. Вывести список несовершеннолетних, проживающих на проспекте Правды
function getYoungPeopleInStreet() {
    const query = "SELECT * FROM person WHERE Age < 18 AND  Id_Street = 7";
    connection.query(query, (err, res) =>  {
        if(err) {
            console.log(err);
        }
    })
}
//getYoungPeopleInStreet()

// 8. Вывести упорядоченный по алфавиту список всех улиц с указанием, сколько жильцов живёт на улице
function streetListCounter() {
    const query = "SELECT street.streetName, (SELECT COUNT(*) FROM person WHERE person.id_Street=street.streetId) AS people FROM street ORDER BY street.streetName";
    connection.query(query, (err, res) =>  {
        if(err) {
            console.log(err);
        }
    })
}
//streetListCounter();

// 9. Вывести список улиц, название которых состоит из 6-ти букв
function getStreetNameMoreSixLetters() {
    const query = "SELECT * FROM street WHERE CHAR_LENGTH(streetName) = 6"
    connection.query(query, (err, res) =>  {
        if(err) {
            console.log(err);
        }
    });
}
getStreetNameMoreSixLetters()

// 10. Вывести список улиц с количеством жильцов на них меньше 3
function getStreetsPeopleLessThree() {
    const query = "SELECT street.streetName, (SELECT COUNT(*) FROM person WHERE person.id_Street=street.streetId ) AS people FROM street HAVING people >= 3 ORDER BY street.streetName"
    connection.query(query, (err, res) =>  {
        if(err) {
            console.log(err);
        }
    });
}
//getStreetsPeopleLessThree();

module.exports = {
    getAllPerson, getLastNameList, getStreetNameMoreSixLetters, getStreetsPeopleLessThree, getFindInLastName,
    getNotHome, getAge, streetListCounter, getYoungPeopleInStreet, getLastNameCounter
}