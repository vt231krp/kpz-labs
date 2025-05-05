"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemy = void 0;
const Person_1 = require("./Person");
class Enemy extends Person_1.Person {
    constructor(name, height, eyesColor, mood, damage) {
        super(name, height, eyesColor, mood);
        this.damage = damage;
    }
    attack(target) {
        console.log(`${this.name} attacks ${target.getName()} for ${this.damage} damage`);
    }
}
exports.Enemy = Enemy;
