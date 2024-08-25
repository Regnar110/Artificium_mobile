import React from 'react';
import UserAvatar from '../../../../../infrastructure/UserAvatar/UserAvatar';
import { View } from 'react-native';
import { styles } from './styles';
import CustomButton from '../../../../../infrastructure/CustomButton/CustomButton';
import SettingsWheel from '../../../../../public/svg/SettingsWheel.svg';
import MicrophoneGray from '../../../../../public/svg/microphonegray.svg';
import LogOut from '../../../../../public/svg/logout.svg';
import { fromUserPanelFooterStyles } from './fromUserPanelFooterStyles';
import { AuthorizationService } from '../../../../../Repositories/AuthorizationService';
import { useTypedNavigation } from '../../../../../infrastructure/hooks/useTypedNavigation';
import { genericFetch } from '../../../../../infrastructure/utils/genericFetch/genericFetch';
import { RedirectRoutes } from '../../../../../infrastructure/publicModels/navigatorTypes';
import { HttpStatus } from '../../../../../infrastructure/publicModels/HTTPStatuses';
export const UserPanelFooter = () => {
	const { navigate } = useTypedNavigation();
	const logoutCallback = async () => {
		const response = await genericFetch<never, { data: null, redirect: RedirectRoutes }>('http://192.168.0.171:3000/user/logout', 'GET');
		
		if (response.status === HttpStatus.OK) {
			await AuthorizationService.removeUserSessionKeyFromSecureStore();
			navigate(response.payload.redirect);
		} else {
			// Modal or some UI for errors ???
		}
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