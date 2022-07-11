import { NextApiRequest, NextApiResponse } from 'next'
import { MessageEmbed, WebhookClient } from 'discord.js'
import { config } from 'config'
import { Database } from 'database'
import { HydratedDocument } from 'mongoose'
import { ContactSchema } from 'database/models'
import { ContactModel } from 'types/database/models'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	Database.connect()
	if (req.method === 'POST') {
		const { name, email, phone, subject, message } = req.body

		const ContactForm: HydratedDocument<ContactModel> = new ContactSchema<ContactModel>({
			name,
			email,
			phone,
			subject,
			message,
		})

		const ContactEmbed = new MessageEmbed()
			.setTitle(`A New Message from ${name}`)
			.addField('Name', name)
			.addField('Email', email)
			.addField('Phone Number', phone)
			.addField('Subject', subject)
			.addField('Message', message)
			.setTimestamp()

		const Client = new WebhookClient({ id: config.webhook.id, token: config.webhook.token })

		try {
			await ContactForm.save()
			await Client.send({
				content: '<@&855873104542171137>',
				embeds: [ContactEmbed],
			})
			Database.disconnect()
			res.status(200).json({ success: true, message: 'Message Sent Successfully!' })
		} catch (err) {
			console.error(err)
			res.status(200).json({
				success: false,
				message: 'Something went wrong. Please try again!',
			})
		}
	}
}
