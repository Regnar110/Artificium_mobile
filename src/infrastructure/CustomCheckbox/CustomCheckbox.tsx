import React, { useEffect, useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { COLORS } from '../enums';
import { styles } from './styles';

interface CustomCheckboxType {
	isChecked: boolean,
	callback?: (isChecked: boolean) => void;
}

const CustomCheckbox = ({ callback, isChecked }:CustomCheckboxType) => {
	/**
	 * !TODO 
	 * SelectAll nie działa. Nalezy to poprawić
	 */
	const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
	const checkedHandler = (checked: boolean) => {
		setIsCheckboxChecked(checked);
		callback && callback(checked);
	};
	
	useEffect(() => {
		typeof isChecked !== 'undefined' && setIsCheckboxChecked(isChecked);
	}, [isChecked]);

	return (
		<BouncyCheckbox
			innerIconStyle={ isCheckboxChecked || isChecked ? styles.checkBoxChecked : styles.checkboxUnchecked}
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
