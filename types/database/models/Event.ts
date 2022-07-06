export interface Event {
	clubId: String
	name: String
	details: Text
	startDate: Date
	regEndDate: Date
	endDate: Date
	banner: String
	images: Array<String>
	prizes: {
		id: {
			type: String
		}
		name: {
			type: String
		}
	}[]
	prizesCount: Number
	certificate: Boolean
	certificateId: String
	registeredUsers: Array<String>
	winnerId: Array<String>
	ended: Boolean
}
