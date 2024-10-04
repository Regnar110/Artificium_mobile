import React from 'react';
import UserAvatar from '../../../../../infrastructure/UserAvatar/UserAvatar';
import { View } from 'react-native';
import { styles } from './styles';
import CustomButton from '../../../../../infrastructure/CustomButton/CustomButton';
import SettingsWheel from '../../../../../public/svg/SettingsWheel.svg';
import MicrophoneGray from '../../../../../public/svg/microphonegray.svg';
import LogOut from '../../../../../public/svg/logout.svg';
import { fromUserPanelFooterStyles } from './fromUserPanelFooterStyles';
import { useTypedNavigation } from '../../../../../infrastructure/hooks/useTypedNavigation';
import { getSocketIO } from '../../../../../store/dashboard/slices/socketIOSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/dashboard/store';
import { AuthorizationService } from '../../../../../Repositories/AuthorizationService';
export const UserPanelFooter = () => {
	// const socket = useSocket();
	const { navigate } = useTypedNavigation();
	const logoutCallback = async () => {
		// const response = await genericFetch<never, { data: null, redirect: RedirectRoutes }>('http://192.168.0.171:3000/authentication/logout', 'GET');
		
		// if (response.status === HttpStatus.OK) {
		// 	socket.disconnect();
		// 	await AuthorizationService.removeUserSessionKeyFromSecureStore();
		// 	navigate(response.payload.redirect);
		// } else {
		// 	// Modal or some UI for errors ???
		// }
	};

	return (
		<View style={styles.userPanelFooterContainer}>
			<UserAvatar displayName='Mateusz Wrycza'/>
			<View style={styles.iconsContainer}>
				<CustomButton
					optionalStyles={fromUserPanelFooterStyles}
					callback={() => console.log('settings open click')}
					SvgIcon={<SettingsWheel width={20} height={20}/>}
				/>
				<CustomButton
					optionalStyles={fromUserPanelFooterStyles}
					callback={() => console.log('microphone click')}
					SvgIcon={<MicrophoneGray width={20} height={20}/>}
				/>		
				<CustomButton
					optionalStyles={fromUserPanelFooterStyles}
					callback={logoutCallback}
					SvgIcon={<LogOut width={20} height={20}/>}
				/>			
			</View>

		</View>
	);
};