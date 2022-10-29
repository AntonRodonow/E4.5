
// Task 3. (Module E4).

/*
Write a function that creates an empty object, but without a prototype.
(This way of creating an object has its advantages, for example, you can be sure
that in such an object there will be only those properties that we put there.
You can safely iterate on such an object.)

Написать функцию, которая создает пустой объект, но без прототипа.
(Такой способ создания объекта имеет свои преимущества, например, можно быть уверенным,
что в таком объекте будут только те свойства, которые мы туда положим.
Можно смело итерироваться по такому объекту.)
*/

// пустой объект, у такого объекта прототипом является Object, поэтому у него уже есть какие-то свойства и методы:
const obj = new Object(); // or const obj = {} or const obj = Object.create(Object.prototype);

// Пустой объект без прототипа:
const emptyObj = Object.create(null)
