"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IProneFactory = void 0;
const IProneLaptop_1 = require("../products/iprone/IProneLaptop");
const IProneNetbook_1 = require("../products/iprone/IProneNetbook");
const IProneEBook_1 = require("../products/iprone/IProneEBook");
const IProneSmartphone_1 = require("../products/iprone/IProneSmartphone");
class IProneFactory {
    createLaptop() {
        return new IProneLaptop_1.IProneLaptop();
    }
    createNetbook() {
        return new IProneNetbook_1.IProneNetbook();
    }
    createEBook() {
        return new IProneEBook_1.IProneEBook();
    }
    createSmartphone() {
        return new IProneSmartphone_1.IProneSmartphone();
    }
}
exports.IProneFactory = IProneFactory;
