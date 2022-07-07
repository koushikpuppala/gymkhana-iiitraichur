import { NextApiRequest, NextApiResponse } from 'next'
import { MessageEmbed, WebhookClient } from 'discord.js'
import { config } from 'config'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { name, email, phone, subject, message } = req.body

		const ContactEmbed = new MessageEmbed()
			.setTitle(`A New Message from ${name}`)
			.addField('Name', name)
			.addField('Email', email)
			.addField('Phone Number', phone)
			.addField('Subject', subject)
			.addField('Message', message)
			.setTimestamp()

		const Client = new WebhookClient({ id: config.webhook.id, token: config.webhook.token })

		Client.send({
			content: '<@&855873104542171137>',
			embeds: [ContactEmbed],
		}).then(response => {
			return res.status(200).json({ success: true, message: response })
		})
	}
}
