import React, { useContext } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { FormContext } from '../../store/context/FormContexts';
import CustomCheckbox from '../../../CustomCheckbox/CustomCheckbox';
import TextLink from '../../../TextLink/TextLink';

const SubFormContainer = () => {

	const { rememberMeCheckbox, forgotPasswordRedirect } = useContext(FormContext);
	
	return (
		<View style={styles.subFormWrapper}>
			{ rememberMeCheckbox && <CustomCheckbox /> }
			{ forgotPasswordRedirect && <TextLink text='Forgot Password?'/> }
		</View>
	);
};

export default SubFormContainer;
