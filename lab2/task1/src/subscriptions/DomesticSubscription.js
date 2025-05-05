"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomesticSubscription = void 0;
const Channel_1 = require("../models/Channel");
const Feature_1 = require("../models/Feature");
class DomesticSubscription {
    constructor() {
        this.monthlyFee = 9.99;
        this.minimumPeriod = 1;
        this.channels = this.initializeChannels();
        this.features = this.initializeFeatures();
    }
    initializeChannels() {
        return [
            new Channel_1.Channel("Local News", "Stay updated with local news."),
            new Channel_1.Channel("Entertainment", "Enjoy a variety of entertainment shows."),
            new Channel_1.Channel("Sports", "Catch up with your favorite sports events."),
        ];
    }
    initializeFeatures() {
        return [
            new Feature_1.Feature("HD Streaming", "Watch in high definition."),
            new Feature_1.Feature("Offline Viewing", "Download content to watch offline."),
        ];
    }
    getChannels() {
        return this.channels;
    }
    getFeatures() {
        return this.features;
    }
}
exports.DomesticSubscription = DomesticSubscription;
//# sourceMappingURL=DomesticSubscription.js.map