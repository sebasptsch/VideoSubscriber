import { CacheType, Interaction } from "discord.js";
import Event from "../classes/event.js";
import * as commands from "../commands/index.js";
import { logger } from "../lib/logger.js";

export const command = new Event("interactionCreate")
  .setOnce(false)
  .setResponse(async (interaction: Interaction<CacheType>) => {
    if (!interaction.isCommand()) return;
    try {
      const command = commands[interaction.commandName];
      command.execute(interaction);
    } catch (e) {
      logger.error(e);
      interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  });
