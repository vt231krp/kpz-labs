import { ISubscription } from "./ISubscription";
import { Channel } from "../models/Channel";
import { Feature } from "../models/Feature";

export class EducationalSubscription implements ISubscription {
  monthlyFee: number;
  minimumPeriod: number;
  channels: Channel[];
  features: Feature[];

  constructor() {
    this.monthlyFee = 15.99;
    this.minimumPeriod = 6;
    this.channels = [
      new Channel(
        "Educational Channel 1",
        "Description of Educational Channel 1"
      ),
      new Channel(
        "Educational Channel 2",
        "Description of Educational Channel 2"
      ),
    ];
    this.features = [
      new Feature(
        "Access to all educational content",
        "Unlimited access to all educational videos and materials"
      ),
      new Feature("Offline viewing", "Download videos for offline viewing"),
    ];
  }

  getChannels(): Channel[] {
    return this.channels;
  }

  getFeatures(): Feature[] {
    return this.features;
  }
}
