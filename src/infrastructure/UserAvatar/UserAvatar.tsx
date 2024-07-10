import React from 'react';
import {
	ImageBackground,
	Pressable,
	StyleProp,
	TextStyle,
	View,
	ViewStyle
} from 'react-native';
import { styles } from './styles';
import { CustomFontText } from '../CustomFontText/CustomFontText';

interface UserAvatarInterface {
	displayName?: string,
	optionalStyles?: {
		avatarContainer?: StyleProp<ViewStyle>,
		avatarIMGContainer?: StyleProp<ViewStyle>,
		imageBackground?: StyleProp<ViewStyle>,
		avatarStatusDot?: StyleProp<ViewStyle>,
		avatarName?: StyleProp<TextStyle>,
	},
	callback?: () => void
}

const UserAvatar = ({ displayName, optionalStyles, callback }: UserAvatarInterface) => {
	return (
		<Pressable onPress={callback} style={[styles.avatarContainer, optionalStyles?.avatarContainer]}>
			<View style={[styles.avatarIMGContainer, optionalStyles?.avatarIMGContainer]}>
				<ImageBackground style={[styles.imageBg, optionalStyles?.imageBackground]} source={require('../../public/png/avatars/woman.png')}>
					<View style={[styles.avatarStatusDot , optionalStyles?.avatarStatusDot]} />
				</ImageBackground>
			</View>
			{	displayName &&
				<CustomFontText style={[styles.avatarName, optionalStyles?.avatarName]}>
					{displayName}
				</CustomFontText> 
			}			
		</Pressable>
	);
};

export default UserAvatar;