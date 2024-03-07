import React, { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { COLORS } from '../enums';
import { styles } from './styles';

const CustomCheckbox = () => {

	const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
	return (
		<BouncyCheckbox
			innerIconStyle={ isCheckboxChecked ? styles.checkBoxChecked : styles.checkboxUnchecked}
			iconStyle={styles.checkboxIconStyle}
			size={20}
			text='Remember me'
			textStyle={{fontSize: 14}}
			fillColor={COLORS.NOBLE_400}
			isChecked={isCheckboxChecked}
			onPress={(isChecked) => setIsCheckboxChecked(isChecked)}
		/>
	);
};

export default CustomCheckbox;
