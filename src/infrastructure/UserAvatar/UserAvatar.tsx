import React from 'react';
import { ImageBackground, View } from 'react-native';
import { styles } from './styles';
import { CustomFontText } from '../CustomFontText/CustomFontText';

const UserAvatar = ({ displayName, displayNameColor = 'HEISENBERG_500', size = 'normal' }: { displayName?: string, displayNameColor?:'NOBLE_100' | 'HEISENBERG_500', size?: 'normal' | 'large' }) => {
	return (
		<View style={styles.avatarContainer}>
			<View style={[size === 'normal' ? styles.avatarNormalIMGContainer : styles.avatarLargeIMGContainer ]}>
				<ImageBackground style={styles.imageBg} source={require('../../public/png/avatars/woman.png')}>
					<View style={styles.avatarStatusDot} />
				</ImageBackground>
			</View>
			{	displayName &&
				<CustomFontText style={[displayNameColor === 'HEISENBERG_500' ? styles.avatarName : styles.whiteAvatarName]}>
					{displayName}
				</CustomFontText> 
			}			
		</View>
	);
};

export default UserAvatar;