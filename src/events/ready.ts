import { Client } from "discord.js";
import Event from "../classes/event";
import { logger } from "../lib/logger";

export const ready = new Event("ready")
  .setOnce(true)
  .setResponse(async (client: Client<true>) => {
    logger.info(`Bot started ${client.user.tag}`);
  });
