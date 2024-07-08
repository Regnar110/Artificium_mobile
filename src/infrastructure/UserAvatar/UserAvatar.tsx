import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';

const UserAvatar = ({ displayName, size = 'normal' }: { displayName?: string, size?: 'normal' | 'large' }) => {
	return (
		<View style={styles.avatarContainer}>
			<View style={[size === 'normal' ? styles.avatarNormalIMGContainer : styles.avatarLargeIMGContainer ]}>
				<ImageBackground style={styles.imageBg} source={require('../../public/png/avatars/woman.png')}>
					<View style={styles.avatarStatusDot} />
				</ImageBackground>
			</View>
			{displayName && <Text style={styles.avatarName}>{displayName}</Text> }			
		</View>
	)
};

export default UserAvatar;