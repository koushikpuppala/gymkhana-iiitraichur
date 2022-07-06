import { model, models, Schema } from 'mongoose'
import { ClubModel } from 'types/database/models'

export default models.Club ||
	model(
		'Club',
		new Schema<ClubModel>({
			name: {
				type: String,
			},
			coordinators: {
				type: Array(String),
			},
			about: {
				type: String,
			},
			description: {
				type: String,
			},
			image: {
				type: String,
			},
			motto: {
				type: String,
			},
			email: {
				type: String,
			},
			twitter: {
				type: String,
			},
			facebook: {
				type: String,
			},
			instagram: {
				type: String,
			},
			linkedin: {
				type: String,
			},
			youtube: {
				type: String,
			},
			website: {
				type: String,
			},
			eventsId: {
				type: Array(String),
			},
		})
	)
