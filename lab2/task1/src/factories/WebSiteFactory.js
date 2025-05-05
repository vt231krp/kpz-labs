"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSiteFactory = void 0;
const DomesticSubscription_1 = require("../subscriptions/DomesticSubscription");
const EducationalSubscription_1 = require("../subscriptions/EducationalSubscription");
const PremiumSubscription_1 = require("../subscriptions/PremiumSubscription");
const SubscriptionTypes_1 = require("../types/SubscriptionTypes");
const Feature_1 = require("../models/Feature");
class WebSiteFactory {
    createSubscription(type) {
        let subscription;
        switch (type) {
            case SubscriptionTypes_1.SubscriptionType.Domestic:
                subscription = new DomesticSubscription_1.DomesticSubscription();
                break;
            case SubscriptionTypes_1.SubscriptionType.Educational:
                subscription = new EducationalSubscription_1.EducationalSubscription();
                // Website-exclusive educational discount
                subscription.monthlyFee *= 0.9; // 10% discount for educational plan
                break;
            case SubscriptionTypes_1.SubscriptionType.Premium:
                subscription = new PremiumSubscription_1.PremiumSubscription();
                subscription.features.push(new Feature_1.Feature("Multi-profile", "Create up to 5 different user profiles"));
                break;
            default:
                throw new Error("Invalid subscription type");
        }
        // Add website-specific features to all subscriptions
        subscription.features.push(new Feature_1.Feature("Web Dashboard", "Access to exclusive web analytics dashboard"));
        console.log("Subscription created through website portal");
        return subscription;
    }
}
exports.WebSiteFactory = WebSiteFactory;
//# sourceMappingURL=WebSiteFactory.js.map