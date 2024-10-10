import React, { useEffect } from 'react';
import RightDrawerScreen from './DrawerScreen/components/RightDrawerScreen/RightDrawerScreen';
import { useTypedNavigation } from '../../infrastructure/hooks/useTypedNavigation';
import { AuthorizationService } from '../../Repositories/AuthorizationService';
import { SocketClient } from '../../socket';

const DashboardPage = () => {
	const { navigate } = useTypedNavigation();
	const initSocketConnection = async () => {
		const token = await AuthorizationService.getUserTokenIfExist();
		if (token) {
			console.log('INS')
			SocketClient.openConnections(['friendList', 'chat'], token);
		}
	};

	useEffect(() => {
		console.log('INIT')
		initSocketConnection();
	}, []);

	const isUserLogged = async () => {
		const isLogged = await AuthorizationService.checkIfUserIsLogged();
		if (!isLogged) navigate('hubpage');
	};

	useEffect(() => {
		isUserLogged();
	});

	return <RightDrawerScreen />;
	
};

export default DashboardPage;