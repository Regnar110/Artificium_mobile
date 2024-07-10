import React from 'react';
import { Pressable } from 'react-native';
import PlusInCircle from '../../public/svg/plusInCircle.svg';
import { CustomFontText } from '../CustomFontText/CustomFontText';
import { styles } from './styles';

interface AddToFriendListInterface {
	callback: () => void
}
export const AddToFriendList = ({callback}: AddToFriendListInterface) => {
	return (
		<Pressable onPress={callback} style={styles.container}>
			<PlusInCircle width={25} height={25}/>
			<CustomFontText style={styles.text}>
				{'Add to friend list'}
			</CustomFontText>
		</Pressable>
	);
};