import React from 'react';
import { View, Text } from 'react-native';
import CustomCheckbox from '../../../CustomCheckbox/CustomCheckbox';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { updateFieldValue } from '../../store/redux/reducers/fieldsSlice';

const TermsCheckbox = () => {
	const dispatch = useDispatch();

	const handleCheckboxChange = (isChecked: boolean) => {
		dispatch(updateFieldValue({id: 'terms', checked: isChecked}));
	};

	return (
		<View style={styles.termsContainer}>
			<CustomCheckbox callback={handleCheckboxChange}/>
			<Text style={styles.text}>
			I agree with <Text style={styles.colorizedText}>Terms and conditions</Text>
			</Text>
		</View>
	);
};

export default TermsCheckbox;
