import { model, models, Schema } from 'mongoose'
export default models.User ||
	model(
		'User',
		new Schema({
			email: {
				desc: 'Email',
				type: String,
			},
			name: {
				type: String,
			},
			roll: {
				type: String,
			},
			batch: {
				type: Number,
			},
			isAdmin: {
				type: Boolean,
				default: false,
			},
			isSecretary: {
				type: Boolean,
				default: false,
			},
			isCoordinator: {
				type: Boolean,
				default: false,
			},
			secretary: {
				type: String,
				enum: [
					'PRESIDENT',
					'GENSEC 1',
					'GENSEC 2',
					'CULTURE',
					'SCI-TECH',
					'PUBLIC RELATIONS',
					'ACADEMIC AFFAIRS',
					'MESS',
					'NSS',
					'SPORTS',
				],
			},
			coordinator: {
				type: String,
				enum: [
					'CODESOC',
					'ELECTROGEEKS',
					'GDSC',
					'FINESSE',
					'XPOSURE',
					'FINSPIRATION',
					'DRAMANIACS',
					'NSS',
					'NSO',
					'EBSB',
				],
			},
			bio: {
				type: String,
			},
			instagram: {
				type: String,
			},
			linkedin: {
				type: String,
			},
			facebook: {
				type: String,
			},
			twitter: {
				type: String,
			},
			phone: {
				type: Number,
			},
			github: {
				type: String,
			},
			website: {
				type: String,
			},
		})
	)
