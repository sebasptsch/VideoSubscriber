import { Guild } from "discord.js";
import Event from "../classes/event";
import { db } from "../lib/db";
import { logger } from "../lib/logger";

export const guildDelete = new Event("guildDelete")
  .setOnce(false)
  .setResponse(async ({ id, ownerId, name }: Guild) => {
    db.guild
      .delete({ where: { id }, include: { subscribedChannels: true } })
      .then((result) => {
        logger.info(
          `Guild left Id: ${id}, Name: ${name}, OwnerId: ${ownerId}.`
        );
      })
      .catch((error) => logger.error(error));
  });
