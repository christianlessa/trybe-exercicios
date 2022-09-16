"use strict";
var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Green"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor || (EyeColor = {}));
class Person {
    constructor(name, birthDate, eyeColor, carro) {
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
        this.carro = carro;
    }
    speak() {
        console.log(`${this.name} esta falando.`);
    }
    eat() {
        console.log(`${this.name} esta comendo.`);
    }
    walk() {
        console.log(`${this.name} esta andando.`);
    }
}
;
const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown, "Argo Drive");
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black, "Argo Drive");
// console.log(person1);
person1.eat();
