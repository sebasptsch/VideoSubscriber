import { ClientEvents } from "discord.js";

export default class Event {
  public once: boolean;
  public event: keyof ClientEvents;
  public execute: (...args: any) => Promise<void>;

  constructor(event: keyof ClientEvents) {
    this.event = event;
  }

  setOnce(once) {
    this.once = once;
    return this;
  }

  setResponse(response: (...args: any) => Promise<void>) {
    this.execute = response;
    return this;
  }
}
