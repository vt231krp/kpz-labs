import { ISubscription } from "./ISubscription";
import { Channel } from "../models/Channel";
import { Feature } from "../models/Feature";

export class PremiumSubscription implements ISubscription {
  monthlyFee: number;
  minimumPeriod: number;
  channels: Channel[];
  features: Feature[];

  constructor() {
    this.monthlyFee = 29.99;
    this.minimumPeriod = 12;
    this.channels = [
      new Channel("Premium Channel 1", "Description of Premium Channel 1"),
      new Channel("Premium Channel 2", "Description of Premium Channel 2"),
      new Channel("Premium Channel 3", "Description of Premium Channel 3"),
    ];
    this.features = [
      new Feature(
        "Ad-Free Experience",
        "Enjoy your content without interruptions."
      ),
      new Feature(
        "Offline Viewing",
        "Download content to watch later without an internet connection."
      ),
      new Feature(
        "Exclusive Content",
        "Access to premium-only shows and movies."
      ),
    ];
  }
  getChannels(): Channel[] {
    return this.channels;
  }

  getFeatures(): Feature[] {
    return this.features;
  }
}
