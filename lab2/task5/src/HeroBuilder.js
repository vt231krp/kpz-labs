"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroBuilder = void 0;
const Hero_1 = require("./Hero");
class HeroBuilder {
    constructor() {
        this.name = null;
        this.height = null;
        this.eyesColor = null;
        this.mood = null;
        this.superPower = null;
        this.inventory = [];
        this.goodDeeds = [];
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
    setSuperPower(power) {
        this.superPower = power;
        return this;
    }
    addInventoryItem(item) {
        this.inventory.push(item);
        return this;
    }
    addGoodDeed(deed) {
        this.goodDeeds.push(deed);
        return this;
    }
    build() {
        const hero = new Hero_1.Hero(this.name, this.height, this.eyesColor, this.mood, this.superPower);
        console.log(`Hero ${this.name} created with ${this.goodDeeds.length} good deeds and ${this.inventory.length} inventory items`);
        if (this.goodDeeds.length > 0) {
            console.log(`Good deeds: ${this.goodDeeds.join(", ")}`);
        }
        if (this.inventory.length > 0) {
            console.log(`Inventory: ${this.inventory.join(", ")}`);
        }
        return hero;
    }
}
exports.HeroBuilder = HeroBuilder;
