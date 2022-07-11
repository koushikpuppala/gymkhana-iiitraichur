import { model, models, Schema } from 'mongoose'
import { ContactModel } from 'types/database/models'

export default models.Contact ||
	model(
		'Contact',
		new Schema<ContactModel>({
			name: {
				type: String,
			},
			email: {
				type: String,
			},
			phone: {
				type: String,
			},
			subject: {
				type: String,
			},
			message: {
				type: String,
			},
		})
	)
