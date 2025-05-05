"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Virus = void 0;
class Virus {
    constructor(weight, age, name, type) {
        this.children = [];
        this.weight = weight;
        this.age = age;
        this.name = name;
        this.type = type;
    }
    addChild(child) {
        this.children.push(child);
    }
    getChildren() {
        return this.children;
    }
    clone() {
        const clonedVirus = new Virus(this.weight, this.age, `Clone of ${this.name}`, this.type);
        for (const child of this.children) {
            clonedVirus.addChild(child.clone());
        }
        return clonedVirus;
    }
    display(indent = "") {
        console.log(`${indent}Virus: ${this.name}`);
        console.log(`${indent}Type: ${this.type}`);
        console.log(`${indent}Age: ${this.age}`);
        console.log(`${indent}Weight: ${this.weight}`);
        if (this.children.length > 0) {
            console.log(`${indent}Children:`);
            for (const child of this.children) {
                child.display(`${indent}  `);
            }
        }
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getType() {
        return this.type;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
}
exports.Virus = Virus;
