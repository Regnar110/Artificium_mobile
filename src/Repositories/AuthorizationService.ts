import { SecureStoreWorker } from '../secureStore/SecureStore';

export class AuthorizationService {

	static async checkIfUserIsLogged() {
		const userSessionKey = await SecureStoreWorker.get('artificium_session');
		return !!userSessionKey;
	}

	static async removeUserSessionKeyFromSecureStore() {
		await SecureStoreWorker.remove('artificium_session');
	}
}