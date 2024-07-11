import { useLayoutEffect } from 'react';
import { SecureStoreWorker } from '../../../secureStore/SecureStore';
import { useTypedNavigation } from '../useTypedNavigation';

/**
 * @function useCheckSessionOnNavigator
 * @description Checks before UI print if user stores session token for this app.
 * If token is found then navigate user to dashboard page, otherwise keep him on hubPage first.
 * 
 * Token is verified by API before navigating to dashboard
 */
export const useCheckSessionOnNavigator = () => {
	const { navigate } = useTypedNavigation();

	const validateSessionToken = async () => {
		const sessionToken = await SecureStoreWorker.get('artificium_session');
		if (!sessionToken) {
			navigate('hubpage');
			return;
		}
		navigate('dashboard');
	};
	
	useLayoutEffect(() => {
		validateSessionToken();
	});
};