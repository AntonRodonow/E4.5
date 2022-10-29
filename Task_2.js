
// Task 2. (Module E4).

/*
Write a function that takes a string and an object as arguments,
and then checks whether the passed object has a property with the given name.
The function must return true or false.

Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/

const student = {
    firstname: "Anton",
    ownCity: "Moscow",
    age: 35,
    course: "FPW"
};

function showProperties(obj, string) {
    return (string in obj);
}

/*
console.log(showProperties(student, "name"));  // false
console.log(showProperties(student, "Anton"));  // false
console.log(showProperties(student, "firstname"));  // true
*/

