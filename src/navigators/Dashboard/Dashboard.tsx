import React, { useEffect } from 'react';
import RightDrawerScreen from './DrawerScreen/components/RightDrawerScreen/RightDrawerScreen';
import { useTypedNavigation } from '../../infrastructure/hooks/useTypedNavigation';
import { AuthorizationService } from '../../Repositories/AuthorizationService';

const DashboardPage = () => {
	const { navigate } = useTypedNavigation();

	const isUserLogged = async () => {
		const isLogged = await AuthorizationService.checkIfUserIsLogged();
		if (!isLogged) navigate('hubpage');
	};

	useEffect(() => {
		isUserLogged();
	});

	return (
		<RightDrawerScreen />
	);
};

export default DashboardPage;