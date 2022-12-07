const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Return pong lol"),
  async execute(interaction) {
    return interaction.reply({ content: "Pong lol" });
  },
};
