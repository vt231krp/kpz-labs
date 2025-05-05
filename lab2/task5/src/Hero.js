"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const Person_1 = require("./Person");
class Hero extends Person_1.Person {
    constructor(name, height, eyesColor, mood, superPower) {
        super(name, height, eyesColor, mood);
        this.superPower = superPower;
    }
    getSuperPower() {
        return this.superPower;
    }
}
exports.Hero = Hero;
