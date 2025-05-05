"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerCallFactory = void 0;
const DomesticSubscription_1 = require("../subscriptions/DomesticSubscription");
const EducationalSubscription_1 = require("../subscriptions/EducationalSubscription");
const PremiumSubscription_1 = require("../subscriptions/PremiumSubscription");
const SubscriptionTypes_1 = require("../types/SubscriptionTypes");
const Feature_1 = require("../models/Feature");
const Channel_1 = require("../models/Channel");
class ManagerCallFactory {
    createSubscription(type) {
        let subscription;
        switch (type) {
            case SubscriptionTypes_1.SubscriptionType.Domestic:
                subscription = new DomesticSubscription_1.DomesticSubscription();
                subscription.minimumPeriod = 6; // Longer commitment but with benefits
                subscription.channels.push(new Channel_1.Channel("Bonus Channel", "Additional local channel included with manager assistance"));
                break;
            case SubscriptionTypes_1.SubscriptionType.Educational:
                subscription = new EducationalSubscription_1.EducationalSubscription();
                subscription.features.push(new Feature_1.Feature("Study Materials", "Printed educational materials sent to your address"));
                break;
            case SubscriptionTypes_1.SubscriptionType.Premium:
                subscription = new PremiumSubscription_1.PremiumSubscription();
                // Manager-assisted setup but higher monthly fee
                subscription.monthlyFee *= 1.05; // 5% premium for white glove service
                break;
            default:
                throw new Error("Invalid subscription type");
        }
        // Add manager-specific features to all subscriptions
        subscription.features.push(new Feature_1.Feature("Dedicated Support", "Direct phone line to customer support"));
        subscription.features.push(new Feature_1.Feature("Installation Assistance", "Free professional installation service"));
        console.log("Subscription created through manager call with personalized service");
        return subscription;
    }
}
exports.ManagerCallFactory = ManagerCallFactory;
//# sourceMappingURL=ManagerCallFactory.js.map