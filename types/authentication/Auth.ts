import { User } from 'firebase/auth'

export type AuthService = {
	login: () => Promise<User>
	logout: () => Promise<void>
}
