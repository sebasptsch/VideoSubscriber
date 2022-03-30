import { Client, Intents } from "discord.js";
import dotenv from "dotenv";
import Event from "./classes/event.js";
import * as events from "./events/index.js";
import { logger } from "./lib/logger.js";
dotenv.config();

/**
 * DiscordJS Client instance
 */
export const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

const eventList = Object.values(events) as Event[];
try {
  // Register event handlers
  for (const event of eventList) {
    if (event.once) {
      client.once(event.event, (...args) => event.execute(...args));
    } else {
      client.on(event.event, (...args) => event.execute(...args));
    }
  }

  client.login(process.env.TOKEN);
} catch (error) {
  logger.error(error);
}
