import { ISubscription } from "./ISubscription";
import { Channel } from "../models/Channel";
import { Feature } from "../models/Feature";

export class DomesticSubscription implements ISubscription {
  monthlyFee: number;
  minimumPeriod: number;
  channels: Channel[];
  features: Feature[];

  constructor() {
    this.monthlyFee = 9.99;
    this.minimumPeriod = 1;
    this.channels = this.initializeChannels();
    this.features = this.initializeFeatures();
  }

  private initializeChannels(): Channel[] {
    return [
      new Channel("Local News", "Stay updated with local news."),
      new Channel("Entertainment", "Enjoy a variety of entertainment shows."),
      new Channel("Sports", "Catch up with your favorite sports events."),
    ];
  }

  private initializeFeatures(): Feature[] {
    return [
      new Feature("HD Streaming", "Watch in high definition."),
      new Feature("Offline Viewing", "Download content to watch offline."),
    ];
  }

  getChannels(): Channel[] {
    return this.channels;
  }

  getFeatures(): Feature[] {
    return this.features;
  }
}
