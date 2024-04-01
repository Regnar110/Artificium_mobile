import React, { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { COLORS } from '../enums';
import { styles } from './styles';

interface CustomCheckboxType {
	callback?: (isChecked: boolean) => void;
}

const CustomCheckbox = ({ callback }:CustomCheckboxType) => {
	const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
	
	const checkedHandler = (isChecked: boolean) => {
		setIsCheckboxChecked(isChecked);
		callback && callback(isChecked);
	};

	return (
		<BouncyCheckbox
			innerIconStyle={ isCheckboxChecked ? styles.checkBoxChecked : styles.checkboxUnchecked}
			iconStyle={styles.checkboxIconStyle}
			size={20}
			textStyle={{fontSize: 14}}
			fillColor={COLORS.NOBLE_400}
			isChecked={isCheckboxChecked}
			onPress={checkedHandler}
		/>
	);
};

export default CustomCheckbox;
