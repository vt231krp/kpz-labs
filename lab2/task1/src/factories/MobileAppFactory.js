"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileAppFactory = void 0;
const DomesticSubscription_1 = require("../subscriptions/DomesticSubscription");
const EducationalSubscription_1 = require("../subscriptions/EducationalSubscription");
const PremiumSubscription_1 = require("../subscriptions/PremiumSubscription");
const SubscriptionTypes_1 = require("../types/SubscriptionTypes");
const Feature_1 = require("../models/Feature");
const Channel_1 = require("../models/Channel");
class MobileAppFactory {
    createSubscription(type) {
        let subscription;
        switch (type) {
            case SubscriptionTypes_1.SubscriptionType.Domestic:
                subscription = new DomesticSubscription_1.DomesticSubscription();
                // Mobile app promo for domestic plans
                subscription.monthlyFee *= 0.95; // 5% discount
                break;
            case SubscriptionTypes_1.SubscriptionType.Educational:
                subscription = new EducationalSubscription_1.EducationalSubscription();
                subscription.channels.push(new Channel_1.Channel("Mobile Learning", "Educational content optimized for mobile devices"));
                break;
            case SubscriptionTypes_1.SubscriptionType.Premium:
                subscription = new PremiumSubscription_1.PremiumSubscription();
                subscription.features.push(new Feature_1.Feature("Mobile HDR", "Enhanced HDR streaming on mobile devices"));
                break;
            default:
                throw new Error("Invalid subscription type");
        }
        // Add mobile-specific features to all subscriptions
        subscription.features.push(new Feature_1.Feature("Offline Downloads", "Download content for offline viewing on mobile"));
        subscription.minimumPeriod -= 1; // 1 month shorter minimum commitment on mobile
        console.log("Subscription created through mobile application");
        return subscription;
    }
}
exports.MobileAppFactory = MobileAppFactory;
//# sourceMappingURL=MobileAppFactory.js.map