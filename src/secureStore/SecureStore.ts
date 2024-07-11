import * as SecureStore from 'expo-secure-store';

export class SecureStoreWorker {
	static async save(key: string, value: string) {
		await SecureStore.setItemAsync(key, value);
	}

	static async remove(key: string) {
		await SecureStore.deleteItemAsync(key);
	}

	static async get(key: string) {
		const getResult = await SecureStore.getItemAsync(key);
		if (!getResult) return null;

		return getResult;
	}

	static async verifyUserSession() {
		const userSessionToken = await SecureStore.getItemAsync('artificium_session');
		return userSessionToken;
	}
}