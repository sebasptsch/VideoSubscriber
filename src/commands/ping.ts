import { SlashCommandBuilder } from "@discordjs/builders";
import DiscordCommand from "../classes/command.js";

export const ping = new DiscordCommand()
  .setCommandData(
    new SlashCommandBuilder()
      .setName("ping")
      .setDescription("Replies with Pong!")
  )
  .setResponse(async (interaction) => {
    await interaction.reply({
      content: `Pong from JavaScript! Bot Latency ${Math.round(
        interaction.client.ws.ping
      )}ms.`,
      ephemeral: true,
    });
  });
