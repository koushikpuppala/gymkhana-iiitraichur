export interface MongoDBOptions {
	autoIndex: boolean
	connectTimeoutMS: number
	family: number
	maxPoolSize: number
	serverSelectionTimeoutMS: number
	socketTimeoutMS: number
}

export type DatabaseType = {
	connect: () => void
	disconnect: () => void
}
