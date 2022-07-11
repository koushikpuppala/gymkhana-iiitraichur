import {
	FirebaseStorage,
	getStorage,
	deleteObject,
	ref,
	getDownloadURL,
	uploadBytes,
} from 'firebase/storage'
import { StorageType } from 'types/authentication'
import { initializeApp } from 'firebase/app'
import { config } from 'config'

const storage: FirebaseStorage = getStorage(initializeApp(config.firebaseConfig))

export const Storage: StorageType = {
	upload: async (url: string, file: Blob | ArrayBuffer | Uint8Array) => {
		const storageRef = ref(storage, url)
		const snapshot = await uploadBytes(storageRef, file)
		return await getDownloadURL(snapshot.ref)
	},
	download: async (url: string) => {
		const storageRef = ref(storage, url)
		return await getDownloadURL(storageRef)
	},
	delete: async (url: string) => {
		const storageRef = ref(storage, url)
		return await deleteObject(storageRef)
			.then(() => {
				return {
					success: true,
					message: 'Successfully deleted image',
				}
			})
			.catch(err => {
				return {
					success: false,
					message: 'Failed to delete image',
				}
			})
	},
}
