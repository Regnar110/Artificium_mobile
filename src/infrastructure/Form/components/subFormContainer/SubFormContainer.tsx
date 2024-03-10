import React, { useContext } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { FormContext } from '../../store/context/FormContexts';
import TextLink from '../../../TextLink/TextLink';
import TermsCheckbox from '../TermsCheckbox/TermsCheckbox';
import RememberMeCheckbox from '../RememberMeCheckbox/RememberMeCheckbox';

const SubFormContainer = () => {

	const { rememberMeCheckbox, forgotPasswordRedirect, termsAgreement} = useContext(FormContext);
	return (
		<View style={styles.subFormWrapper}>
			{ rememberMeCheckbox && <RememberMeCheckbox/> }
			{ termsAgreement && <TermsCheckbox />}
			{ forgotPasswordRedirect && <TextLink text='Forgot Password?'/> }
		</View>
	);
};

export default SubFormContainer;
