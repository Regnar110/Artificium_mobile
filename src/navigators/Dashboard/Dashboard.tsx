import React, { useEffect } from 'react';
import RightDrawerScreen from './DrawerScreen/components/RightDrawerScreen/RightDrawerScreen';
import { useTypedNavigation } from '../../infrastructure/hooks/useTypedNavigation';
import { AuthorizationService } from '../../Repositories/AuthorizationService';
import { useDispatch } from 'react-redux';
import { connectionInit } from '../../store/dashboard/slices/socketIOSlice';

const DashboardPage = () => {
	const { navigate } = useTypedNavigation();
	const dispatch = useDispatch();

	const initSocketConnection = async () => {
		const token = await AuthorizationService.getUserTokenIfExist();
		dispatch(connectionInit(token));
	};

	useEffect(() => {
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