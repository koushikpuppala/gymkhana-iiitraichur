import dotenv from 'dotenv'
import { Config } from 'types/config'

dotenv.config()

export const config: Config = {
	mongoDB: {
		user: process.env.MONGODB_USER as string,
		pass: process.env.MONGODB_PASS as string,
		uri: process.env.MONGODB_URI as string,
	},
	firebaseConfig: {
		apiKey: process.env.FIREBASE_API_KEY as string,
		authDomain: process.env.FIREBASE_AUTH_DOMAIN as string,
		projectId: process.env.FIREBASE_PROJECT_ID as string,
		storageBucket: process.env.FIREBASE_STORAGE_BUCKET as string,
		messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID as string,
		appId: process.env.FIREBASE_APP_ID as string,
		measurementId: process.env.FIREBASE_MEASUREMENT_ID as string,
	},
}
