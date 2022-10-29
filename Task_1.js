
// Task 1. (Module E4).

/*
Write a function that takes an object as an argument and outputs to the console all the keys
and values of its own properties only. This function should not return a value.

Напишите функцию, которая принимает объект в качестве аргумента и выводит на консоль все ключи
и значения только своих собственных свойств. Эта функция не должна возвращать значение
*/

const student = {
    firstname: "Anton",
    ownCity: "Moscow",
    age: 35,
    course: "FPW"
};

function showOwnProperties(obj) {
  let result = "";
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result += key + ": " + obj[key] + "\n";
    }
  }
  console.log(result);
}

showOwnProperties(student);

// firstname: Anton
// ownCity: Moscow
// age: 35
// course: FPW