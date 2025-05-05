"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationalSubscription = void 0;
const Channel_1 = require("../models/Channel");
const Feature_1 = require("../models/Feature");
class EducationalSubscription {
    constructor() {
        this.monthlyFee = 15.99;
        this.minimumPeriod = 6;
        this.channels = [
            new Channel_1.Channel("Educational Channel 1", "Description of Educational Channel 1"),
            new Channel_1.Channel("Educational Channel 2", "Description of Educational Channel 2"),
        ];
        this.features = [
            new Feature_1.Feature("Access to all educational content", "Unlimited access to all educational videos and materials"),
            new Feature_1.Feature("Offline viewing", "Download videos for offline viewing"),
        ];
    }
    getChannels() {
        return this.channels;
    }
    getFeatures() {
        return this.features;
    }
}
exports.EducationalSubscription = EducationalSubscription;
//# sourceMappingURL=EducationalSubscription.js.map