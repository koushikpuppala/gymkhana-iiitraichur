import { model, models, Schema } from 'mongoose'
import { EventModel } from 'types/database/models'

export default models.Event ||
	model(
		'Event',
		new Schema<EventModel>({
			clubId: {
				type: String,
			},
			name: {
				type: String,
			},
			details: {
				type: Text,
			},
			startDate: {
				type: Date,
			},
			regEndDate: {
				type: Date,
			},
			endDate: {
				type: Date,
			},
			banner: {
				type: String,
			},
			images: {
				type: Array(String),
			},
			prizes: Array({
				id: {
					type: String,
				},
				name: {
					type: String,
				},
			}),
			prizesCount: {
				type: Number,
			},
			certificate: {
				type: Boolean,
			},
			certificateId: {
				type: String,
			},
			registeredUsers: {
				type: Array(String),
			},
			winnerId: {
				type: Array(String),
			},
			ended: {
				type: Boolean,
				default: false,
			},
		})
	)
