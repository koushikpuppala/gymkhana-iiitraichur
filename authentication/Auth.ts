import { GoogleAuthProvider, signInWithPopup, Auth, getAuth } from 'firebase/auth'
import { AuthServiceType } from 'types/authentication'
import { initializeApp, getApps } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { config } from 'config'

if (!getApps().length) {
	initializeApp(config.firebaseConfig)
	if (typeof window !== 'undefined') {
		if ('measurementId' in config.firebaseConfig) {
			getAnalytics(initializeApp(config.firebaseConfig))
		}
	}
}

const auth: Auth = getAuth()

export const AuthService: AuthServiceType = {
	login: async () => {
		const provider: GoogleAuthProvider = new GoogleAuthProvider()
		const userCredential = await signInWithPopup(auth, provider)
		return userCredential.user
	},
	logout: async () => {
		await auth.signOut()
	},
}
