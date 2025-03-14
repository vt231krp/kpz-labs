"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSiteFactory_1 = require("./factories/WebSiteFactory");
const MobileAppFactory_1 = require("./factories/MobileAppFactory");
const ManagerCallFactory_1 = require("./factories/ManagerCallFactory");
const SubscriptionTypes_1 = require("./types/SubscriptionTypes");
function main() {
    const webSiteFactory = new WebSiteFactory_1.WebSiteFactory();
    const mobileAppFactory = new MobileAppFactory_1.MobileAppFactory();
    const managerCallFactory = new ManagerCallFactory_1.ManagerCallFactory();
    const domesticSubscription = webSiteFactory.createSubscription(SubscriptionTypes_1.SubscriptionType.Domestic);
    const educationalSubscription = mobileAppFactory.createSubscription(SubscriptionTypes_1.SubscriptionType.Educational);
    const premiumSubscription = managerCallFactory.createSubscription(SubscriptionTypes_1.SubscriptionType.Premium);
    console.log("Domestic Subscription:", domesticSubscription);
    console.log("Educational Subscription:", educationalSubscription);
    console.log("Premium Subscription:", premiumSubscription);
}
main();
//# sourceMappingURL=index.js.map