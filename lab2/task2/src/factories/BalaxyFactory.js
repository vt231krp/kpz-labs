"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalaxyFactory = void 0;
const BalaxyLaptop_1 = require("../products/balaxy/BalaxyLaptop");
const BalaxyNetbook_1 = require("../products/balaxy/BalaxyNetbook");
const BalaxyEBook_1 = require("../products/balaxy/BalaxyEBook");
const BalaxySmartphone_1 = require("../products/balaxy/BalaxySmartphone");
class BalaxyFactory {
    createLaptop() {
        return new BalaxyLaptop_1.BalaxyLaptop();
    }
    createNetbook() {
        return new BalaxyNetbook_1.BalaxyNetbook();
    }
    createEBook() {
        return new BalaxyEBook_1.BalaxyEBook();
    }
    createSmartphone() {
        return new BalaxySmartphone_1.BalaxySmartphone();
    }
}
exports.BalaxyFactory = BalaxyFactory;
