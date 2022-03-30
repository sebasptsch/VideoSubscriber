import { Guild } from "discord.js";
import Event from "../classes/event.js";
import { db } from "../lib/db.js";
import { logger } from "../lib/logger.js";

export const guildCreate = new Event("guildCreate")
  .setOnce(false)
  .setResponse(async ({ id, ownerId, name }, guild: Guild) => {
    db.guild
      .create({
        data: {
          id,
          ownerId,
        },
      })
      .then((result) => {
        logger.info(
          `Guild joined Id: ${id}, Name: ${name}, OwnerId: ${ownerId}.`
        );
      })
      .catch((error) => {
        logger.error(error);
      });
  });
