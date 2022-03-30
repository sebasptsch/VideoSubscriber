import { Client } from "discord.js";
import Event from "../classes/event.js";
import { logger } from "../lib/logger.js";

export const ready = new Event("ready")
  .setOnce(true)
  .setResponse(async (client: Client<true>) => {
    logger.info(`Bot started ${client.user.tag}`);
  });
