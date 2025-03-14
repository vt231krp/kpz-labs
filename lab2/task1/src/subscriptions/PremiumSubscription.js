"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumSubscription = void 0;
const Channel_1 = require("../models/Channel");
const Feature_1 = require("../models/Feature");
class PremiumSubscription {
    constructor() {
        this.monthlyFee = 29.99;
        this.minimumPeriod = 12;
        this.channels = [
            new Channel_1.Channel("Premium Channel 1", "Description of Premium Channel 1"),
            new Channel_1.Channel("Premium Channel 2", "Description of Premium Channel 2"),
            new Channel_1.Channel("Premium Channel 3", "Description of Premium Channel 3"),
        ];
        this.features = [
            new Feature_1.Feature("Ad-Free Experience", "Enjoy your content without interruptions."),
            new Feature_1.Feature("Offline Viewing", "Download content to watch later without an internet connection."),
            new Feature_1.Feature("Exclusive Content", "Access to premium-only shows and movies."),
        ];
    }
    getChannels() {
        return this.channels;
    }
    getFeatures() {
        return this.features;
    }
}
exports.PremiumSubscription = PremiumSubscription;
//# sourceMappingURL=PremiumSubscription.js.map