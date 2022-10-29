// Задание № 5 (Модуль E4).

/*
Rewrite a console application from a large unit into classes.

Переписать консольное приложение из предыдущего юнита на классы.
*/

// 1. Класс типового электроприбора с методом вывода основных характеристик прибора.
class ElectricalAppliance {
    constructor(name, equipment_manufacturer, potentialDifference, currentStrength) {
        this.name = name;
        this.equipment_manufacturer = equipment_manufacturer;
        this.potentialDifference = potentialDifference;
        this.currentStrength = currentStrength
    }

    getInfo() {
        return `The ${this.name} is manufactured by ${this.equipment_manufacturer}.`
    }

    getPowerConsumption = function () {
        return `Power Consumption of the ${this.name} is ${this.potentialDifference * this.currentStrength} W.`
    }

    getTurn = function (on_or_off) {
        return `The ${this.name} is switched ${on_or_off}.`
    }
}


// 2. Класс для прибора Лампа.
class Lamp extends ElectricalAppliance {
    constructor(name, equipment_manufacturer, potentialDifference, currentStrength) {
        super(name); // проходит только с именем, с остальными полями super не работает как надо. Более того для name эта запись с super обязательна!
        this.equipment_manufacturer = equipment_manufacturer;
        this.potentialDifference = potentialDifference;
        this.currentStrength = currentStrength
    }
}


// 3. Класс для прибора Компьютер.
class PC extends ElectricalAppliance {
    constructor(name, equipment_manufacturer, display, potentialDifference, currentStrength) {
        super(name);
        this.equipment_manufacturer = equipment_manufacturer;
        this.display = display;
        this.potentialDifference = potentialDifference;
        this.currentStrength = currentStrength
    }

    getInfo() {
        return `The ${this.name} is manufactured by ${this.equipment_manufacturer}. Display is ${this.display}'.`
    }
}


const vacuum_cleaner = new ElectricalAppliance("vacuum_cleaner", "Thomas", 30, 10);

console.log(vacuum_cleaner.getInfo());  // "The vacuum_cleaner is manufactured by Thomas."
console.log(vacuum_cleaner.getPowerConsumption());  // "Power Consumption of the vacuum_cleaner is 300 W."
console.log(vacuum_cleaner.getTurn("on"));  // "The vacuum_cleaner is switched on."



const chandelier = new Lamp("chandelier", "IKEA", 30, 5);

console.log(chandelier.getInfo());  // "The chandelier is manufactured by IKEA."
console.log(chandelier.getPowerConsumption());  // "Power consumption of the chandelier is 150 W."
console.log(chandelier.getTurn("off"));  // "The chandelier is switched off."


const laptop = new PC("laptop", "HP", 17, 19.5, 12);

console.log(laptop.getInfo());  // "The laptop is manufactured by HP. Display is 17'." В приоритете собственные методы вместо родительских.
console.log(laptop.getPowerConsumption());  // "Power Consumption of the laptop is 234 W."
console.log(laptop.getTurn("on"));  // "The laptop is switched on."

