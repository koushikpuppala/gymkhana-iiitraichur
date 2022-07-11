import { Config } from 'types/config'

export const config: Config = {
	webhook: {
		id: process.env.NEXT_PUBLIC_WEBHOOK_ID as string,
		token: process.env.NEXT_PUBLIC_WEBHOOK_TOKEN as string,
	},
	mongoDB: {
		user: process.env.NEXT_PUBLIC_MONGODB_USER as string,
		pass: process.env.NEXT_PUBLIC_MONGODB_PASS as string,
		uri: process.env.NEXT_PUBLIC_MONGODB_URI as string,
	},
	firebaseConfig: {
		apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
		authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN as string,
		projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
		storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET as string,
		messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID as string,
		appId: process.env.NEXT_PUBLIC_APP_ID as string,
		measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID as string,
	},
}
