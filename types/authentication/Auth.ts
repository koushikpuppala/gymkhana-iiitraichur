export type AuthService = {
	login: () => Promise<void>
	logout: () => Promise<void>
}
