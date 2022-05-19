const { Interaction, Client, MessageButton, MessageEmbed } = require("discord.js");
const { MessageActionRow } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Shows mentioned users profile picture.",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'user',
            description: 'Avatar of the user you want to see.',
            type: 'USER',
            required: true,
        },
    ],
    /**
     * @param {Client} client
     * @param {Interaction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const taggedUser = interaction.options.getMember('user');

        const buttons = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel(".gif")
            .setStyle("LINK")
            .setURL(taggedUser.displayAvatarURL({ dynamic: true, size: 2048, format: "gif" }))
        )
        .addComponents(
            new MessageButton()
            .setLabel(".jpeg")
            .setStyle("LINK")
            .setURL(taggedUser.displayAvatarURL({ dynamic: true, size: 2048, format: "jpeg" }))
        )
        .addComponents(
            new MessageButton()
            .setLabel(".jpg")
            .setStyle("LINK")
            .setURL(taggedUser.displayAvatarURL({ dynamic: true, size: 2048, format: "jpg" }))
        )
        .addComponents(
            new MessageButton()
            .setLabel(".png")
            .setStyle("LINK")
            .setURL(taggedUser.displayAvatarURL({ dynamic: true, size: 2048, format: "png" }))
        )
        .addComponents(
            new MessageButton()
            .setLabel(".webp")
            .setStyle("LINK")
            .setURL(taggedUser.displayAvatarURL({ dynamic: true, size: 2048, format: "webp" }))
        )
        
		    embed = new MessageEmbed()
		    .setColor(GREEN)
        .setTitle(`${taggedUser.user.username}'s Avatar`)
        .setImage(taggedUser.displayAvatarURL({ dynamic: true, size: 2048 }))
        interaction.followUp({ embeds: [embed], components: [buttons]})
    }
};
