// import { Interaction } from "discord.js";
// import DiscordEvent  from "../classes/event";
// import * as autocompletes from "../autocompletes";
// import { logger } from "../lib/logger";

// export const autocomplete = new DiscordEvent("interactionCreate")
//   .setOnce(false)
//   .setResponse(async (interaction: Interaction) => {
//     if (!interaction.isAutocomplete()) return;
//     try {
//       const autocomplete = autocompletes[interaction.commandName];
//       autocomplete.response(interaction);
//     } catch (error) {
//       logger.error(error);
//     }
//   });
