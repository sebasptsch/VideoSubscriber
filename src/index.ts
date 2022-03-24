import { Client, Intents } from "discord.js";
import dotenv from "dotenv";
import * as events from "./events/index";
import { db } from "./lib/db";
import { logger } from "./lib/logger";
import Event from "./classes/event";
dotenv.config();

/**
 * DiscordJS Client instance
 */
export const client = new Client({
  intents: [],
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

// Handle stop signal
process.on("SIGINT", () => {
  client.destroy();
  db.$disconnect();
  logger.info("Bot Stopped");
});
