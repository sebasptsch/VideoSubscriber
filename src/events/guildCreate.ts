import { Guild } from "discord.js";
import Event from "../classes/event";
import { db } from "../lib/db";
import { logger } from "../lib/logger";

export const guildCreate = new Event("guildCreate")
  .setOnce(false)
  .setResponse(async ({ id, ownerId, name }: Guild) => {
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
