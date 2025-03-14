"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyBuilder = void 0;
const Enemy_1 = require("./Enemy");
class EnemyBuilder {
    constructor() {
        this.name = null;
        this.height = null;
        this.eyesColor = null;
        this.mood = null;
        this.damage = null;
        this.evilDeeds = [];
        this.weapons = [];
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setHeight(height) {
        this.height = height;
        return this;
    }
    setEyesColor(color) {
        this.eyesColor = color;
        return this;
    }
    setMood(mood) {
        this.mood = mood;
        return this;
    }
    setDamage(damage) {
        this.damage = damage;
        return this;
    }
    addEvilDeed(deed) {
        this.evilDeeds.push(deed);
        return this;
    }
    addWeapon(weapon) {
        this.weapons.push(weapon);
        return this;
    }
    build() {
        const enemy = new Enemy_1.Enemy(this.name, this.height, this.eyesColor, this.mood, this.damage);
        console.log(`Enemy ${this.name} created with ${this.damage} damage power, ${this.evilDeeds.length} evil deeds, and ${this.weapons.length} weapons`);
        if (this.evilDeeds.length > 0) {
            console.log(`Evil deeds: ${this.evilDeeds.join(", ")}`);
        }
        if (this.weapons.length > 0) {
            console.log(`Weapons: ${this.weapons.join(", ")}`);
        }
        return enemy;
    }
}
exports.EnemyBuilder = EnemyBuilder;
