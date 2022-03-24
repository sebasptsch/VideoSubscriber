import {
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

/**
 * The command class for defining new Dynamica commands.
 */
export default class DiscordCommand {
  public commandData:
    | SlashCommandBuilder
    | SlashCommandSubcommandsOnlyBuilder
    | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
  public execute: (interaction: CommandInteraction) => Promise<void>;

  /**
   * The command data for deploying discord commands.
   * @param commandData The discord command data.
   */
  setCommandData(
    commandData:
      | SlashCommandBuilder
      | SlashCommandSubcommandsOnlyBuilder
      | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">
  ) {
    this.commandData = commandData;
    return this;
  }

  /**
   * Set the function to execute
   * @param data The function to execute when the event is recieved and all the preconditions pass.
   */
  setResponse(data: (interaction: CommandInteraction) => Promise<void>) {
    this.execute = data;
    return this;
  }
}
