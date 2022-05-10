require("dotenv").config();

const axios = require("axios");
const Discord = require("discord.js");
const { Client, Intents } = require("discord.js");

// Client startup

const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.CLIENT_TOKEN);

let regExp =
  /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;

client.on("message", (msg) => {
  if (msg.content.toLocaleLowerCase().includes("Mplay")) {
    if (!msg.content.toLocaleLowerCase().includes(regExp)) {
      channel.send("Invalid link!");
    } 
    
    else {

      try {
      } catch (error) {
        console.error("Download Failed.");
        channel.send("Download Failed.");
      }

      try {

      }
      catch () {
        console.error("Conversion Failed.");
        channel.send("Conversion Failed.");
      }
    }
  }
});
