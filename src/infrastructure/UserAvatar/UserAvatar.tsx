import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { COLORS } from '../enums';

const UserAvatar = ({ displayName = true}: { displayName?: boolean}) => {
	return (
		<View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
			<View style={{width: 30, height: 30}}>
				<ImageBackground style={{width: '100%', height: '100%', position: 'relative'}} source={require('../../public/png/avatars/woman.png')}>
					<View style={{ position:'absolute', top: 0, right: -5, width: 15, height: 15, backgroundColor: COLORS.ELECTRIC_GREEN_600, borderRadius: 100, borderWidth: 3, borderColor: COLORS.NOBLE_700}} />
				</ImageBackground>
			</View>
			{displayName && <Text style={{ fontSize: 16, color: COLORS.HEISENBERG_500, fontWeight: 'medium'}}>{'Isabella Chen'}</Text> }			
		</View>
	)
};

export default UserAvatar;