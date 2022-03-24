import { AutocompleteInteraction } from "discord.js";

export default class Autocomplete {
  /**
   * The name of the autocomplete in the API.
   */
  public name: string;

  /**
   * The response to an Autocomplete event.
   */
  public response: (interaction: AutocompleteInteraction) => Promise<void>;

  constructor() {}

  /**
   * Set the name of the autocomplete in the API.
   */
  setName(name: string) {
    this.name = name;
    return this;
  }

  /**
   * Set the response to an Autocomplete event.
   */
  setResponse(data: (interaction: AutocompleteInteraction) => Promise<void>) {
    this.response = data;
    return this;
  }
}
