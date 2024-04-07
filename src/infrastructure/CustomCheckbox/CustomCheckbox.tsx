import React, { ReactNode } from 'react';
import { styles } from './styles';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';

interface CustomCheckboxType {
	isChecked: boolean,
	iconRenderer:() => ReactNode
	callback?: () => void;
	containerStyles?: StyleProp<ViewStyle>
	iconContainerStyles?: StyleProp<ViewStyle>
	checkedStyles?: StyleProp<ViewStyle>
}

const CustomCheckbox = ({ callback, iconRenderer, isChecked, containerStyles, iconContainerStyles, checkedStyles }:CustomCheckboxType) => {
	const checkedHandler = () => {
		callback && callback();
	};
	return (
		<Pressable
			onPress={checkedHandler}
			style={
				[styles.container, containerStyles, isChecked && [styles.checked, checkedStyles]]
			}
		>
			<View style={[styles.iconContainer, iconContainerStyles]}>
				{iconRenderer()}
			</View>
		</Pressable>

	);
};

export default CustomCheckbox;
