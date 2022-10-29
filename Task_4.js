// Задание № 4 (Модуль E4).

/*
Implement the following console application like the example that dealt with the video. Implement it on prototypes.
Define the hierarchy of electrical appliances. Plug some into an outlet. Calculate the power consumption.
There should be at least two such devices (for example, a desk lamp and a computer).
When choosing a device, think about what properties it has.

Plan:
Define the parent function with methods that turn on/off the appliance from the outlet.
Create a delegating link [[Prototype]] for two specific devices.
Each of the devices should have its own properties and, preferably, methods other than the parent methods.
Create instances of each device.
Output to the console and see the results of the work.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.

План:
Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создать экземпляры каждого прибора.
Вывести в консоль и посмотреть результаты работы.
*/

// 1. функция-конструктора типового электроприбора, замена manufacturer на equipment_manufacturer
function ElectricalAppliance(name, equipmentManufacturer) {
    this.name = name,
    this.equipmentManufacturer = equipmentManufacturer;
}

// 2. добавляение свзяи prototype для электроприборов для увеличения быстродействия. Вывод в консоль мощности прибора
ElectricalAppliance.prototype.getPowerConsumption = function (potentialDifference, currentStrength) {
        console.log(`Power Consumption of the ${this.name} is ${potentialDifference * currentStrength} W.`) // тут return как в классе не пройдет.
}

// 3. добавление связи prototype - вывод в консоль состояния включения прибора в разетку.
ElectricalAppliance.prototype.getTurn = function (on_or_off) {
    console.log(`The ${this.name} is switched ${on_or_off}.`)
}

// 4. функция-конструктор для прибора Лампа
function Lamp(name, equipmentManufacturer, typeOfLamp) {
    this.name = name,
    this.equipmentManufacturer = equipmentManufacturer,
    this.typeOfLamp = typeOfLamp
}
// 5. добавление связи prototype для Ламп со свойствами для типового электроприбора
Lamp.prototype = new ElectricalAppliance()
/* 6. добавление связи prototype для Ламп с prototype типового электроприбора
(Свзяь прототипов работает со всей цепочкой прототипов, поэтому эта запись лишняя)

Lamp.prototype.getPowerConsumption = function (power) {
    console.log(`Electricity consumption of the ${this.name} is ${power} W.`)
}
*/

// 7. функция конструктор для прбора Компьютер
function PC(name, equipmentManufacturer, price) {
    this.name = name,
    this.equipmentManufacturer = equipmentManufacturer,
    this.price = price
}

// 8. добавление связи prototype для Компьютера со свойствами для типового электроприбора
PC.prototype = new ElectricalAppliance()

/* 9. добавление связи prototype для Компьютера с prototype типового электроприбора
(Свзяь прототипов работает со всей цепочкой прототипов, поэтому эта запись лишняя)
PC.prototype.getTurn = function (on_or_off) {
    console.log(`This ${this.name} is switched ${on_or_off}.`)
}
*/

// 10. создали пылесос как экземпляр типового электроприбора
const vacuum_cleaner = new ElectricalAppliance("vacuum_cleaner", "Thomas");
// 11. создали люстру как экземпляр от ламп
const chandelier = new Lamp("chandelier", "IKEA", "suspended");
// 12. создали ноутбук как экземпляр от компьютеров
const laptop = new PC("laptop", "HP", 1700);

vacuum_cleaner.getPowerConsumption(30, 10);  // "Power Consumption of the vacuum_cleaner is 300 W."
chandelier.getPowerConsumption(30, 5);  // "Power Consumption of the chandelier is 150 W." (любопытно, что
// при глубоком прототипировании не выводит название полей, а также не передается как поле this., т.е. берет прототипы
// объекта, но не сам конструктор объекта, т.е. конструктор использует только свой)
laptop.getPowerConsumption(19.5, 12);  // "Power Consumption of the laptop is 234 W."

chandelier.getTurn("on");  // "The chandelier is switched on."
laptop.getTurn("off");  // "This computer is switched off."


