import mongoose from 'mongoose'
import { config } from 'config'
import { DatabaseType, MongoDBOptions } from 'types/database'

export const Database: DatabaseType = {
	connect: () => {
		const options: MongoDBOptions = {
			autoIndex: false,
			connectTimeoutMS: 10000,
			family: 4,
			maxPoolSize: 10,
			serverSelectionTimeoutMS: 5000,
			socketTimeoutMS: 45000,
		}
		mongoose.connect(config.mongoDB.uri, options, err => {
			if (err) {
				console.log(`MongoDB has encountered an error: \n ${err.stack}`)
			} else {
				console.log('MongoDB successfully connected')
			}
		})
	},
	disconnect: () => {
		mongoose.disconnect(() => {
			console.log('MongoDB disconnected')
		})
	},
}
