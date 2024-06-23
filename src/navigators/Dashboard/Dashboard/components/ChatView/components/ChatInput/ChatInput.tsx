import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { styles, customButtonOptionalStyles } from './styles';
import { View } from 'react-native';
import CustomButton from '../../../../../../../infrastructure/CustomButton/CustomButton';
import { COLORS } from '../../../../../../../infrastructure/enums';
import Pointer from '../../../../../../../public/svg/pointer.svg';

const ChatInput = () => {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.chatInput}
				placeholder='Send your message...'
				placeholderTextColor={COLORS.NOBLE_300}
			/>
			<CustomButton
				optionalStyles={customButtonOptionalStyles}
				SvgIcon={<Pointer width={13} height={13}/>} callback={() => console.log('click')}
			/>
		</View>

	);
};

export default ChatInput;