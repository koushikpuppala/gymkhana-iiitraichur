export type Storage = {
	upload: (url: string, file: Blob | ArrayBuffer | Uint8Array) => Promise<string>
	download: (url: string) => Promise<string>
	delete: (url: string) => Promise<{ success: boolean; message: string }>
}
