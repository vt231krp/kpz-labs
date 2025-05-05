"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, height, eyesColor, mood) {
        this.name = name;
        this.height = height;
        this.eyesColor = eyesColor;
        this.mood = mood;
    }
    getName() {
        return this.name;
    }
    getHeight() {
        return this.height;
    }
    getEyesColor() {
        return this.eyesColor;
    }
    getMood() {
        return this.mood;
    }
}
exports.Person = Person;
