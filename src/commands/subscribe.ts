import { SlashCommandBuilder } from "@discordjs/builders";
import DiscordCommand from "../classes/command";
import { db } from "../lib/db";
import { logger } from "../lib/logger";

export const subscribe = new DiscordCommand()
  .setCommandData(
    new SlashCommandBuilder()
      .setName("subscribe")
      .setDefaultPermission(false)
      .setDescription("Subscribe to new videos from a YouTube channel.")
      .addStringOption((option) =>
        option
          .setName("channelId")
          .setDescription("The Id of the channel you want to subscribe to.")
          .setRequired(true)
      )
      .addBooleanOption((option) =>
        option
          .setName("thread")
          .setDescription(
            "Whether or not a thread should automatically be opened for the channel."
          )
          .setRequired(false)
      )
  )
  .setResponse(async (interaction) => {
    const channelId = interaction.options.getString("channelId", true);
    const threadEnabled = interaction.options.getBoolean("thread", false);

    if (
      !interaction.guild.me
        .permissionsIn(interaction.channel.id)
        .has("CREATE_PUBLIC_THREADS") &&
      threadEnabled
    ) {
      // needs thread permission
      interaction.reply({
        content: `The bot needs permission to create threads in this channel for this to work.`,
        ephemeral: true,
      });
    } else if (
      !interaction.guild.me
        .permissionsIn(interaction.channel.id)
        .has("SEND_MESSAGES")
    ) {
      // needs send message permission
      interaction.reply({
        content: `The bot needs permission to send messages in this channel for this to work.`,
      });
    } else {
      db.subscribedChannel
        .create({
          data: {
            id: channelId,
            threadEnabled,
            discordChannelId: interaction.channelId,
            guildId: interaction.guildId,
          },
        })
        .then((result) => {
          logger.info(`Created subscription for channel with Id: ${channelId}`);
        })
        .catch((error) => logger.error(error));
    }
  });
