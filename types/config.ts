export interface Config {
	mongoDB: {
		user: string
		pass: string
		uri: string
	}
	firebaseConfig: {
		apiKey: string
		authDomain: string
		projectId: string
		storageBucket: string
		messagingSenderId: string
		appId: string
		measurementId: string
	}
}
