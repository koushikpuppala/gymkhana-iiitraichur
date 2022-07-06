import { GoogleAuthProvider, signInWithPopup, Auth, getAuth } from 'firebase/auth'
import { initializeApp, getApps } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { AuthServiceType } from 'types/authentication'
import { config } from 'config'
import { FirebaseStorage, getStorage } from 'firebase/storage'

if (!getApps().length) {
	initializeApp(config.firebaseConfig)
	if (typeof window !== 'undefined') {
		if ('measurementId' in config.firebaseConfig) {
			getAnalytics(initializeApp(config.firebaseConfig))
		}
	}
}

const auth: Auth = getAuth()

const storage: FirebaseStorage = getStorage(initializeApp(config.firebaseConfig))
export const Storage = {}

export const AuthService: AuthServiceType = {
	login: async () => {
		const provider: GoogleAuthProvider = new GoogleAuthProvider()
		await signInWithPopup(auth, provider)
			.then(UserCredential => {
				return {
					user: UserCredential.user,
				}
			})
			.catch(err => {
				return {
					error: err.message,
				}
			})
	},
	logout: async () => {
		await auth.signOut()
	},
}
