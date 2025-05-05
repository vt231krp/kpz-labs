"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KiaomiFactory = void 0;
const KiaomiLaptop_1 = require("../products/kiaomi/KiaomiLaptop");
const KiaomiNetbook_1 = require("../products/kiaomi/KiaomiNetbook");
const KiaomiEBook_1 = require("../products/kiaomi/KiaomiEBook");
const KiaomiSmartphone_1 = require("../products/kiaomi/KiaomiSmartphone");
class KiaomiFactory {
    createLaptop() {
        return new KiaomiLaptop_1.KiaomiLaptop();
    }
    createNetbook() {
        return new KiaomiNetbook_1.KiaomiNetbook();
    }
    createEBook() {
        return new KiaomiEBook_1.KiaomiEBook();
    }
    createSmartphone() {
        return new KiaomiSmartphone_1.KiaomiSmartphone();
    }
}
exports.KiaomiFactory = KiaomiFactory;
